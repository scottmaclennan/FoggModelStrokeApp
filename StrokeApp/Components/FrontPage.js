import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';

const FrontPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://yourimageurl.com/logo.png' }} // Replace with your image URL
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome to Our App!</Text>
      <Text style={styles.subtitle}>Get started by exploring the features.</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Explore"
          onPress={() => navigation.navigate('Explore')} // Replace 'Explore' with the actual route name you wish to navigate to
        />
        <Button
          title="About Us"
          onPress={() => navigation.navigate('AboutUs')} // Replace 'AboutUs' with the actual route name you wish to navigate to
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default FrontPage;
