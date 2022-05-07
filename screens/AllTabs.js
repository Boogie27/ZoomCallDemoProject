import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Home from './Home'
import MeetingRoom from './MeetingRoom'
import Join from './Join'
import JoinScreen from './JoinScreen'
import Schedule from './Schedule'
import { useNavigation, useRoute } from '@react-navigation/core'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();





export default function AllTabs() {
    const navigation = useNavigation()

    return (
        <Tab.Navigator 
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, size, color}) => {
                    let iconName
                    if(route.name == 'MeetingRoom'){
                        iconName = 'video-camera'
                    }else if(route.name == 'Join'){
                        iconName = 'plus-square'
                    }else if(route.name == 'Schedule'){
                        iconName = 'calendar'
                    }else if(route.name == 'JoinScreen'){
                        iconName = 'upload'
                    }
                    return (
                        <TouchableOpacity 
                            onPress={() => navigation.navigate(route.name)}
                            style={{ ...styles.button,  backgroundColor: route.name == 'MeetingRoom' ? '#ff751f' : '#0470dc'}}>
                            <FontAwesome name={iconName} size={23} color="#fff"/>
                        </TouchableOpacity>
                    )
                },
                tabBarStyle:{
                    height: 80,
                    elevation: 0,
                    shadowOpacity: 0,
                    paddingBottom: 5,
                    backgroundColor:'#333',
                    borderTopColor: '#333',
                }
            })
        }
        >
            <Tab.Screen name="MeetingRoom" component={MeetingRoom} options={{ headerShown: false }}/>
            <Tab.Screen name="Join" component={Join} options={{ headerShown: false }}/>
            <Tab.Screen name="Schedule" component={Schedule} options={{ headerShown: false }}/>
            <Tab.Screen name="JoinScreen" component={Home} options={{ headerShown: false }}/>
        </Tab.Navigator>
    )
}






const styles = StyleSheet.create({
    button: {
        width: 50,
        height: 50,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    }
})