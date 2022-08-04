import { useState } from 'react'
import { Predictions } from 'aws-amplify'

const useTranslation = () => {
  const [translation, setTranslation] = useState('')
  const [loading, setLoading] = useState(false)
  const [latestTranslatedText, setLatestTranslatedText] = useState('')

  const capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1)
  }

  const translate = async (text) => {
    if (text && text !== latestTranslatedText) {
      setLoading(true)
      try {
        const result = await Predictions.convert({
          translateText: {
            source: {
              text: text
            }
          }
        })
        setLatestTranslatedText(text)
        setTranslation(capitalizeFirstLetter(result?.text))
      } catch (error) {
        console.error(`An error occured while translating text ${text}`)
        console.log(error)
      }
      setLoading(false)
    }
  }

  return { translate, translation, loading }
}

export { useTranslation }
