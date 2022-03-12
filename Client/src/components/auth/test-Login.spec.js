import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import Login from './Login';

test('should render login component', () => {
   render(<Login />);
   const loginElement = screen.getByTestId('login');
   expect(loginElement).toBeInTheDocument();
   expect(loginElement).toHaveTextContent('LOGIN');
});
