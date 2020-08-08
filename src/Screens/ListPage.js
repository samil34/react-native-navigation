import React, { useState, useEffect } from 'react';
import {
    Text, View, StyleSheet, TouchableOpacity, FlatList,
    SafeAreaView, KeyboardAvoidingView,
    Platform, RefreshControl
} from 'react-native';
import { Input, Button } from '../Components'
const ListPage = (props) => {


    const [data, setData] = useState([])

    useEffect(() => {
        console.log('Gelen Depğer: ', props.route.params?.obj);

        if(props.route.params?.obj) {
            let arr = data.slice()
            arr.push(props.route.params?.obj)
            setData(arr)
        }
        

    }, [props.route.params?.obj])

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.dsc}>{item.dsc}</Text>
        </View>
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >

                <FlatList
                    style={{ flex: 1 }}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.title}
                    ListEmptyComponent={() => {
                        return (
                            <View style={{ 
                                alignItems: 'center', 
                                marginTop: 20, 
                                height: 300,
                                justifyContent: 'center' 
                                }}>
                                <Text style={{ fontSize: 10, marginBottom: 30 }}>Herhangi bir data bulunamadı.</Text>

                                <Button
                                    text={'Add New'}
                                    onPress={() => { 
                                        props.navigation.navigate('ListDetail', {
                                            data
                                        })
                                    }}
                                />
                            </View>

                        )
                    }}
                    initialNumToRender={2}
                />

            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: 'gray'

    },
    title: {
        fontSize: 18,
    },
    dsc: {
        fontSize: 14,
        color: 'gray'
    },
});

export default ListPage;
