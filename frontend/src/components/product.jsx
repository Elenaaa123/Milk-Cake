import axios from 'axios';
import { useContext } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Store } from '../store';
import Rating from './rating';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import './product.css';

const Product = (props) => {
  const { product } = props;
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };
  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className="cardImg" alt={product.name} />
      </Link>

      <Card.Body className="cardBody">
        <Link to={`/product/${product.slug}`}>
          <Button className="icon" variant="light">
            <SearchIcon />
          </Button>
        </Link>
        {/*<Rating rating={product.rating} numReview={product.numReviews} />
        <Card.Text className="cardText">${product.price}</Card.Text>*/}
        {product.countInStock === 0 ? (
          <Button className="icon" variant="light" disabled>
            Out of Stock
          </Button>
        ) : (
          <Button
            className="icon"
            variant="light"
            onClick={() => addToCartHandler(product)}
          >
            <ShoppingCartIcon />
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};
export default Product;
