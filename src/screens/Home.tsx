import { FlatList, StyleSheet, Text,View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/TabNavigation';
import PlaceCard from '../components/PlaceCard';

interface HomeProps {
    navigation: NavigationProp<RootStackParamList, 'Home'>,
    route: RouteProp<RootStackParamList, 'Home'>
}

const Home: React.FC<HomeProps> = ({ navigation }) => {

    const [data, setData] = useState([])
    const ItemSeprator = () => <View style={{
        height: 2,
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
      }} />

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        console.log(data, 'data::')
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Choose City</Text>
            </View>
         
            <FlatList ItemSeparatorComponent={ItemSeprator}
                data={data}
                renderItem={({ item }: any) => (
                    <PlaceCard key={item.id} item={item} navigation={navigation}/>
                )}
            />
           
              <View>

        </View>
        </View>
      
    )
}

export default Home

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
    
})