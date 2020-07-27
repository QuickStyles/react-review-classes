import React from 'react'

function DecksIndexPage(props) {
  const decks = props.decks
  const history = props.history

  return (
    <div>
      {
        decks.map(deck => {
          return(
            <div style={styles.container} onClick={(event)=>handleDeckClick(event, deck, history)}>
              <h3>{ deck.name }</h3>
              <p>Card Count: {deck.cards.length}</p>
            </div>
          )
        })
      }
    </div>
  )
}

function handleDeckClick(event, deck, history) {
  console.log(deck);
  history.push(`/decks/${deck.id}`, deck)
}

const styles = {
  container: {
    width: '200px',
    height: '200px',
    backgroundColor: 'lightblue'
  }
}

export default DecksIndexPage
