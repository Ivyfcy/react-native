import React, { Component } from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'

@connect(({ home }) => ({ ...home }))
class headerRight extends Component {
    onPressHeaderRight = () => {
        this.props.dispatch({
            type: 'home/change',
            payload: {
                otherchange: !this.props.otherchange
            }
        })
    }
    render() {
        return (
            <TouchableOpacity {...this.props} onPress={this.onPressHeaderRight} style={{ paddingLeft: 10, paddingRight: 10 }}>
                <Image
                    source={require('../../assets/img/map_more_white.png')}
                />
            </TouchableOpacity>
        )
    }
}

export default headerRight
