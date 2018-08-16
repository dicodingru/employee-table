import React from 'react';
import renderer from 'react-test-renderer';
import App from '../src/components/App';

describe('App', () => {
  test('should match snapshot', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
