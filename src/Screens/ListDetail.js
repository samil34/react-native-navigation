import React, { useState } from 'react';
import { Text, View, 
    üKeyboardAvoidingView, Platform, ScrollView, ActivityIndicator } from 'react-native';

import { Input, Button } from '../Components'
import { connect, useDispatch } from 'react-redux';
import { LOADING_START, LOADING_END, UPDATE_LIST } from '../actions/types';


const ListDetail = (props) => {

    const dispatch = useDispatch()

    const [title, setTitle] = useState()
    const [dsc, setDsc] = useState()


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

                <Button
                    text={'Add'}
                    style={{ height: 40 }}
                    onPress={() => {
                        let obj = {
                            title,
                            dsc
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
