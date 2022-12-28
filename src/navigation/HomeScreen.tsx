import { FlatList, Text, View } from 'react-native';
import * as React from 'react';
import { useMediaQueryList } from '../api/apollo';

const HomeScreen = () => {
    const { data, loading } = useMediaQueryList(1, 'MANGA');
    console.log(data);

    return (
        <View>
            {/* <FlatList data={data} /> */}
            <Text />
        </View>
    );
};

export default HomeScreen;
