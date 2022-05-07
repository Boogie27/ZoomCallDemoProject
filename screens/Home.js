import React from 'react'
import { 
    View,
    Text,
    SafeAreaView,
    StyleSheet,
 } from 'react-native'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import MenuButtons from '../components/MenuButtons'
import ContactsMenu from '../components/ContactsMenu'

export default function Home() {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <Header/>
                <SearchBar/>
                {/* <MenuButtons/> */}
                <ContactsMenu/>
            </SafeAreaView>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#333',
        height: '100%'
    }
})