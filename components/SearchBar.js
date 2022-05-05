import React from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    TextInput,
    placeholderStyle
} from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto'

export default function SearchBar() {
    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <Fontisto name="search" size={22} color="#858585"/>
                <TextInput value="" placeholderTextColor="#858585" placeholder="Search..." style={styles.textInput}/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    search: {
        paddingRight: 5,
        paddingLeft: 10,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#555',
        borderRadius: 10
    },
    textInput: {
        width: '80%',
        height: 50,
        fontSize: 17,
        color: '#858585'
    }
})
