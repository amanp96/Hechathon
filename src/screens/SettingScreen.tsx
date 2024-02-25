import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {useAppContext} from '../utils/AppContext';

const SettingScreen = () => {
  const {theme, toggleTheme} = useAppContext();

  console.log(theme);
  return (
    <View style={styles.container}>
      <Text style={[styles.title, {color: theme.colors.text}]}>Settings</Text>

      <TouchableOpacity
        style={styles.option}
        onPress={() => {
          toggleTheme();
        }}>
        <Text>Change Theme</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => {}}>
        <Text>Change Language</Text>
      </TouchableOpacity>

      {/* Add more settings options as needed */}
    </View>
  );
};

export default SettingScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  option: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
});
