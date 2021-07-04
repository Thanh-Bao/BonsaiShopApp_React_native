// import React, { Component } from 'react'


// import { View, Text, Image } from 'react-native'
// import { Card, ListItem, Button, Icon } from 'react-native-elements'



// class AccountContent extends Component {

//     render() {

//         return (
//             <View style={{flexDirection:'row'}}>
//                 <Text> Tài khoản  </Text>
//                 <Text> Tài khoản  </Text>
//             </View>
//         )
//     }
// }


// export default AccountContent;


import React, { Component } from 'react'
import { StyleSheet, FlatList, Text, View } from 'react-native'
import axios from 'axios';

export default class AccountContent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            page: 1
        }
    }


    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/photos?_limit=10&_page=' + this.state.page
        }).then((respnse) => {
            console.log(respnse.data)
            this.setState({
                data: this.state.data.concat(respnse.data)
            }
            )
        }).catch((err) => {
            alert('lỗi lấy danh sách sản phẩm')
        })
    }
    renderRow = ({ item }) => {
        return (
            <View>
                <Text style={{marginBottom: 90}}>{item.id}</Text>
            </View>
        )
    }

    handleLoadMore = () => {
        this.setState({
            page: this.state.page + 1
        }, this.getData
        )
    }

    render() {
        return (
            <FlatList
                data={this.state.data}
                renderItem={this.renderRow}
                keyExtractor={(item, index) => index.toString()}
                onEndReached={this.handleLoadMore}
            />
        )
    }
}



