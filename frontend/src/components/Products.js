import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const products = [
  {
    id: 1,
    name: 'Aritzia Dress',
    description: 'Elegant and timeless dress for any occasion.',
    price: '$19.99',
    image: 'aritziadress.jpeg',
  },
  {
    id: 2,
    name: 'Black Skirt',
    description: 'Stylish black skirt that pairs well with any top.',
    price: '$29.99',
    image: 'blackskirt.jpeg',
  },
  {
    id: 3,
    name: 'Leather Boots',
    description: 'Durable and trendy boots for every season.',
    price: '$39.99',
    image: 'boots.jpeg',
  },
  {
    id: 4,
    name: 'Cozy Sweater',
    description: 'Keep warm with this soft, comfortable sweater.',
    price: '$49.99',
    image: 'sweater.jpeg',
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ProductsCarousel = () => {
  return (
    <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000}>
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-info">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <span>{product.price}</span>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default ProductsCarousel;
