import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { decode } from 'he'

 class CustomCard extends Component {
    render() {
        var striptags = require('striptags');
        return (
            <View>
                <Card>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Divider />
                    <Card.Image source={{ uri: `${this.props.thumbnail}` }}>
                    </Card.Image>
                    <Text style={{ marginBottom: 10 }}>
                    {/* {decode(striptags(this.props.description))} */}
                    </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', flex: 1 }}>
                        <Button
                            type="outline"
                            icon={<Icon name='visibility' color='#0066ff' />}
                            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 10, marginBottom: 0 }}
                            title=' Xem chi tiết' />

                        <Button
                            icon={<Icon name='add-shopping-cart' color='#ffffff' />}
                            buttonStyle={{ borderRadius: 0, marginLeft: 10, marginRight: 0, marginBottom: 0 }}
                            title=' Thêm vào giỏ hàng' />
                    </View>
                </Card>
            </View>
        )
    }
}

export default CustomCard;
