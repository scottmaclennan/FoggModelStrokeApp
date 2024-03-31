import * as React from 'react';
import {Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// All the pages of the app
import CalendarPage from './Components/CalendarPage';
import UserSignUp from './Components/UserProfile';
import UserProfile from './Components/UserProfile';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Medical"
        onPress={() => navigation.navigate('Medical')}
      />
      <Button
        title="Go to Exercise"
        onPress={() => navigation.navigate('Exercise')}
      />
      <Button
        title="Go to User SignUP"
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  );
}

function ExerciseTracker({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Medical... again"
        onPress={() => navigation.push('Medical')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go Medical Tracker" onPress={() => navigation.navigate('Exercise')} />
    </View>
  );
}

function MedicalTracker({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Exercise... again"
        onPress={() => navigation.push('Exercise')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go Exercise Tracker" onPress={() => navigation.navigate('Exercise')} />

    </View>
  );
}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{title: 'Overview'}}
         />
        <Stack.Screen name="Medical" component={CalendarPage} />
        <Stack.Screen name="Exercise" component={ExerciseTracker} />
        <Stack.Screen name="SignUp" component={UserProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
