import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import AllTabs from './screens/AllTabs'




// export default function App() {
//   return (
//     <View>
//       <Home/>
//     </View>
//   )
// }




export default function App() {
  return (
   <NavigationContainer>
     <AllTabs/>
   </NavigationContainer>
  )
}

