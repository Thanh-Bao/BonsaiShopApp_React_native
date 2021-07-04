import React, { Component } from 'react'
import { Text, View, Image, FlatList } from 'react-native'
import axios from 'axios';

import CustomCard from '../component/CustomCard'

class HomeContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listProduct: null
        }
    }



    componentDidMount() {
        axios({
            method: 'get',
            url: 'https://baobaoshop.live/api/Products'
        }).then((respnse) => {
            this.setState({
                listProduct: respnse.data.list
            })
        }).catch((err)=>{
            console.log("loi roi 1234567")
        })
    }

    render() {
        return (
            <View>
                <FlatList style={{ marginBottom: 290 }}
                    data={this.state.listProduct}
                    renderItem={({ item }) =>
                        <CustomCard 
                        name={item.name}
                        thumbnail={item.thumbnail}
                        description={item.description}
                        />
                    }
                />
            </View>
        )
    }
}



export default HomeContent;
