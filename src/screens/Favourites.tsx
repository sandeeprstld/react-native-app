import { FlatList, StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import React from 'react';
import { useFavoritesContext } from '../context/FavoritesProvider';
import FavouriteImageCard from '../components/FavouriteCityList';
import { RootStackParamList } from '../navigation/TabNavigation';
import { NavigationProp } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons';

interface FavouritesProps { 
    navigation: NavigationProp<RootStackParamList, 'Favourites'>,
}

const Favourites: React.FC<FavouritesProps> = ({ }) => {

    const { favorites } = useFavoritesContext();

    return (
        <View style={styles.container}>
             
            <View style={styles.header}>
                <Text style={styles.title}>Favourite Cities</Text>
            </View>
            <FlatList
                data={favorites}
                keyExtractor={(item) => item?.id.toString()}
                renderItem={({ item }) => (
                    <FavouriteImageCard key={item.id} item={item} />
                )}
            />
        </View>
    )
}

export default Favourites

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 2,
        margin: 2,
    },
    header: {
        borderBottomColor: 'black',
        borderBottomWidth: 2
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        padding: 10,
        fontWeight: 'bold',
        color: '#0099ff'
    },
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
        height: 60,
        backgroundColor: 'blue',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
})