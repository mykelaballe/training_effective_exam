import React from 'react'
import {Image, Text, View, TouchableOpacity, Linking} from 'react-native'
import style from './style'

export default ({data}) => {

    const handleView = () => Linking.openURL(data.html_url)

    return (
        <TouchableOpacity onPress={handleView} style={style.container}>
            <Image source={{uri: data.avatar_url}} style={style.avatar} />
            <Text style={style.name}>{data.login}</Text>
        </TouchableOpacity>
    )
}