import React from 'react';
import { shallow } from 'enzyme';
import {AddExpensePage} from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let addExpense, history, warpper;

beforeEach(() => {
    const addExpense  = fest.fn();
    const history = {push: jest.fn()};
    const warpper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);
})
test('should render AddExpensePage correctly', () => {
    expect(warpper).toMatchSnapshot();
});

test('should handle onSubmit'  , () => {
    warpper.find('ExpenseFrom').props('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
});