import React, { useState, useEffect } from 'react';
import {
    Text, View, StyleSheet, TouchableOpacity, FlatList,
    SafeAreaView, KeyboardAvoidingView,
    Platform, RefreshControl, processColor
} from 'react-native';
import { connect, useDispatch } from 'react-redux'
import { Input, Button } from '../Components'


const UpdateScreen = (props) => {

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
        <Text style={styles.dsc}>{item.date}</Text>
    </View>
   

    
);

{props.loading && <ActivityIndicator size='large' style={{ marginTop: 30}} />}

return (
    <SafeAreaView style={{ flex: 1 }}>

        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >

            <Text>hello</Text>

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
    return { list, list, loading, data};
};

export default connect( mapStateToProps, {  } )(UpdateScreen);






/*



    return (
        <ScrollView>
            <View style={{
                alignItems: 'center',
                paddingTop: 30,
                flex: 1
            }}>

                <Input
                    placeholder='Title'
                    value={title}
                    onChangeText={(value) => setTitle(value)}
                />

                <Input
                    placeholder='Description'
                    value={dsc}
                    onChangeText={(value) => setDsc(value)}
                />
                <Input
                    placeholder='Date'
                    value={date}
                    onChangeText={(value) => setDate(value)}
                />

                <Button
                    text={'Add'}
                    style={{ height: 40 }}
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
                />

                {props.loading && <ActivityIndicator size='large' style={{ marginTop: 30}} />}
            </View>
        </ScrollView>
    );
}


const mapStateToProps = ({ listResponse }) => {
    const { list, loading } = listResponse;
    return { list, loading };
};

export default connect( mapStateToProps, { } )(ListDetail);
*/