import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import HeaderRight from '../../components/headerRight'
import Other from './other'
import styles from './style'

@connect(({ auth, home }) => ({ auth, home }))
class Home extends Component {
    static navigationOptions = {
        headerTitle: 'HOME',
        headerRight: <HeaderRight />,
        tabBarLabel: '首页'
    }

    gotoDetail = () => {
    }

    test = () => {
        this.setState({
            text: 'x'
        })
    }

    render() {
        return (
            <View>
                {this.props.home.otherchange ? <Other /> : <View style={styles.Alltext} >
                    <View style={styles.Textwrap}>
                        <View style={styles.pic} >
                            <Image source={require('./img/refresh.png')} />
                        </View>
                        <View style={styles.text}>
                            <View style={{ flex: 1 }}>
                                <Text onPress={() => Actions.register()} style={{ fontSize: 20 }}>Bookings</Text>
                                <Text onPress={() => Actions.register()}> 2 bookings</Text>
                            </View>
                            <TouchableOpacity style={styles.arrow} >
                                <Image source={require('./img/back.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.Textwrap}>
                        <View style={styles.pic} >
                            <Image source={require('./img/refresh.png')} />
                        </View>
                        <View style={styles.text}>
                            <View style={{ flex: 1 }}>
                                <Text onPress={() => Actions.register()} style={{ fontSize: 20 }}>Community</Text>
                                <Text onPress={() => Actions.register()}> 2 bookings</Text>
                            </View>
                            <TouchableOpacity style={styles.arrow} >
                                <Image source={require('./img/back.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.Textwrap}>
                        <View style={styles.pic} >
                            <Image source={require('./img/refresh.png')} />
                        </View>
                        <View style={styles.text}>
                            <View style={{ flex: 1 }}>
                                <Text onPress={() => Actions.register()} style={{ fontSize: 20 }}>Events</Text>
                                <Text onPress={() => Actions.register()}> 2 bookings</Text>
                            </View>
                            <TouchableOpacity style={styles.arrow} >
                                <Image source={require('./img/back.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.Textwrap}>
                        <View style={styles.pic} >
                            <Image source={require('./img/refresh.png')} />
                        </View>
                        <View style={styles.text}>
                            <View style={{ flex: 1 }}>
                                <Text onPress={() => Actions.register()} style={{ fontSize: 20 }}>Front Desk</Text>
                                <Text onPress={() => Actions.register()}> 2 bookings</Text>
                            </View>
                            <TouchableOpacity style={styles.arrow} >
                                <Image source={require('./img/back.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.Textwrap}>
                        <View style={styles.pic} >
                            <Image source={require('./img/refresh.png')} />
                        </View>
                        <View style={styles.text}>
                            <View style={{ flex: 1 }}>
                                <Text onPress={() => Actions.register()} style={{ fontSize: 20 }}>Perks</Text>
                                <Text onPress={() => Actions.register()}> 2 bookings</Text>
                            </View>
                            <TouchableOpacity style={styles.arrow} >
                                <Image source={require('./img/back.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.Textwrap}>
                        <View style={styles.pic} >
                            <Image source={require('./img/refresh.png')} />
                        </View>
                        <View style={styles.text}>
                            <View style={{ flex: 1 }}>
                                <Text onPress={() => Actions.register()} style={{ fontSize: 20 }}>Information</Text>
                                <Text onPress={() => Actions.register()}> 2 bookings</Text>
                            </View>
                            <TouchableOpacity style={styles.arrow} >
                                <Image source={require('./img/back.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>}
            </View >
        )
    }
}

export default Home
