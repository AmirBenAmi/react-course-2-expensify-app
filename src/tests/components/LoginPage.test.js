import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('should correctly render LoginPage', () => {
    const warpper = shallow(<LoginPage />);
    expect(warpper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
    const startLogin = jest.fn();
    const warpper = shallow(<LoginPage startLogin= {startLogin}/>);
    warpper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
  });