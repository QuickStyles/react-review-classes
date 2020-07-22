import React from 'react'

function DecksIndexPage(props) {
  const decks = props.decks
  return (
    <div>
      {
        decks.map(deck => {
          return(
            <div style={styles.container}>
              <h3>{ deck.name }</h3>
              <p>Card Count: {deck.cards.length}</p>
            </div>
          )
        })
      }
    </div>
  )
}

const styles = {
  container: {
    width: '200px',
    height: '200px',
    backgroundColor: 'lightblue'
  }
}

export default DecksIndexPage
