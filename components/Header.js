import React from 'react'
import { 
    View, 
    Text,
    StyleSheet
 } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'



export default function Header() {
    return (
        <View style={styles.container}>
            <Entypo name="notification" size={30} color="#fff"/>
            <Text style={styles.title}>WeChat</Text>
            <Entypo name="new-message" size={30} color="#fff"/>
        </View>
    )
}





const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#333',
        justifyContent: 'space-between'
    },
    title: {
        color: '#fff',
        fontSize: 20,
    }
})