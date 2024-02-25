import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import {
  CameraOptions,
  ImageLibraryOptions,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';

const Profile = () => {
  const [profileImage, setProfileImage] = useState<any>(null);
  const candidate = {
    name: 'John Doe',
    age: 30,
    skills: ['React Native', 'JavaScript', 'UI/UX Design'],
    experience: '5 years',
    // Add other relevant information
  };
  const changeProfileIcon = async () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
    };
    const result = await launchImageLibrary(options);
    const {type, uri} = result.assets![0];

    setProfileImage(Platform.OS === 'android' ? `${uri}` : uri!);
    // setPicture(Platform.OS === 'android' ? `file://${uri}` : uri!);
  };
  return (
    <View style={styles.container}>
      {profileImage ? (
        <TouchableOpacity
          onPress={changeProfileIcon}
          style={styles.profileImageContainer}>
          <Image source={{uri: profileImage}} style={styles.profileImage} />
        </TouchableOpacity>
      ) : (
        <View style={styles.addImageContainer}>
          <TouchableOpacity
            onPress={changeProfileIcon}
            style={styles.addButton}>
            <Icon name="plus" size={16} color="#242424" />
          </TouchableOpacity>
          <Text style={styles.addImageText}>Add Profile Image</Text>
        </View>
      )}
      <Text style={styles.name}>{candidate.name}</Text>
      <Text style={styles.info}>Age: {candidate.age}</Text>
      <Text style={styles.info}>Skills: {candidate.skills.join(', ')}</Text>
      <Text style={styles.info}>Experience: {candidate.experience}</Text>
      {/* Add other components to display additional information */}
    </View>
  );
};

export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: '#171830',
    fontSize: 26,
    fontWeight: '400',
  },
  profileImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    height: 80,
    width: 80,
    borderRadius: 99,
  },
  addImageContainer: {
    paddingVertical: '3%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '2%',
  },
  addButton: {
    height: 40,
    width: 40,
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 99,
  },
  addImageText: {
    paddingHorizontal: '5%',
    color: '#636363',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 18,
    marginBottom: 5,
  },
});
