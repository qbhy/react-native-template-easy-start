export default {
    namespace: 'home',
    state: {
        homeTitle: 'hello world!',
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
