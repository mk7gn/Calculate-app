import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};
const inputs = [
  ['input-A', true],
  ['input-B', true],
  ['input-C', true],
  ['input-D', '55.5'],
  ['input-E', 50],
  ['input-F', 30],
];

describe('renders without error', () => {
  const wrapper = shallow(<App />);

  test.each([
    ['component-app'],
    ['submit-button'],
    ['result-container'],
    ...inputs
  ])
  ('render %s node without error', (name) => {
    const node = findByTestAttr(wrapper, name);

    expect(node.exists()).toBe(true);
  });
});

describe('state controlled input fields', () => {
  let mockSetValueCallback = jest.fn();
  let wrapper;

  beforeEach(() => {
    mockSetValueCallback.mockClear();
    React.useState = jest.fn(() => ['', mockSetValueCallback]);
    wrapper = shallow(<App />);
  });

  test.each(inputs)('state updates with value of %s input box upon change', (name, value) => {
    const inputBox = findByTestAttr(wrapper, name);
    const mockEvent = { target: { value } };
    inputBox.simulate('change', mockEvent);

    expect(mockSetValueCallback).toHaveBeenCalledWith(value);
  });
});
