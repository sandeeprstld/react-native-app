import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useFavoritesContext } from '../context/FavoritesProvider';

interface FavouriteCityListProps {
    item: {
        id: number;
        title: string;
        thumbnailUrl: string;
    };
}

const FavouriteCityList: React.FC<FavouriteCityListProps> = ({ item, }) => {

    const { favorites, removeFromFavorites } = useFavoritesContext();

    return (
        <View style={styles.card}>
            <Image
                style={{ height: 240, borderRadius: 10, }}
                source={{ uri: item?.thumbnailUrl }} />
            <Text style={{ fontSize: 20, textAlign: 'center' }}>{item?.title}</Text>
            <TouchableOpacity
                onPress={() => removeFromFavorites(item.id)}
                style={styles.closeButton}
            >
                <Text style={{
                    fontSize: 18,
                    color: 'white'
                }}>Remove</Text>
            </TouchableOpacity>
        </View>
    )
}

export default FavouriteCityList

const styles = StyleSheet.create({
    card: {
        flex: 1,
        borderColor: 'black',
        borderWidth: 2,
        margin: 10,
        borderRadius: 10,
        justifyContent: 'center',
    },
    closeButton: {
        borderWidth: 2,
        borderColor:"white",
        height: 60,
        backgroundColor: '#e94832',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
})