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
            console.log("khong co loi 99999999999")
            this.setState({
                listProduct: respnse.list
            })
        }).catch((err)=>{
            console.log("loi roi 1234567")
        })
    }

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
                    renderItem={({ item }) =>
                        <CustomCard name={item.key} />
                    }
                />
            </View>
        )
    }
}



export default HomeContent;
