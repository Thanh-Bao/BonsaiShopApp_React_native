import React, { Component } from 'react'
import { Text, View, Image, FlatList } from 'react-native'
import axios from 'axios';

import CustomCard from '../component/CustomCard'

class HomeContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listProduct: [],
            page: 1
        }
    }



    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        axios({
            method: 'get',
            url: 'https://baobaoshop.live/api/Products?page=' + this.state.page
        }).then((respnse) => {
            this.setState({
                listProduct: this.state.listProduct.concat(respnse.data.list)
            })
        }).catch((err) => {
            alert('lỗi lấy danh sách sản phẩm')
        })
    }

    handleLoadMore = () => {
        this.setState({
            page: this.state.page + 1
        }, this.getData
        )
    }


    render() {
        return (
            <View>
                <FlatList style={{ marginBottom: 283 }}
                    data={this.state.listProduct}
                    renderItem={({ item }) =>
                        <CustomCard
                            name={item.name}
                            thumbnail={item.thumbnail}
                            description={item.description}
                            price={item.price}
                        />
                    }
                    keyExtractor={(item, index) => index.toString()}
                    onEndReached={this.handleLoadMore}
                />
            </View>
        )
    }
}



export default HomeContent;
