import { useEffect, useState } from 'react'
import { DataStore, Auth } from 'aws-amplify'
import { Vote } from '../models'

const useVotesPerIdea = (ideaId) => {
  const [votes, setVotes] = useState([])

  useEffect(() => {
    const subscription = DataStore.observeQuery(Vote, (v) => v.ideaId('eq', ideaId)).subscribe(
      (snapshot) => {
        console.log(
          `Received new snapshot with ${snapshot.items.length} votes for idea ${ideaId}. isSynced: ${snapshot.isSynced}`
        )
        setVotes(snapshot.items.map(({ authorId }) => authorId))
      }
    )

    return () => {
      subscription.unsubscribe()
    }
  }, [ideaId])

  return { votes }
}

const toggleVote = async (ideaId) => {
  const sub = (await Auth.currentAuthenticatedUser()).attributes.sub
  const result = await DataStore.query(Vote, (v) => v.ideaId('eq', ideaId).authorId('eq', sub))

  if (Array.isArray(result) && result.length === 0) {
    try {
      const vote = await DataStore.save(
        new Vote({ authorId: sub, ideaId: ideaId, owner: sub + '::' + sub })
      )
      console.log(`Created vote with id ${vote.id}`)
    } catch (error) {
      console.error(`Error while creating vote: `)
      console.log(error)
    }
  } else if (Array.isArray(result) && result.length > 0) {
    try {
      await DataStore.delete(Vote, result[0].id)
      console.log(`Deleted vote with id ${result[0].id}`)
    } catch (error) {
      console.error(`Error while deleting vote: `)
      console.log(error)
    }
  }
}

export { useVotesPerIdea, toggleVote }
