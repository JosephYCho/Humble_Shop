import React from "react";
import * as productService from "../../services/productService";
import ProductDisplay from "./ProductDisplay";

class Products extends React.Component {
  state = {
    products: [],
    activeIndex: 0
  };

  componentDidMount() {
    productService.getAllProducts().then(this.onGetAllSuccess);
  }

  onGetAllSuccess = response => {
    console.log(response);
    this.setState({
      products: response.data
    });
  };

  goPrev = () => {
    if (this.state.activeIndex === 0) {
      this.setState({
        activeIndex: this.state.products.length - 1
      });
    } else {
      this.setState(prevState => ({
        activeIndex: prevState.activeIndex - 1
      }));
    }
  };

  goNext = () => {
    if (this.state.activeIndex === this.state.products.length - 1) {
      this.setState({
        activeIndex: 0
      });
    } else {
      this.setState(prevState => ({
        activeIndex: prevState.activeIndex + 1
      }));
    }
  };

  render() {
    const { products, activeIndex } = this.state;
    return (
      <div id="product-container">
        <div className="left-arrow">
          <button onClick={this.goNext}>left</button>
        </div>
        {products[0] && <ProductDisplay product={products[activeIndex]} />}
        
        <div className="right-arrow">
          <button onClick={this.goNext}>right</button>
        </div>
      </div>
    );
  }
}

export default Products;
