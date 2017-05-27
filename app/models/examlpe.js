export default {
    namespace: 'todo',
    state: [],
    reducers: {
        add(state, {payload: todo}) {
            // 保存数据到 state
            return [...state, todo];
        },
    },
    effects: {
        *save({payload: todo}, {put, call}) {
            // 调用 saveTodoToServer，成功后触发 `add` action 保存到 state
            yield call(saveTodoToServer, todo);
            yield put({type: 'add', payload: todo});
        },
    },
    subscriptions: {
        setup({history, dispatch}) {
            // 监听 history 变化，当进入 `/` 时触发 `load` action
            return history.listen(({pathname}) => {
                if (pathname === '/') {
                    dispatch({type: 'load'});
                }
            });
        },
    },
};