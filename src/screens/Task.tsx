import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {useAppContext} from '../utils/AppContext';

const Task = () => {
  const {task} = useAppContext();
  const renderTask = ({item}: any) => (
    <TouchableOpacity
      style={[styles.task, item.completed && styles.completedTask]}>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView>
      <View style={{}}>
        <FlatList data={task} renderItem={renderTask} />
      </View>
    </SafeAreaView>
  );
};

export default Task;
const styles = StyleSheet.create({
  task: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  completedTask: {
    textDecorationLine: 'line-through',
    backgroundColor: '#4db094',
  },
});
