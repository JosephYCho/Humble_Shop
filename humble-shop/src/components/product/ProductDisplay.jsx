import React from "react";
import { Button } from "reactstrap";

class ProductDisplay extends React.Component {
  componentDidMount() {
    console.log(this.props.product);
  }
  render() {
    const { product } = this.props;
    return (
      <div className="productDisplay-container">
        <div className="item left-col">
          <div className="image-container">
            <img className="img-center" src={product.images[0].url} alt={product.name} />
          </div>
        </div>
        <div className="item right-col">
          <div className="text-container">
            <h2>
              <span className="bold-font makeOrange">BEST SELLER //</span>{" "}
              {product.sku}
            </h2>
            <br />
            <h2 className="makeOrange ">
              {product.manufacturer}{" "}
              <span className="capitalize ">{product.name}</span>
            </h2>
            <br />

            <h2>About the product</h2>
            <p>{product.description}</p>
            <Button>ADD TO CART</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDisplay;
