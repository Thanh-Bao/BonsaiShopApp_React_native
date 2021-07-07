import React, { Component, useState, useEffect } from 'react'
import { Text, View, Image, FlatList, Button } from 'react-native'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native'

import CustomCard from '../component/CustomCard'

function HomeContent() {
    const [listProduct, setListProduct] = useState([]);
    const [page, setPage] = useState(1);


    function getData() {
        axios({
            method: 'get',
            url: 'https://baobaoshop.live/api/Products?page=' + page
        }).then((respnse) => {
            setListProduct(listProduct.concat(respnse.data.list));
        }).catch((err) => {
            alert('lỗi lấy danh sách sản phẩm')
        })
    }
    function handleLoadMore() {
        setPage(page + 1);
        getData();

    }


    useEffect(() => {
        getData();
    }, []);


    return (
        <View>
            <FlatList style={{ marginBottom: 283 }}
                data={listProduct}
                renderItem={({ item, navigation }) =>
                    <CustomCard
                        navigation={navigation}
                        name={item.name}
                        thumbnail={item.thumbnail}
                        description={item.description}
                        price={item.price}
                    />
                }
                keyExtractor={(item, index) => index.toString()}
                onEndReached={handleLoadMore}
            />
        </View>
    )
}
export default HomeContent;
