import { useState } from 'react';
import styled from 'styled-components';

const Checkout = () => {
  const [formData, setFormData] = useState({
    shipping: { name: '', address: '', city: '', state: '', zip: '' },
    billing: { name: '', address: '', city: '', state: '', zip: '' },
    payment: { cardNumber: '', expiration: '', cvv: '' },
  });

  const handleChange = (section, field, value) => {
    setFormData({
      ...formData,
      [section]: {
        ...formData[section],
        [field]: value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <Container>
      <h2>Checkout Page</h2>
      <Form onSubmit={handleSubmit}>
        <SectionGroup>
          <Section>
            <h3>Shipping Details</h3>
            <Input
              type="text"
              placeholder="Name"
              value={formData.shipping.name}
              onChange={(e) => handleChange('shipping', 'name', e.target.value)}
              required
            />
            <Input
              type="text"
              placeholder="Address"
              value={formData.shipping.address}
              onChange={(e) => handleChange('shipping', 'address', e.target.value)}
              required
            />
            <Input
              type="text"
              placeholder="City"
              value={formData.shipping.city}
              onChange={(e) => handleChange('shipping', 'city', e.target.value)}
              required
            />
          </Section>
          <Section>
            <h3>Billing Information</h3>
            <Input
              type="text"
              placeholder="Name"
              value={formData.billing.name}
              onChange={(e) => handleChange('billing', 'name', e.target.value)}
              required
            />
            <Input
              type="text"
              placeholder="Address"
              value={formData.billing.address}
              onChange={(e) => handleChange('billing', 'address', e.target.value)}
              required
            />
            <Input
              type="text"
              placeholder="City"
              value={formData.billing.city}
              onChange={(e) => handleChange('billing', 'city', e.target.value)}
              required
            />
          </Section>
        </SectionGroup>
        <SectionGroup>
          <Section>
            <Input
              type="text"
              placeholder="State"
              value={formData.shipping.state}
              onChange={(e) => handleChange('shipping', 'state', e.target.value)}
              required
            />
            <Input
              type="text"
              placeholder="Zip Code"
              value={formData.shipping.zip}
              onChange={(e) => handleChange('shipping', 'zip', e.target.value)}
              required
            />
          </Section>
          <Section>
            <Input
              type="text"
              placeholder="State"
              value={formData.billing.state}
              onChange={(e) => handleChange('billing', 'state', e.target.value)}
              required
            />
            <Input
              type="text"
              placeholder="Zip Code"
              value={formData.billing.zip}
              onChange={(e) => handleChange('billing', 'zip', e.target.value)}
              required
            />
          </Section>
        </SectionGroup>
        <Section>
          <h3>Payment Method</h3>
          <Input
            type="text"
            placeholder="Card Number"
            value={formData.payment.cardNumber}
            onChange={(e) => handleChange('payment', 'cardNumber', e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Expiration Date (MM/YY)"
            value={formData.payment.expiration}
            onChange={(e) => handleChange('payment', 'expiration', e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="CVV"
            value={formData.payment.cvv}
            onChange={(e) => handleChange('payment', 'cvv', e.target.value)}
            required
          />
        </Section>
        <OrderSummary>
          <h3>Order Summary</h3>
          {/* Replace with dynamic order summary */}
          <p>Product 1: $200.00</p>
          <p>Product 2: $300.00</p>
          <p>Total: $500.00</p>
        </OrderSummary>
        <Button type="submit">Place Order</Button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  padding: 50px;
  background-color: #17A2B8;
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SectionGroup = styled.div`
  display: flex;
  gap: 20px;
`;

const Section = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;

  h3 {
    margin-bottom: 10px;
    font-size: 18px;
  }
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const OrderSummary = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;

  h3 {
    margin-bottom: 10px;
    font-size: 18px;
  }

  p {
    margin: 5px 0;
  }
`;

const Button = styled.button`
  padding: 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default Checkout;