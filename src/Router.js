import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListPage from './Screens/ListPage'
import ListDetail from './Screens/ListDetail'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

function Router(props) {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='List'>

                <Stack.Screen 
                name="List" 
                component={ListPage} 
                options={({ navigation, route }) => ({ 
                    title: 'Todo List',
                    headerRight: () => (
                        <TouchableOpacity
                        onPress={() => navigation.navigate('ListDetail')}
                        style={{ 
                            marginRight: 20
                        }}
                        >
                            <Text style={{ fontSize: 30}}>+</Text>
                        </TouchableOpacity>
                      ),
                })}
                />
                
                
                <Stack.Screen 
                name="ListDetail" 
                component={ListDetail} 
                options={{ title: 'Add Todo List'}}
                />

            
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;