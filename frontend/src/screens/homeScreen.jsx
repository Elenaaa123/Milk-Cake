import { useEffect, useReducer } from 'react';
import axios from 'axios';

import logger from 'use-reducer-logger';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/product';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/loadingBog';
import MessageBox from '../components/messageBox';
import Slider from '../components/slider';
import AboutUs from '../components/aboutUs.component';
import Recipes from '../components/recipes';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const HomeScreen = () => {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Milk & Cake</title>
      </Helmet>

      <Slider />

      <h1 style={{ fontWeight: '200' }}>Life is short so eat cake now.</h1>
      <div className="products">
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <Row>
            {products.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                <Product product={product}></Product>
              </Col>
            ))}
          </Row>
        )}
      </div>
      <AboutUs />
      <Recipes />
    </div>
  );
};

export default HomeScreen;
