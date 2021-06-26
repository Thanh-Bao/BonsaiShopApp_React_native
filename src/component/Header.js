import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Header } from 'react-native-elements';


export default class CustomHeader extends Component {
    render() {
        return (
            <Header
                leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
        )
    }
}
