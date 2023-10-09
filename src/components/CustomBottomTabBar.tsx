import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

interface CustomBottomTabBarProps extends BottomTabBarProps { }

const CustomBottomTabBar: React.FC<CustomBottomTabBarProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={{ justifyContent: 'center', alignItems: 'center' }}
                onPress={() => navigation.navigate('Home')}>
                <Icon name="home" size={30} color="black" />
                <Text style={{ textAlign: 'center' }}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{ justifyContent: 'center', alignItems: 'center' }}
                onPress={() => navigation.navigate('Favourites')}>
                <Icon name="star" size={30} color="black" />
                <Text style={{ textAlign: 'center' }}>Favourites</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CustomBottomTabBar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderBottomColor: 'white',
        borderLeftColor: 'white',
        borderRightColor: 'white',
        height: 60,
        borderRadius: 12
    },
})