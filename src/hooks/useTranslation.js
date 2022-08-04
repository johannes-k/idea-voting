import { useState } from 'react'
import { Predictions } from 'aws-amplify'

const translateText = async (text) => {
  let result = ''
  try {
    result = capitalizeFirstLetter(
      (
        await Predictions.convert({
          translateText: {
            source: {
              text: text
            }
          }
        })
      ).text
    )
  } catch (error) {
    console.error(`An error occured while translating text ${text}`)
    console.log(error)
  }
  return result
}

const useTranslation = () => {
  const [translation, setTranslation] = useState('')
  const [loading, setLoading] = useState(false)
  const [latestTranslatedText, setLatestTranslatedText] = useState('')

  const translate = async (text) => {
    if (text && text !== latestTranslatedText) {
      setLoading(true)
      const result = await translateText(text, latestTranslatedText)
      setLatestTranslatedText(text)
      setTranslation(result)
      setLoading(false)
    }
  }

  return { translate, translation, loading }
}

const capitalizeFirstLetter = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

export { useTranslation, translateText }
