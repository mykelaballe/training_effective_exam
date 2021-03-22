import Actions from '@actions'
import {createReducer} from 'reduxsauce'
import Immutable from 'seamless-immutable'

const INITIAL_STATE = Immutable({
    list: [],
    tempList: []
})

const doSetList = (state, {list}) => state.merge({list})
const doSetTempList = (state, {list}) => state.merge({tempList: list})

const HANDLERS = {
    [Actions.Types.SET_USERS]: doSetList,
    [Actions.Types.SET_TEMP_USERS]: doSetTempList
}

export default createReducer(INITIAL_STATE, HANDLERS)