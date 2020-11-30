import React, {Component} from 'react';
import CardNumberInput from './CardNumberInput';

class CardNumberHolder extends Component {

  state = {
    cardNumber: ''
  }

  handleChange = value => {
    this.setState({ cardNumber: value })
  }

  render() {
    return (
      <CardNumberInput cardNumber={this.state.cardNumber} handleChange={this.handleChange}/>
    );
  }
}

export default CardNumberHolder;
