import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  CameraOptions,
  ImageLibraryOptions,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';

const PersonalInfo = () => {
  const [profileImage, setProfileImage] = useState<any>(null);

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
      <Text style={styles.title}>Personal Info</Text>

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '6%',
    paddingVertical: '3%',
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
});

export default PersonalInfo;
