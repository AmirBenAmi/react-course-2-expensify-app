import {login, logout} from '../../actions/auth';


test('', () => {
    const uid = 'abc123';
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});