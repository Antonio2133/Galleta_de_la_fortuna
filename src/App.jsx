import { useState } from 'react'
import './App.css'
import phrases from './utils/phrases.json'
import authors from './utils/phrases.json'
import getRandom from './utils/getRandom'
import PhraseCard from './components/PhraseCard'
import BtnPhrase from './components/BtnPhrase'
import arrImages from './utils/arrImages.json'

function App() {

  const initialValue = getRandom(phrases, authors)
  const [phraseRandom, setPhraseRandom] = useState(initialValue)

  const initialImage = getRandom(arrImages)
  const [imageSelected, setimageSelected] = useState(initialImage)

  const objStyle = {
    backgroundImage: `url('/fondo${imageSelected}.png')`
  }

  return (
    <div style={objStyle}>
      <h1>Galleta de la fortuna</h1>
      <PhraseCard phraseR={phraseRandom} authorR={phraseRandom} />
      <BtnPhrase setPhraseRandom={setPhraseRandom} setimageSelected={setimageSelected}/>
    </div>
  )
}



export default App
