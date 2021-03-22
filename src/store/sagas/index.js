import Users from './Users'

export default store => {
    store.runSaga(Users)
}