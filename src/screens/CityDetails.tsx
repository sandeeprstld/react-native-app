import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/TabNavigation';
import { useFavoritesContext } from '../context/FavoritesProvider';
import Icon from 'react-native-vector-icons/Ionicons';


interface CityDetailsProps {
    navigation: NavigationProp<RootStackParamList, 'CityDetails'>,
    route: RouteProp<RootStackParamList, 'CityDetails'>
}

const CityDetails: React.FC<CityDetailsProps> = ({ navigation, route }) => {

    const { addToFavorites, isFavorite } = useFavoritesContext();
    console.log(route.params, 'route.params')

    const handleAddToFavourite = () => {

        const newItem = {
            id: route.params.id,
            thumbnailUrl: route.params.thumbnailUrl,
            title: route.params.title
        };
        console.log(newItem, 'newItem:::::')

        if (!isFavorite(newItem.id)) {
            addToFavorites(newItem);
            Alert.alert(
                'Success',
                'Added to Favourites',
                [
                    {
                        text: 'OK',
                    },
                ],
            );
            navigation.navigate('Favourites')
        }
        else {
            Alert.alert(
                'Validation Error',
                'Already in Favourites',
                [
                    {
                        text: 'OK',
                    },
                ],
            );
        }
    }

    return (

       
        <View style={styles.container}>
   
            <View style={styles.header}>
                <Text
                    style={styles.title}
                >City Details</Text>
            </View>
            <Image
                style={{ height: 240 }}
                source={{ uri: route.params?.thumbnailUrl }} />
            <Text style={styles.description}>{route.params?.title}</Text>
            <TouchableOpacity
                onPress={() => handleAddToFavourite()}
                style={styles.button}>
                <Text style={{
                    fontSize: 18,
                    color: 'white'
                }}>Add to favourites</Text>
            </TouchableOpacity>
            
        </View>

    )
}

export default CityDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        margin: 5,
    },
    header: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        marginBottom: 10
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        padding: 10,
        fontWeight: 'bold',
        color: '#0099ff'
    },
    button: {
        borderWidth: 2,
        borderColor: 'white',
        height: 60,
        backgroundColor: '#e94832',
        borderRadius: 10,
        padding: 10,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    description: {
        fontSize: 18,
        textAlign: 'center',
        padding: 10
    }
})