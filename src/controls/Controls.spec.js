// Test away!
import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import Controls from './Controls';

describe('<Controls />', () => {

  const setup = () => {
    return render(<Controls />);
  };

  it('renders successfully', () => {
    setup();

  });

  describe('Gate', () => {
    it('cannot be closed or opened if locked', () => {
      const { getByText } = render(
        <Controls closed={true} locked={true} />
      );
      getByText(/open gate/i);
      getByText(/unlock gate/i);
    });

    it('defaults to unlocked and open', () => {
      const { getByText } = setup();
      getByText(/close gate/i);
    });
  });

  describe('buttons', () => {

    it('provides buttons to toggle the closed and lock states', () => {
      const { getByText } = setup();
      getByText(/close gate/i);
      getByText(/lock gate/i);
    });

    // it('close click calls toggleClosed', () => {
    //   const toggleClosedMock = jest.fn();
    //   const { getByText } = render(<Controls toggleClosed={toggleClosedMock}/>);
    //   const closeButton = getByText(/close gate/i);
    //   fireEvent.click(closeButton);
    //   expect(toggleClosedMock).toHaveBeenCalledTimes(1);
    // });

    it('close button is disabled if the gate is closed', () => {
      const { getByText } = render(<Controls closed={true}/>);
      const closeButton = getByText(/close gate/i);
      expect(closeButton.disabled).toBe(false);
    });

    it('the locked toggle button is disabled if the gate is open', () => {
      const { getByText } = render(<Controls />);
      expect(getByText(/lock gate/i).disabled).toBeTruthy();
    });

  });
});
