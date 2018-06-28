import { StyleSheet } from 'react-native'
// import { pxToDp } from '../../utils/styles'

export default StyleSheet.create({
    Bgimg: {
        width: '100%',
        height: '100%',
        zIndex: -1
    },
    Alltext: {
        position: 'absolute',
        zIndex: 1,
        padding: 10,
        paddingTop: 20,
        // alignItems: 'center',
        // justifyContent: 'center',
        width: '100%'
    },
    Textwrap: {
        flexDirection: 'row',
        marginBottom: 15
    },
    pic: {
        width: 25,
        justifyContent: 'center',
        zIndex: 2,
        // backgroundColor: 'yellow',
        position: 'relative',
        left: 15
    },
    arrow: {
        width: 20,
        justifyContent: 'center'
    },
    text: {
        backgroundColor: 'red',
        padding: 10,
        paddingLeft: 30,
        borderRadius: 10,
        width: '90%',
        flexDirection: 'row',
        zIndex: 1
    },
    // other
    otherWrapOne: {
        flex: 1,
        backgroundColor: 'red',
        marginRight: 10,
        padding: 20
    },
    otherWrapTwo: {
        flex: 1,
        backgroundColor: 'red',
        marginLeft: 10,
        padding: 20
    },
    img: {
        alignItems: 'center',
        width: '100%',
        height: 50,
        justifyContent: 'center'
    }
})
