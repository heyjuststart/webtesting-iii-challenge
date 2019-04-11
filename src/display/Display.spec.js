// Test away!
import React from 'react';
import { render } from 'react-testing-library';

import Display from './Display';

describe('<Display/>', () => {
  it('component renders', () => {
    render(<Display />);
  });
  it('displays if gate is open/closed and if it is locked/unlocked', () => {
    const { getByText } = render(<Display />);
    getByText(/unlocked/i);
    getByText(/open/i);
  });
  it('displays closed if the closed prop is truthy', () => {
    const { getByText } = render(<Display closed={true}/>);
    getByText(/closed/i);
  });
  it('displays open if the closed prop is falsy', () => {
    const { getByText } = render(<Display closed={false}/>);
    getByText(/open/i);
  });
  it('displays locked if locked prop is truthy', () => {
    const { getByText } = render(<Display locked={true}/>);
    getByText(/^locked/i);
  });
  it('displays unlocked if locked prop is falsy', () => {
    const { getByText } = render(<Display locked={false}/>);
    getByText(/unlocked/i);
  });
  it('uses red-class when locked', () => {
    const { getByText } = render(<Display locked={true}/>);
    expect(getByText(/^locked/i).className).toContain('red-led');
  });
  it('uses red-class when closed', () => {
    const { getByText } = render(<Display closed={true}/>);
    expect(getByText(/^closed/i).className).toContain('red-led');
  });
  it('uses green-class when unlocked', () => {
    const { getByText } = render(<Display unlocked={true}/>);
    expect(getByText(/^unlocked/i).className).toContain('green-led');
  });
  it('uses green-class when open', () => {
    const { getByText } = render(<Display open={true}/>);
    expect(getByText(/^open/i).className).toContain('green-led');
  });
});
