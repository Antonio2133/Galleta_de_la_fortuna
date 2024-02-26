import './styles/PhraseCard.css'

const PhraseCard = ( {phraseR, authorR} ) => {

  const { phrase } = phraseR
  const { author } = authorR

  return (
    <div>
      <p className="card_phrase"> { phrase } </p>
      <q className="card_cite"> { author } </q>
    </div>
  )
}

export default PhraseCard