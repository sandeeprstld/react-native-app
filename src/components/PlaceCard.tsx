import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/TabNavigation';

interface PlaceCardProps {
    item: {
        id: number;
        title: string;
        thumbnailUrl: string;
    };
    navigation: NavigationProp<RootStackParamList>
}

const PlaceCard: React.FC<PlaceCardProps> = ({ item, navigation }) => {
    return (
        <TouchableOpacity
            key={item?.id}
            style={{
                flex: 1,
            }}
            onPress={() => navigation.navigate('CityDetails', {
                title: item?.title,
                thumbnailUrl: item?.thumbnailUrl,
                id: item?.id
            })}>
            <View style={styles.card}>
                <Text style={{ fontSize: 20 }}>{item?.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default PlaceCard

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        borderRadius: 10,
        padding: 10,
        margin: 10,
    }
})