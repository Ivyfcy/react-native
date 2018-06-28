import React, { Component } from 'react'
import { View, Image, Text, ScrollView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
// import { InputItem } from 'antd-mobile'
import { Toast } from 'teaset'
import { createForm } from 'rc-form'
import { Actions } from 'react-native-router-flux'

import { passWord } from '../../utils/auth'
import styles from './style'

// import './img/login_userid_blue.png'
// import './img/login_password_blue.png'

@connect(({ auth }) => ({ ...auth }))
class Login extends Component {
    state = {
        isUsernameFocus: false,
        isPasswordFocus: false,
        isShowPwd: false,
        inputType: 'password'
    }

    onLogin = () => {
        let { dispatch, form: { validateFields } } = this.props
        validateFields((err, data) => {
            if (err) {
                if (err.username) return Toast.fail(err.username.errors[0].message, 1)
                if (err.password) return Toast.fail(err.password.errors[0].message, 1)
            }
            data.password = passWord(data.password)
            dispatch({
                type: 'auth/post',
                payload: {
                    ...data
                }
            })
        })
    }

    onFocus = (type) => {
        if (type === 'username') {
            this.setState({
                isUsernameFocus: true
            })
        } else {
            this.setState({
                isPasswordFocus: true
            })
        }
    }

    onBlur = (type) => {
        this.setState({
            isUsernameFocus: false,
            isPasswordFocus: false
        })
    }

    changInputType = () => {
        this.setState({
            inputType: this.state.inputType === 'password' ? 'text' : 'password'
        })
    }

    render() {
        return (
            <View style={styles.containers}>
                <ScrollView overScrollMode='always' showsVerticalScrollIndicator={false}>
                    <View style={styles.logo}>
                        <Image
                            source={require('./img/login_logo.png')}
                            onPressIn={this.onClickView}
                        />
                    </View>
                    <View style={styles.bottonWrap}>
                        <TouchableOpacity style={styles.botton} onPress={() => Actions.login()} activeOpacity={0.5} >
                            <Text style={styles.bottonText}>LOGIN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.botton} onPress={() => Actions.home()} activeOpacity={0.5} >
                            <Text style={styles.bottonText}>GUEST</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.footer}>
                        <View style={styles.footerSplit}><Text style={styles.textBgColor}>v1.002710</Text></View>
                    </View>
                </ScrollView>

                <Image
                    style={styles.background}
                    source={require('./img/login_bg.jpg')}
                    resizeMode={Image.resizeMode.stretch}
                />
            </View>
        )
    }
}

export default createForm()(Login)
