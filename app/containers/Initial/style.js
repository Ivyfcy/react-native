import { StyleSheet, Dimensions } from 'react-native'
import { pxToDp } from '../../utils/styles'

export default StyleSheet.create({
    containers: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center'
    },
    background: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        position: 'absolute',
        top: 0,
        zIndex: -1
    },
    logo: {
        alignItems: 'center',
        paddingTop: pxToDp(265),
        paddingBottom: pxToDp(220)
    },
    bottonWrap: {
        marginTop: pxToDp(300)
    },
    botton: {
        backgroundColor: '#2d94fd',
        marginTop: pxToDp(50),
        width: pxToDp(856),
        height: pxToDp(130),
        borderRadius: pxToDp(150),
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottonText: {
        color: '#fff',
        fontSize: pxToDp(50)
    },
    footer: {
        paddingTop: pxToDp(130),
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    footerSplit: {
        paddingLeft: 10,
        paddingRight: 10
    },
    textBgColor: {
        backgroundColor: 'transparent'
    }
})
