import React, { Component } from 'react';
import CharacterList from '../components/CharacterList';
import { Deck } from '../requests';

const MAX_DECK_CARDS_COUNT = 5;
class CreateDeckPage extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      selectedCards: [],
      error: null,
      name: ''
    }
    this.updateSelectedCards = this.updateSelectedCards.bind(this);
  }

  updateSelectedCards(id) {
    if (this.state.selectedCards.length >= MAX_DECK_CARDS_COUNT) {
      this.setState(() => {
        return {
          error: `A deck can not have more than ${MAX_DECK_CARDS_COUNT} cards`
        }
      })
      return
    }
    const selectedCard = this.props.availableCards.filter((card) => {
      return card.id === id
    })[0];
    if (selectedCard) {
      this.setState((state) => {
        return {
          selectedCards: [...state.selectedCards, selectedCard]
        }
      })
    }
  }

  saveDeck = () => {
    const allCards = this.state.selectedCards
    const deckData = {
      deck: {
        selectedCards: allCards,
        name: this.state.name
      }
    }
    Deck.create(deckData)
      .then(payload => {
        this.props.handleCreateDeck();
      });
    // 1) get all the cards from state
    // 2) send a fetch request POST /decks with Params:
    // {
    //   deck: {
    //     selectedCards: [],
    //     name: 'some string'
    //   }
    // }
    
  }

  handleInput = (event) => {
    const value = event.currentTarget.value
    this.setState( state => {
      return {
        name: value
      }
    })
  }

  render() {
    return (
      <div>
        { this.state.error ? <p>{this.state.error}</p> : null }
        <div className='availableCards' style={{ backgroundColor: 'red'}}>
          <CharacterList 
            characters={this.props.availableCards} 
            style={{...styles.availableCardsList}} 
            selectCharacter={this.updateSelectedCards}
          />
        </div>
        <button onClick={this.saveDeck}>save Deck</button>
        <label htmlFor="name" />
        <input onChange={this.handleInput} type="text" name="name" value={this.state.name}/>
        <div className="selectedCards" style={{ backgroundColor: 'blue'}}>
          <CharacterList
            characters={this.state.selectedCards}
            style={{...styles.availableCardsList}}
          />
        </div>
      </div>
    )
  }
}

const styles = {
  availableCardsList: {
    display: 'flex',
    flexFlow: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '20px'
  }
}

export default CreateDeckPage;