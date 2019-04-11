// Test away
import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Dashboard from './Dashboard';

afterEach(cleanup);

describe('<Dashboard />', () => {
  const setup = () => render(<Dashboard />);
  it('renders without error', () => {
    setup();
  });

  it('shows the controls and display', () => {
    const { getByText } = setup();
    getByText(/lock gate/i);
    getByText(/unlocked/i);
  });

});
