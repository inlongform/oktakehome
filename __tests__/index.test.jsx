import * as React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import store from '../src/redux/store';

import Button from '../src/components/common/Button';
import FormElement from '../src/components/common/FormElement';
import App from '../src/components/App';

const Full = (
  <Provider store={store}>
    <App />
  </Provider>
);

describe('Index', () => {
  describe('render', () => {
    test('should render without throwing an error', () => {
      const wrapper = mount(Full);
      expect(wrapper.exists()).toBe(true);
    });

    test('Should render 6 form question fields', () => {
      const wrapper = mount(Full);
      expect(wrapper.find('textarea').length).toEqual(6);
    });

    test('Button successfully clicked', () => {
      const mockFunction = jest.fn();
      const wrapper = mount(<Button handler={mockFunction} text="my button" />);
      wrapper.find('button').simulate('click');
      expect(mockFunction.mock.calls.length).toEqual(1);
    });

    test('FormElement textarea value change and blur', () => {
      const mockFunction = jest.fn();
      const wrapper = mount(<FormElement lbl="lbl" lblText="text" onUpdate={mockFunction} />);
      const tArea = wrapper.find('textarea');
      tArea.simulate('blur');
      tArea.value = 'hello';
      expect(mockFunction.mock.calls.length).toEqual(1);
      expect(tArea.value).toEqual('hello');
    });
  });
});
