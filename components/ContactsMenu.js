import React from 'react'
import { 
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'



const contacts = [
    {
        type: 'starred',
        name: 'Starred',
    },
    {
        type: 'contact',
        name: 'Boogie',
        image: require("../assets/images/1.jpg"),
    },
    {
        type: 'contact',
        name: 'Boommer',
        image: require("../assets/images/2.png"),
    },
    {
        type: 'contact',
        name: 'Bombo',
        image: require("../assets/images/3.png"),
    },
    {
        type: 'contact',
        name: 'Peace',
        image: require("../assets/images/4.png"),
    },
]




export default function ContactsMenu() {
    return (
        <View style={styles.container}>
            {contacts.map((contact, index) => 
                <View key={index} style={styles.row}>
                    <View style={styles.starredIcon}>
                        {contact.type == 'starred' ? (
                            <AntDesign name="star" size={23} color="#fff"/>
                        ) : (
                            <Image source={contact.image} size={23} style={styles.image}/>
                        )}
                    </View>
                    <Text style={styles.text}>{contact.name}</Text>
                </View>
            )}
            
        </View>
    )
}










const styles = StyleSheet.create({
    container: {
       paddingLeft: 10,
       paddingRight: 10
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
       color: '#fff',
       paddingLeft: 15,
       fontSize: 18,
    },
    starredIcon: {
        width: 55,
        height: 55,
        borderRadius: 20,
        alignItems: 'center',
        backgroundColor: '#555',
        justifyContent: 'center'
    },
    image: {
        width: 55,
        height: 55,
        borderRadius: 20,
    }
})