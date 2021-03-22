import {createActions} from 'reduxsauce'
import users from './users'

const {Types, Creators} = createActions({
    ...users
})

export default {
    Types,
    Creators
}