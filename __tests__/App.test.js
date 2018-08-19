import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import App from '../src/components/App';
import store from '../src/store';

describe('App', () => {
  test('should match snapshot', () => {
    const component = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
