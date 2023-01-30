import CheckOutSteps from '../components/checkOutSteps';
import { Helmet } from 'react-helmet-async';
import { Button, Form } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { Store } from '../store';
import { useNavigate } from 'react-router-dom';

const PaymentMethodScreen = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { shippingAddress, paymentMethod },
  } = state;

  const navigate = useNavigate();
  useEffect(() => {
    if (!shippingAddress.address) {
      navigate('/shipping');
    }
  }, [shippingAddress, navigate]);
  const [paymentMethodName, setPaymentMethod] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({ type: 'SAVE_PAYMENT_METHOD', payload: paymentMethodName });
    localStorage.setItem('paymentMethod', paymentMethodName);
    navigate('/placeorder');
  };
  return (
    <div>
      <CheckOutSteps step1 step2 step3></CheckOutSteps>
      <div className="container small-container">
        <Helmet>
          <title>Payment Method</title>
        </Helmet>
        <h1 className="my-3">Payment Method</h1>
        <Form onSubmit={submitHandler}>
          <Form.Check
            type="radio"
            id="PayPal"
            label="PayPal"
            value="PayPal"
            checked={paymentMethodName === 'PayPal'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <Form.Check
            type="radio"
            id="Stripe"
            label="Stripe"
            value="Stripe"
            checked={paymentMethodName === 'Stripe'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <Button type="submit">Continue</Button>
        </Form>
      </div>
    </div>
  );
};

export default PaymentMethodScreen;
