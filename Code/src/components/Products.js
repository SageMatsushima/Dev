import React, { Component } from 'react'
import formatCurrency from "../util"

export default class Products extends Component {
    render() {
        return (
            <div>
                <ul className="products">
                    {this.props.products.map(product => (
                        <li key={product._id}>
                            <div className="product">
                                <a herf={"#" + product._id}>
                                    <img src={product.image} alt={product._id}></img>
                                    <p>{product._id}</p>
                                </a>
                                <p> Type: {product.type}<br/>
                                    Evolution: {product.evolution}
                                </p>
                                <div className="productPrice">
                                    <div>{formatCurrency(product.price)}</div>
                                    <button onClick={() => this.props.addToCart(product)} className="button primary">Add to Cart</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
