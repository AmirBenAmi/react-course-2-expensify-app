import selectedExpenseTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return the 0 if no expenses', () => {
    // const total = selectedExpenseTotal(expenses);
    // expect(total).toBe(114195);
    const res = selectedExpenseTotal([]);
    expect(res).toBe(0);
});

test('should correctly add up a single expense', () => {
    const res = selectedExpenseTotal([expenses[0]]);
    expect(res).toBe(195);
});

test('should correctly add up a multiple expenses', () => {
    const res = selectedExpenseTotal(expenses);
    expect(res).toBe(114195);
});