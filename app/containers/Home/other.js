import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

import styles from './style'
@connect(({ home }) => ({ home }))
class Map extends Component {
    render() {
        return (
            <View>
                <View style={styles.Alltext} >
                    <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                        <TouchableOpacity onPress={() => Actions.login()} style={styles.otherWrapOne}>
                            <View style={styles.img} >
                                <Image source={require('./img/refresh.png')} />
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 20 }}>Bookings</Text>
                                    <Text > 2 bookings</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Actions.login()} style={styles.otherWrapTwo}>
                            <View style={styles.img} >
                                <Image source={require('./img/refresh.png')} />
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 20 }}>Community</Text>
                                    <Text > 2 bookings</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                        <TouchableOpacity onPress={() => Actions.login()} style={styles.otherWrapOne}>
                            <View style={styles.img} >
                                <Image source={require('./img/refresh.png')} />
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 20 }}>Events</Text>
                                    <Text > 2 bookings</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Actions.login()} style={styles.otherWrapTwo}>
                            <View style={styles.img} >
                                <Image source={require('./img/refresh.png')} />
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 20 }}>Front Desk</Text>
                                    <Text > 2 bookings</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                        <TouchableOpacity onPress={() => Actions.login()} style={styles.otherWrapOne}>
                            <View style={styles.img} >
                                <Image source={require('./img/refresh.png')} />
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 20 }}>Perks</Text>
                                    <Text > 2 bookings</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Actions.login()} style={styles.otherWrapTwo}>
                            <View style={styles.img} >
                                <Image source={require('./img/refresh.png')} />
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 20 }}>Information</Text>
                                    <Text > 2 bookings</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default Map
