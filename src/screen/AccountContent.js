import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import { ListItem, Icon, Avatar } from 'react-native-elements'

class AccountContent extends Component {
    render() {
        const list = [
            {
                title: 'Appointments',
                icon: 'av-timer'
            },
            {
                title: 'Trips',
                icon: 'flight-takeoff'
            },
        ]
        return (
            <View>
                <Text> Tài khoản 123 </Text>
                <View>
                    {
                        list.map((item, i) => (
                            <ListItem key={i} bottomDivider>
                                <Icon name={item.icon} />
                                <ListItem.Content>
                                    <ListItem.Title>{item.title}</ListItem.Title>
                                </ListItem.Content>
                                <ListItem.Chevron />
                            </ListItem>
                        ))
                    }
                </View>

            </View>
        )
    }
}





export default AccountContent;


