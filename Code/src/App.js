
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
      cart: [],
      size: "",
      sort: "",
    };
  }

  // addToCart = (product) => {
  //   const cartItems = this.state.cartItems;
  //   let alreadyInCart = false;
  //   cartItems.forEach((item) => {
  //     if (item._id === product._id) {
  //       item.count++;
  //       alreadyInCart = true;
  //     }
  //   });
  //   if (!alreadyInCart) {
  //     cartItems.push({ ...product, count: 1 });
  //   }
  //   this.setState({ cartItems });
  // };

  // filterProducts = (event) => {
  //   console.log(event.target.value);
  //   if (event.target.value === "") {
  //     this.setState({ size: event.target.value, products: data.products });
  //   } else {
  //     this.setState({
  //       size: event.target.value,
  //       products: data.products.filter(
  //         (product) => product.availableSizes.indexOf(event.target.value) >= 0
  //       ),
  //     });
  //   }
  // };

  sortProducts = (event) => {
    const sort = event.target.value;
    console.log(event.target.value);
    this.setState((state) => ({
      sort: sort,
      products: this.state.products.slice().sort((a, b) => {
        if (sort === "lowest") {
          return a.price > b.price ? 1 : -1;
        } else {
          return a.price < b.price ? 1 : -1;
        }
      })
    }));

    console.log(this.state);
    console.log("CHANGED DROP DOWN ITEM")
  };

  render() {
    return (
      <div className="gridContainer">
        <header>
          <a href="#">Shopping</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter count={this.state.products.length}>
                size={this.state.size}
                sort={this.state.sort}
                {/* filterProducts={this.filterProducts} */}
                sortProducts={() => this.sortProducts()}
              </Filter>
              <Products products={this.state.products} addToCart={this.addToCart}></Products>
            </div>

            <div className="shopping">
              {/* <Cart>cartItems = {this.state.cartItems}</Cart> */}
            </div>

          </div>
        </main>
        <footer>
          end
        </footer>

      </div>
    );
  }
}

export default App;