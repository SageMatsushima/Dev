import React, { Component } from 'react'
import formatCurrency from '../util';

export default class Cart extends Component {
  render() {
    const { cartItems } = this.props
    return (
      <div>
        {cartItems.length === 0 ? (
          <div className="cart cart-header">Cart is empty</div>
        ) : (
            <div className="cart cart-header">
              You have <b>{cartItems.length}</b> item(s) in the cart{" "}
            </div>
          )}
        <div className="cart">
          <ul className="cartItems">
            <div>
              {cartItems.map(item => (
                <li key={item._id}>
                  <div className="item">
                    <div className="img">
                      <img className="cartImage" src={item.image} alt={item._id}></img>
                    </div>
                    <div className="des">
                      <p className="title">
                        {item._id}
                      </p>
                      <div>
                        {formatCurrency(item.price)} x {item.count}
                      </div></div>
                    <button className="button" onClick={() => this.props.removeFromCart(item)}>Remove</button>
                  </div>

                </li>
              ))}</div>
          </ul>
        </div>
        <div className="cart">
          <div className="total">
            Total: {" "}
            {formatCurrency(cartItems.reduce((a, c) => a + c.price * c.count, 0))}
          </div>
        </div>
      </div >

    );
  }
}
