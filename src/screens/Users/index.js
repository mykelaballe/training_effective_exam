import React, {useState, useEffect} from 'react'
import {TextInput, FlatList} from 'react-native'
import User from './User'
import style from './style'
import {useSelector, useDispatch} from 'react-redux'
import Actions from '@actions'

export default () => {

  const {list} = useSelector(({users}) => users)
  const dispatch = useDispatch()

  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    dispatch({type: Actions.Types.ATTEMPT_GET_USERS})
  },[])

  const handleChangeSearch = query => {
    setSearchText(query)
    dispatch({type: Actions.Types.ATTEMPT_SEARCH_USERS, query})
  }

  const handleKeyExtractor = item => item.id.toString()

  const renderItem = ({item}) => <User data={item} />

  return (
    <>
      <TextInput
        value={searchText}
        placeholder='Search github user by their username'
        onChangeText={handleChangeSearch}
        style={style.input}
      />

      <FlatList
        data={list}
        keyExtractor={handleKeyExtractor}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </>
  )
}