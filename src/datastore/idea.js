import { useEffect, useState } from 'react'
import { DataStore, Auth } from 'aws-amplify'
import { Idea } from '../models'

const useIdeas = (topicId) => {
  const [ideas, setIdeas] = useState([])

  useEffect(() => {
    const ideas = DataStore.observeQuery(Idea, (i) => i.topicId('eq', topicId)).subscribe(
      (snapshot) => {
        console.log(
          `Received new snapshot with ${snapshot.items.length} Ideas. isSynced: ${snapshot.isSynced}`
        )
        setIdeas(snapshot.items)
      }
    )

    return () => {
      console.log(`Unsubscribing to idea updates for topic ${topicId}`)
      ideas.unsubscribe()
    }
  }, [topicId])

  return { ideas }
}

const createIdea = async (title, topicId) => {
  if (title && topicId) {
    try {
      const sub = (await Auth.currentAuthenticatedUser()).attributes.sub
      const idea = await DataStore.save(
        new Idea({
          topicId: topicId,
          authorId: sub,
          title: title
        })
      )
      console.log(`Stored idea: ${JSON.stringify(idea)}`)
      return true
    } catch (error) {
      console.error(`An error occured while creating idea idea`)
      console.log(error)
    }
  }
  return false
}

const deleteIdea = async (ideaId) => {
  try {
    await DataStore.delete(Idea, ideaId)
    console.log(`Successfully deleted idea ${ideaId}`)
  } catch (error) {
    console.error(`An error occured while deleting idea ${ideaId}`)
    console.log(error)
  }
}

export { useIdeas, createIdea, deleteIdea }
