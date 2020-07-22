import React from 'react'

function DecksIndexPage(props) {
  const decks = props.decks
  return (
    <div>
      {
        decks.map(deck => {
          return <div>{ deck.name }</div>
        })
      }
    </div>
  )
}

export default DecksIndexPage
