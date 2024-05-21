// Header.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';
import { CartProvider } from './Context/CartProvider';

// Mock data
const mockCart = [
  {
    id: 1,
    name: 'Product 1',
    image: 'https://via.placeholder.com/100',
    price: 100,
    quantity: 2,
  },
  {
    id: 2,
    name: 'Product 2',
    image: 'https://via.placeholder.com/100',
    price: 200,
    quantity: 1,
  },
];

// Mock context provider
const MockCartProvider = ({ children }) => {
  const mockDispatch = jest.fn();
  return (
    <CartProvider value={{ cart: mockCart, dispatch: mockDispatch }}>
      {children}
    </CartProvider>
  );
};

test('renders Header component and interacts with cart', () => {
  render(
    <MockCartProvider>
      <Header />
    </MockCartProvider>
  );

  // Verify the cart icon is displayed with the correct badge content
  const cartIcon = screen.getByRole('img', { name: /shopping cart/i });
  expect(cartIcon).toBeInTheDocument();
  expect(screen.getByText(mockCart.length)).toBeInTheDocument();

  // Simulate clicking on the cart icon
  fireEvent.click(cartIcon);

  // Verify the cart details are displayed
  mockCart.forEach((product) => {
    expect(screen.getByAltText(product.name)).toBeInTheDocument();
    expect(screen.getByText(`Quantity-${product.quantity}`)).toBeInTheDocument();
    expect(screen.getByText(`${product.price * product.quantity}`)).toBeInTheDocument();
  });

  // Simulate clicking on the delete icon for the first product
  const deleteIcons = screen.getAllByRole('img', { name: /delete/i });
  fireEvent.click(deleteIcons[0]);

  // Verify the dispatch function is called with the correct action
  expect(mockDispatch).toHaveBeenCalledWith({
    type: 'REMOVE_FROM_CART',
    payload: { id: mockCart[0].id },
  });
});
