import {
    ScrollView,
    StyleSheet,
    View,
    useColorScheme,
    ActivityIndicator,
} from 'react-native';
import * as React from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import useHome from './useHome';
import CardContent from '../../components/card-content';

const HomeScreen = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    const { mediaList, isMediaLoading } = useHome();

    return (
        <View style={backgroundStyle}>
            <ScrollView>
                <View style={styles.contentCardList}>
                    {isMediaLoading ? (
                        <ActivityIndicator size="large" />
                    ) : (
                        mediaList?.map(item => (
                            <CardContent
                                image={item.coverImage?.extraLarge}
                                title={item.title?.userPreferred}
                            />
                        ))
                    )}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    contentCardList: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        padding: 5,
    },
    contentCard: {
        marginBottom: 5,
        marginTop: 5,
    },
    coverImage: {
        width: 180,
        height: 200,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOpacity: 1,
        shadowRadius: 10,
        shadowOffset: { width: 10, height: 10 },
    },
    contentTitle: {
        position: 'absolute',
        bottom: 0,
        marginBottom: 5,
        marginLeft: 5,
        fontWeight: 'bold',
        fontSize: 12,
    },
});

export default HomeScreen;
