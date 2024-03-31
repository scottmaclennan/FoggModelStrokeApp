import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const UserProfile = () => {
  // Placeholder data - replace with actual data fetched from your backend
  const userInfo = {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    profilePictureUrl: 'https://via.placeholder.com/150', // Use a real URL
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: userInfo.profilePictureUrl }} style={styles.profilePicture} />
      <Text style={styles.name}>{userInfo.name}</Text>
      <Text style={styles.email}>{userInfo.email}</Text>
      <Text style={styles.bio}>{userInfo.bio}</Text>
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
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75, // Makes it circular
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: 'gray',
  },
  bio: {
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default UserProfile;
