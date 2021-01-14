export const LOAD_USERS_LOADING = 'REDUX_SAGA_LOAD_USERS_LOADING';
export const LOAD_USERS_SUCCESS = 'REDUX_SAGA_LOAD_USERS_SUCCESS';
export const LOAD_USERS_ERROR = 'REDUX_SAGA_LOAD_USERS_ERROR';

export const LOAD_USER_DETAIL_LOADING = 'REDUX_SAGA_LOAD_USER_DETAIL_LOADING';
export const LOAD_USER_DETAIL_SUCCESS = 'REDUX_SAGA_LOAD_USER_DETAIL_SUCCESS';
export const LOAD_USER_DETAIL_ERROR = 'REDUX_SAGA_LOAD_USER_DETAIL_ERROR';

export const loadUsers = () => dispatch => {
    dispatch({ type: LOAD_USERS_LOADING });
};

export const loadUserDetail = (id) => dispatch => {
    dispatch({ type: LOAD_USER_DETAIL_LOADING, payload: id });
};
