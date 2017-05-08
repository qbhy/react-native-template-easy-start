export default {
    namespace: 'home',
    state: {
        homeTitle: '首页标题',
        login: false,
    },
    reducers: {
        login(state, {payload}) {
            return {...state, ...payload};
        },
    },
}
