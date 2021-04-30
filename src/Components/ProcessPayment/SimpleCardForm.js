import React, { useState } from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';



const SimpleCardForm = ({buttonDisabled,setButtonDisabled}) => {
  const [error,setError] = useState(null)
  const[success,setSuccess] = useState(null)
    const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
      setError(error.message)
      setSuccess(null)
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setSuccess(paymentMethod.id)
      setError(null)
      setButtonDisabled(false)
    }
  };
  // const handlePayment = () => {
   
  // }
    return (
        <div>
            <form onSubmit={handleSubmit}>
          <CardElement /> 
          <button type="submit" disabled={!stripe} className='btn btn-danger text-white mb-2 mt-lg-0 mt-3' >
        Confirm Payment
      </button>
     </form>
      <p className="text-center text-danger mb-3">
        {error}
      </p>
      {
        success && <p className="text-center text-success mb-3">
        You have successfully complete your payment request
      </p>
      }
            
        </div>
    );
};

export default SimpleCardForm;