// Mc20.test.js

import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Mc20 from './Mc20';
import { products as mockProducts } from './data.json';

// Mock the getProducts function to return the mock data
jest.mock('./data.json', () => ({
  products: [
    {
      id: 1,
      name: 'Product 1',
      image: 'https://via.placeholder.com/140',
      price: 100,
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'https://via.placeholder.com/140',
      price: 200,
    },
  ],
}));

// Mock useCartContext
const mockDispatch = jest.fn();
jest.mock('./Context/CartProvider', () => ({
  useCartContext: () => ({ dispatch: mockDispatch }),
}));

describe('Mc20 Component', () => {
  beforeEach(() => {
    render(<Mc20 />);
  });

  test('handles loading state and renders products', async () => {
    // Verify loading state
    expect(screen.getByText('Loading.....')).toBeInTheDocument();

    // Wait for the products to be loaded
    await waitFor(() => expect(screen.queryByText('Loading.....')).not.toBeInTheDocument());

    // Verify that products are rendered correctly
    mockProducts.forEach(product => {
      expect(screen.getByText(product.name)).toBeInTheDocument();
      expect(screen.getByText(`${product.price}`)).toBeInTheDocument();
      expect(screen.getByAltText(product.name)).toBeInTheDocument();
    });
  });

  test('adds product to cart when clicking add to cart button', async () => {
    // Wait for the products to be loaded
    await waitFor(() => expect(screen.queryByText('Loading.....')).not.toBeInTheDocument());

    // Get the add to cart buttons
    const addToCartButtons = screen.getAllByRole('img', { name: /shopping bag/i });

    // Simulate clicking the add to cart button for the first product
    fireEvent.click(addToCartButtons[0]);

    // Verify that the dispatch function is called with the correct action
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'ADD_TO_CART',
      payload: { product: mockProducts[0] },
    });
  });
});
