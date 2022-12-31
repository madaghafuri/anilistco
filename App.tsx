/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import HomeScreen from './src/navigation/Home/HomeScreen';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from './src/navigation/DetailScreen';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const App = () => {
    const queryClient = new QueryClient();
    const Stack = createNativeStackNavigator();

    return (
        <QueryClientProvider client={queryClient}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        options={{
                            headerStyle: { backgroundColor: Colors.darker },
                            headerTitleStyle: { color: 'white' },
                            contentStyle: { backgroundColor: Colors.darker },
                        }}
                        name="Home"
                        component={HomeScreen}
                    />
                    <Stack.Screen
                        options={{
                            headerStyle: { backgroundColor: Colors.darker },
                            headerTitleStyle: { color: 'white' },
                            contentStyle: { backgroundColor: Colors.darker },
                        }}
                        name="Details"
                        component={DetailScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </QueryClientProvider>
    );
};

export default App;
