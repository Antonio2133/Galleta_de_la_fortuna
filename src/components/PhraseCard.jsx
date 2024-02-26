
const PhraseCard = ( {phraseR, authorR} ) => {

  const { phrase } = phraseR
  const { author } = authorR

  return (
    <div>
      <p> { phrase } </p>
      <p> { author } </p>
    </div>
  )
}

export default PhraseCard