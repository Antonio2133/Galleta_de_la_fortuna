import getRandom from "../utils/getRandom"
import phrases from '../utils/phrases.json'
import arrImages from '../utils/arrImages.json'

const BtnPhrase = ( {setPhraseRandom, setimageSelected} ) => {

  const handleClick = ( ) => {
    const phrase = getRandom(phrases)
    setPhraseRandom(phrase)

    const background = getRandom(arrImages)
    setimageSelected(background)
  }

  return (
    <button onClick={handleClick}>Probar mi suerte</button>
  )
}

export default BtnPhrase