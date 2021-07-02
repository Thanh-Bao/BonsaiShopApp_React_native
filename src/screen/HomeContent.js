import React, { Component } from 'react'
import { Text, View, Image, FlatList } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

class HomeContent extends Component {
    render() {
        return (
            <View>
                <FlatList style={{ marginBottom: 290 }}
                    data={[
                        { key: 'Devin' },
                        { key: 'Dan' },
                        { key: 'Dominic' },
                        { key: 'Jackson' },
                        { key: 'James' },
                        { key: 'Joel' },
                        { key: 'John' },
                        { key: 'Jillian' },
                        { key: 'Jimmy' },
                        { key: 'Julie' },
                    ]}
                    renderItem={({ item }) => <View>
                        <Card>
                            <Card.Title>HELLO WORLD</Card.Title>
                            <Card.Divider />
                            <Card.Image source={require('../../images/123.jpg')}>
                            </Card.Image>
                            <Text style={{ marginBottom: 10 }}>
                                The idea with React Native Elements is more about component structure than actual design.
                            </Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', flex: 1 }}>
                                <View style={{marginRight: 20}}>
                                    <Button
                                        icon={<Icon name='visibility' color='#ffffff' />}
                                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                                        title=' VIEW NOW' />
                                </View>

                                <View style={{marginLeft: 20}}>
                                    <Button
                                        icon={<Icon name='add-shopping-cart' color='#ffffff' />}
                                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                                        title='VIEW NOW' />
                                </View>
                            </View>
                        </Card>
                        <Text style={{ opacity: 0, height: 0 }}>{item.key}</Text>
                    </View>}
                />

            </View>
        )
    }
}



export default HomeContent;
