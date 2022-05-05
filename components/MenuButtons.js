import React from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'



const buttons = [
    {
        id: 1,
        name: 'video-camera',
        title: 'New metting',
        color: '#ff751f'
    },
    {
        id: 2,
        name: 'plus-square',
        title: 'Join'
    },
    {
        id: 3,
        name: 'calendar',
        title: 'Schedule'
    },
    {
        id: 4,
        name: 'upload',
        title: 'Join screen'
    },
]


export default function MenuButtons() {
    return (
        <View style={styles.container}>
        {buttons.map((button, index) => 
            <View key={index} style={styles.ButtonContainer}>
                <TouchableOpacity style={{ ...styles.button, backgroundColor: button.color ? button.color : '#0470dc' }}>
                    <FontAwesome name={button.name} size={23} color="#fff"/>
                </TouchableOpacity>
                <Text style={styles.textButton}>{button.title}</Text>
            </View>
        )}
        </View>
    )
}




const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        paddingBottom: 20,
        borderBottomColor: '#555',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    ButtonContainer: {
        flex: 1,
        alignItems: 'center',
    },
    button: {
        width: 50,
        height: 50,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        color: '#858585',
        fontSize: 12,
        fontWeight: '600',
        paddingTop: 10,
    }
})