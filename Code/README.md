# App JS
    It contains the constructor for the React file and uses each component with the set state to update each item based on the actions of the user. Every
    variable is set to the default "All" or null value when it is first reloaded. The main render component returns an instance of each file and sets each 
    name to the respective method. 

    <-- Methods  -->
        This file holds the methods that the overall website uses such as: remove item from the cart, add item from the cart, and the filter/sort method. 

<!-- removeFromCart -->
        This method 

    const cartItems = this.state.cartItems.slice();
    cartItems.forEach((item) => {
      if (item.count > 1 && item._id === product._id) {
        item.count--;
        cartItems.length--;
        console.log(cartItems.length)
        console.log(item.count)
        this.setState({ cartItems })
      }
      else if (item._id === product._id && item.count === 1) {
        this.setState({
          cartItems: cartItems.filter((item) => item._id !== product._id),
        })
      }
    });
  };

        <-- addToCart  -->
            This method also takes in a product and uses it to put into the cartItem array. It first sets the array of the cartItems to the updated amount 
            of items. Then it creates a boolean variable that is set to false/ not in the cartItem array. It then goes through each item in the array and 
            if the item is in the array, it updates the count/number of items. If not, it adds it to the array of products/cart. It then updates the cart.
    

        <-- filter -->
            This method takes in the type and evolution that the user set/is set for the dropdown buttons. It then creates a let variable and sets it to the
            data/products from the data. If both the type and evolution options clicked from the dropdown buttons are not ""(all) or null, then filter the 
            products based on the type / evolution. Then update the state of each type, evolution, and the products. If it is "" (all) or null, don't do anything.

         <-- sort -->
            This method takes in the products and the sort method that is used. It then returns the sorted list of products that are compared to each 
            other. If the user chose the "lowest" option, the method returns the list that compares the products price to each other and if it is lower, 
            then it places it first in the data. If not, it sets the price from highest to lowest.

         <-- typeFilter -->
            This method takes in an event (when the user Clicks on the option) and runs the filter method to update all three (filter and sort methods) using 
            the clicked option and the updated evolution (other filter method) state.

        <-- evolutionFilter -->
            This method takes in an event (when the user Clicks on the option) and runs the filter method to update all three (filter and sort methods) using 
            the clicked option and the updated types (other filter method) state.

        <-- sortProducts  -->
            This method takes in an event (when the user Clicks on the option) and sets a constant (sort) to the clicked option. It then sets and updates the state
            of the sort option clicked and also updates the data/product list and runs the sort method with the data/products list and sorts based on the option clicked.


# Filter JS
    This file just creates the dropdown buttons and sets the values to the props value corresponding to the types/evolutions/sorts. It also corresponds each onChange to the
    respective method from the App class.

<!-- # Cart JS -->
    This file sets the cart up. If there are no items in the cart, then show that the cart is empty. ????????????????cart length error shit????????????

    It then makes a cart and maps each item to its appropriate id, title, count, etc when added. Each item also has a remove button that calls the remove method and removes
    all items of the type from the cart. It also creates a total at the bottom of the cart to add up the total price of the order by multiplying the items price to its count.

        {cartItems.length === 0 ? (
          <div className="cart cart-header">Cart is empty</div>
        ) : (
            <div className="cart cart-header">
              You have {cartItems.length} in the cart{" "}
            </div>
          )}


# Products JS
    This file creates the basic profile for each product. From the data in the Data.JSON file, it makes a item with the appropriate id, title, price, etc and adds the add to 
    cart button that calls the addToCart method from the app class when clicked.

# Data . JSON
    This JSON file holds the basic information for each products and stores it all in a products array. These properties are able to be accessed when looking through the 
    products array. They consist of the id, title, price, type, evolution, image, and description.

# Util JS
    This file is just for the formatting of currency and updating it for every change in the cart

# Index CSS
    Basic CSS file for the React app.
