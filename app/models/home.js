export default {
    namespace: 'home',
    state: {
        fetching: false,
        login: false,
    },
    reducers: {
        login(state, {payload}) {
            return {...state, ...payload};
        },
    },
}
