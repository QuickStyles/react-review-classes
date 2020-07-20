import React, { Component } from 'react';
import CharacterList from '../components/CharacterList';

class CreateDeckPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedCards : []
    }
    this.updateSelectedCards = this.updateSelectedCards.bind(this);
  }

  updateSelectedCards(id) {
    // 1) filter props.availableCards to find the card with `id`
    // 2) push this card to selectedCards
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

  render() {
    return (
      <div>
        <div className='availableCards' style={{ backgroundColor: 'red'}}>
          <CharacterList 
            characters={this.props.availableCards} 
            style={{...styles.availableCardsList}} 
            selectCharacter={this.updateSelectedCards}
          />
        </div>
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