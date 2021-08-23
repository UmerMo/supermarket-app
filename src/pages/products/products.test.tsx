import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductsPage from './products';

it('renders products title', () => {
    render(<ProductsPage />);
    expect(screen.getByText('Products page')).toBeInTheDocument();
})
