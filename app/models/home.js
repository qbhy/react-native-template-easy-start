export default {
    namespace: 'home',
    state: {
        homeTitle: '首页标题',
        count: 1,
        login: false,
    },
    reducers: {
        login(state, {payload}) {
            return {...state, ...payload};
        },
        addCount(state, action){
            return {...state, count: state.count + 1}
        }
    },
}
