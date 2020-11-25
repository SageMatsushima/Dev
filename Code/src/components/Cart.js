import React, { Component } from 'react'

export default class Cart extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div>
        <div className="cart">
          <ul className="cartItems">
            {cartItems.cart.map(item => {
              <li key={cartItems._id}>
                <div>
                  <img src={cartItems.image} alt={cartItems.title}></img>
                </div>
                <div>
                  {cartItems.title}
                  <button onClick={this.props.removeFromCart(item)}>Remove</button>
                </div>
              </li>
            })}
          </ul>
        </div>
      </div>

    );
  }
}
