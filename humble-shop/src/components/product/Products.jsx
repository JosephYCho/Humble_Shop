import React from "react";
import * as productService from "../../services/productService";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Row
} from "reactstrap";
import logo from "../../assets/Assets/logo.png";

const items = [
  {
    src: "",
    altText: "Slide 1",
    caption: "Slide 1"
  },
  {
    src: logo,
    altText: "Slide 1",

    caption: "Slide 2"
  },
  {
    src:
      "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    altText: "Slide 3",
    caption: "Slide 3"
  }
];

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

  onExiting = () => {
    this.animating = true;
  };

  onExited = () => {
    this.animating = false;
  };

  next = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === this.state.products.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  previous = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? this.state.products.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  };

  goToIndex = newIndex => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  };

  //   render() {
  //     const { activeIndex } = this.state;

  //     const slides = items.map((item) => {
  //       return (
  //         <CarouselItem
  //           onExiting={this.onExiting}
  //           onExited={this.onExited}
  //           key={item.src}
  //         >
  //           <img src={item.src} alt={item.altText} />
  //           <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
  //         </CarouselItem>
  //       );
  //     });

  //     return (
  //               <div id="product-container">

  //       <Carousel
  //         activeIndex={activeIndex}
  //         next={this.next}
  //         previous={this.previous}
  //       >
  //         {/* <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} /> */}
  //         {slides}
  //         <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
  //         <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
  //       </Carousel>
  //       </div>
  //     );
  //   }
  // }
  render() {
    const { products, activeIndex } = this.state;

    const slides = products.map(product => {
      return (
        // <div className="product-display">
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={product.sku}
        >
          {/* <div className="product-display"> */}
            <div className="product-image">
              {product.images && (
                <img src={product.images[0].url} alt={product.name} />
              )}
            </div>
            <div className="product-text">
              <CarouselCaption
                captionText={product.description}
                captionHeader={product.name}
              />
            </div>
          {/* </div> */}
        </CarouselItem>
      );
    });
    return (
      <div id="product-container">
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
          interval={false}
        >
          <CarouselIndicators
            items={products}
            activeIndex={activeIndex}
            onClickHandler={this.goToIndex}
          />

          {slides}

          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={this.previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={this.next}
          />
        </Carousel>
      </div>
    );
  }
}

export default Products;
