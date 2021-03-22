import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [
    sagaMiddleware
]

const store = createStore(rootReducer, applyMiddleware(...middlewares))

store.runSaga = sagaMiddleware.run

rootSaga(store)

export default store