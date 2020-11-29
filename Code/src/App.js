
import React, { Component } from 'react';
import data from './data.json'
import Products from './components/Products'
import Filter from './components/Filter'
import Cart from './components/Cart'


class App extends Component {
  constructor(props) {
    super()
    this.state = {
      products: data.products,
      cartItems: [],
      types: "",
      evolution: "",
      sort: "",
    };
  }

  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let inCart = true;
    cartItems.forEach((item) => {
      if (item._id === product._id && item.count > 1) {
        item.count--;
        cartItems.length--;
        inCart = false;
        console.log(cartItems)
        this.setState({ cartItems })
      }
    })
    if (inCart) {
      this.setState({
        cartItems: cartItems.filter((item) => item._id !== product._id),
      })
    }
  };

  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    console.log(cartItems)
    let inCart = false;
    cartItems.forEach((item) => {
      if (item._id === product._id) {
        item.count++;
        inCart = true;
        cartItems.length++;
      }
    });
    if (!inCart) {
      cartItems.push({ ...product, count: 1 });
    }
    this.setState({ cartItems });
  };

  filter = (type, evolution) => {
    let filteredProducts = data.products;

    // Reduce by filtering type if set
    if (type !== "") {
      filteredProducts = filteredProducts.filter((product) => product.type.indexOf(type) >= 0)
    }

    if (evolution !== "") {
      filteredProducts = filteredProducts.filter((product) => product.evolution === parseInt(evolution))
    }

    this.setState({ types: type, evolution: evolution, products: this.sort(filteredProducts, this.state.sort) });
  };

  sort = (products, sortMethod) => {
    return products.slice().sort((a, b) => {
      if (sortMethod === "lowest") {
        return a.price > b.price ? 1 : -1;
      } else {
        return a.price < b.price ? 1 : -1;
      }
    })
  };

  typeFilter = (event) => {
    this.filter(event.target.value, this.state.evolution)
  };

  evolutionFilter = (event) => {
    this.filter(this.state.types, event.target.value);
  };

  sortProducts = (event) => {
    const sort = event.target.value;
    this.setState((state) => ({
      sort: sort,
      products: this.sort(this.state.products, sort)
    }));
  };

  render() {
    return (
      <div className="gridContainer">
        <header>
          <h1>Pokemanz</h1>
        </header>
        <main>
          <div className="content">
            <div className="cart">
              <Cart cartItems={this.state.cartItems} removeFromCart={this.removeFromCart} />
            </div>
            <div className="main">
              <Filter
                count={this.state.products.length}
                types={this.state.types}
                sort={this.state.sort}
                typeFilter={this.typeFilter}
                evolutionFilter={this.evolutionFilter}
                sortProducts={this.sortProducts} />
              <Products products={this.state.products} addToCart={this.addToCart} />
            </div>



          </div>
        </main>

      </div>
    );
  }
}

export default App;