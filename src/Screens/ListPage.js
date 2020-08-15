import React, { useState, useEffect } from 'react';
import {
    Text, View, StyleSheet, TouchableOpacity, FlatList,
    SafeAreaView, KeyboardAvoidingView,
    Platform, RefreshControl, processColor
} from 'react-native';
import { connect, useDispatch } from 'react-redux'
import { Input, Button } from '../Components'

const ListPage = (props) => {


    const [data, setData] = useState([])

    useEffect(() => {
        console.log('Gelen Değer: ', props.route.params?.obj);

        if(props.route.params?.obj) {
            let arr = data.slice()
            arr.push(props.route.params?.obj)
            setData(arr)
        }
        
    }, [props.route.params?.obj])
    
  const deleteItem = (key) => {
       this.setState(
           {
               data:
               [
                   ...this.state.data.filter((item) =>
                   item.key !== key)
                   
               ]
           }
       )
   }
    
    const renderItem = ({ item }) => (

            /* 
        <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.dsc}>{item.dsc}</Text>
            <Text style={styles.dsc}>{item.date}</Text>
        </View>
       */
        <TouchableOpacity
        style={styles.item, {height: 150, width: '90%'}}
        onPress={() => {
            let obj = {
                title,
                dsc,
                date
            };
            dispatch({ type: UPDATE_LIST, payload: obj })
            props.navigation.pop();
            
            // props.navigation.navigate('List', { obj });
            // dispatch({ type: LOADING_START, payload: true })

            // setTimeout(() => {
            //     // 2 saniye sonra çalış.
            //     dispatch({ type: LOADING_END, payload: false })
            // }, 2000)

        }}
       
>

        <View style={styles.item}>
            <TouchableOpacity style = {{marginLeft: 225}}
            
            >
                <View style = {{justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', width: 60, height: 30, borderRadius: 5, borderWidth:0.8}}>
            <Text style = {{  fontSize: 18,  color: 'white' }}>Delete</Text>
            </View>
            </TouchableOpacity>

            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.dsc}>{item.dsc}</Text>
            <Text style={styles.dsc}>{item.date}</Text>
        </View>
    
    </TouchableOpacity>

       
         

        
        
    );

    {props.loading && <ActivityIndicator size='large' style={{ marginTop: 30}} />}
   

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >

                <FlatList
                    style={{ flex: 1 }}
                    data={props.list}
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
        borderColor: 'gray',
        

    },
    title: {
        fontSize: 18,
    },
    dsc: {
        fontSize: 14,
        color: 'gray'
    },
});

const mapStateToProps = (state) => {
    console.log('Gelen data: ', state);
    const { list, loading, data } = state.listResponse;
    return { list, list, loading, data };
};

export default connect( mapStateToProps, {  } )(ListPage);


