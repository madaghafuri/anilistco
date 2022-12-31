import { Image, StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';

interface Props {
    image: string;
    title: string;
}

const CardContent: FC<Props> = ({ image, title }) => {
    return (
        <View style={styles.contentCard}>
            <Image style={styles.coverImage} source={{ uri: image }} />
            <Text style={styles.contentTitle}>{title}</Text>
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

export default CardContent;
