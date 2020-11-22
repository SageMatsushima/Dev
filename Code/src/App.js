
import React, { Component } from 'react';
import data from './data.json'
import Products from './components/Products'
import shopping from './components/shopping'

class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     filterText: 'words'
  //   }
  // }

  // filterUpdate(value) {
  //   this.setState({
  //     filterText: value
  //   })
  // }

  constructor(props) {
    super()
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }

  render() {
    return (
      <div className="gridContainer">
        <header>
          <a href="#">Shopping</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              products
              <Products products={this.state.products}></Products>
            </div>

            <div className="shopping">
              Cart
            </div>

          </div>
        </main>
        <footer>
          end
        </footer>

      </div>
      // // <div>

      //   {/* <products
      //     filterText={this.state.filterText} />
      //   <search
      //     filterText={this.state.filterText}
      //     filterUpdate={this.filterUpdate.bind(this)} />
      //   <shopping /> */}

      // // </div>
    );
  }
}

export default App;