import React, { useState } from 'react';
import { Text, View, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

import { Input, Button } from '../Components'


const ListDetail = (props) => {

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
                        // let arr = data.slice()
                        let obj = {
                            title,
                            dsc
                        };
                        // arr.push(obj)

                        // setData(arr)

                        props.navigation.navigate('List', { obj });
                    }}
                />
            </View>
        </ScrollView>
    );
}

export default ListDetail;
