import {StyleSheet} from 'react-native'
import {Colors, Metrics} from '@themes'

const SIZE = 55

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: Metrics.rg,
        marginHorizontal: Metrics.md,
        marginBottom: Metrics.sm,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.mute
    },
    avatar: {
        width: SIZE,
        height: SIZE,
        borderRadius: SIZE,
        marginRight: Metrics.rg,
        resizeMode: 'cover'
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})