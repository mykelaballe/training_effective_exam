import {takeLatest, put, call, select} from 'redux-saga/effects'
import Actions from '@actions'
import * as API from '@api'

function * getList() {
    try {
        const res = yield call(API.getUsers)

        console.log('GET USERS RESPONSE STATUS', res.status)
        console.log('GET USERS RESPONSE DATA', res.data)

        if(res.status == 200) {
            yield put(Actions.Creators.setTempUsers(res.data))
        }
    }
    catch(err) {
        
    }
}

function * searchList({query}) {
    try {
        const state = yield select()

        const searchQuery = query.trim()

        if(searchQuery) {
            const list = state.users.tempList.filter(l => l.login.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0)

            yield put(Actions.Creators.setUsers(list))
        }
        else {
            yield put(Actions.Creators.setUsers([]))
        }
    }
    catch(err) {

    }
}

export default function * () {
    yield takeLatest(Actions.Types.ATTEMPT_GET_USERS, getList)
    yield takeLatest(Actions.Types.ATTEMPT_SEARCH_USERS, searchList)
}