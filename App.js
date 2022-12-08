import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomePage from "./src/Screens/HomePage";
import AuthorProfile from "./src/Screens/AuthorProfile";

const Stack = createStackNavigator()

const Mystack =()=>{
return(
  <Stack.Navigator>
    <Stack.Screen name="HomePage" component={HomePage} options={{
      headerShown:false
    }}/>
    <Stack.Screen name="AuthorProfile" component={AuthorProfile} options={{
      headerShown:false
    }}/>
  </Stack.Navigator>
)
}
export default ()=>{
  return(
    <NavigationContainer>
    <Mystack/>
    </NavigationContainer>
  )
}