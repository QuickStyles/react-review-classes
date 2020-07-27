import React ,{ Component } from 'react';
import Card from '../components/Card';
import { Deck } from '../requests';

class DeckShowPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deckData: {}
    }
  }

  componentDidMount() {
    if (!this.props.location.state) {
      Deck.show(this.props.match.params.id)
        .then(payload => {
          this.setState(state => {
            return {deckData: payload}
          })
        })
    }
  }

  render() {
    let title;
    let cards = [];

    if (this.state.deckData.name) { // if we got deck data from a fetch request
      title = this.state.deckData.name
      cards = this.state.deckData.cards
    }
    if (!title && this.props.location.state) { // if we got deck data from history.push
      title = this.props.location.state.name
      cards = this.props.location.state.cards
    }
    if (!title) { // if deck data has not been loaded yet
      title = 'loading'
    }

    return (
      <div>
          <h2>{title}</h2>
          {
            cards.map(card => {
              return <Card character={card}/>
            })
          }
    </div>
    )
  }
}

export default DeckShowPage;
