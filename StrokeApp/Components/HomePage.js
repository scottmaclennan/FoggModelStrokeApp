import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Page</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Other')} // Use the name of the screen you want to navigate to
      >
        <Text>Go to Other Screen</Text>
      </TouchableOpacity>
      {/* Repeat TouchableOpacity for other screens */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
  },
});

export default HomePage;
