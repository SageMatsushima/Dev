import React, { Component } from 'react'
// import formatCurrency from "../util"

export default class Products extends Component {
    render() {
        //     const { price, filterText } = this.props;
        //     const products = data
        //       .filter(name => {
        //         return name.name.toLowerCase().indexOf(filterText) >= 0
        //       })
        return (
            <div>
                <ul className="products">
                    {this.props.products.map(product => (
                        <li key={product._id}>
                            <div className="product">
                                <a herf={"#" + product._id}>
                                    <img src={product.image} alt={product.title}></img>
                                    <p>{product.title}</p>
                                </a>
                                <div className="productPrice">
                                    <div>{product.price}</div>
                                    <button className="button primary">Add to Cart</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
