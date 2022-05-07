import React, { useState } from 'react'
import { 
    View, 
    Text,
    TextInput,
    StyleSheet
} from 'react-native'


export default function MeetingRoom() {

    const [name, setName] = useState(name)
    const [roomID, setRoomID] = useState(roomID)

    return (
        <View style={styles.container}>
            <View style={styles.name}>
                <TextInput style={styles.text} onChangeText={(text) => setName(text)} name="text" placeholder="Enter name"  placeholderTextColor='#767476' value={name}/>
            </View>
            <View style={styles.name}>
                <TextInput style={styles.text} onChangeText={(text) => setName(roomID)} name="text" placeholder="Enter Room ID"  placeholderTextColor='#767476' value={name}/>
            </View>
        </View>
    )
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1c1c1c'
    },
    name: {
        paddingLeft: 10,
        paddingRight: 10,
        width: '100%',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#484648',
        backgroundColor: '#373538',
    },
    text: {
        color: "#fff",
        fontSize: 17
    }
})
