import { useEffect, useState } from 'react'
import { DataStore, Auth } from 'aws-amplify'
import { Topic, TopicStatus, MultilingualString } from '../models'

const useTopics = () => {
  const [topics, setTopics] = useState([])

  useEffect(() => {
    const subscription = DataStore.observeQuery(Topic).subscribe((snapshot) => {
      console.log(
        `Received new snapshot with ${snapshot.items.length} items. isSynced: ${snapshot.isSynced}`
      )
      setTopics(snapshot.items)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return { topics }
}

const createTopic = async (title, description) => {
  if (title && description) {
    try {
      const sub = (await Auth.currentAuthenticatedUser()).attributes.sub
      const topic = await DataStore.save(
        new Topic({
          title: title,
          authorId: sub,
          status: TopicStatus.RUNNING,
          description: new MultilingualString({ en: description, de: description }),
          owner: sub + '::' + sub
        })
      )
      console.log(`Stored topic: ${JSON.stringify(topic)}`)
      return true
    } catch (error) {
      console.error(`An error occured while creating topic`)
      console.log(error)
    }
  }
  return false
}

const deleteTopic = async (topicId) => {
  try {
    await DataStore.delete(Topic, topicId)
    console.log(`Successfully deleted idea ${topicId}`)
  } catch (error) {
    console.error(`An error occured while deleting idea ${topicId}`)
    console.log(error)
  }
}

export { useTopics, createTopic, deleteTopic }
