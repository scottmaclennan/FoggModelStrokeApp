import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MedicalTracker from './screens/MedicalTracker';
import ExerciseTracker from './screens/ExerciseTracker'; // Import other screens here

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={MedicalTracker} />
        <Stack.Screen name="Other" component={ExerciseTracker} /> // Add other screens here
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
