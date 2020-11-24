import React, { Component } from 'react'

export default class Cart extends Component {
    render() {
        const { cartItems } = this.props;
        return (
            <div>
                <div className="cart cart-header">
                    console.log(cartItems);
                    You have {cartItems.length} in the cart{" "}
                </div>
            </div>

        );
    }
}
