import React, { Component } from 'react';

export default class QuantityPicker extends Component {

  constructor(props) {
    super(props);

    this.state = {value: 0, disable: true}
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    const plusState = this.state.value + 1;
    this.setState({value: plusState});
    this.setState({disable: false});
  }

  decrement() {
    const minusState = this.state.value - 1;
    if (this.state.value > 0) {
      this.setState({value: minusState });
      if (this.state.value == 1) {
        this.setState({disable: true});
      }
    } else {
      this.setState({value: 0});
    }

  }

  render() {
    const { disable } = this.state;

    return (
      <span className="quantity-picker">
        <button className={`${disable ? 'mod-disable ' : ''}quantity-modifier modifier-left`} onClick={this.decrement}>&ndash;</button>
        <input className="quantity-display" type="text" value={this.state.value} readOnly />
        <button className="quantity-modifier modifier-right" onClick={this.increment}>&#xff0b;</button>
      </span>
    );
  }
}
