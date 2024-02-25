import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {todoList} from '../utils/types';

interface IProps {
  todoList?: todoList[];
  toggleTask: (id: number) => void;
}
const TaskList: React.FC<IProps> = ({todoList, toggleTask}) => {
  const renderTask = ({item}: any) => (
    <TouchableOpacity
      style={[
        styles.task,
        item.completed ? styles.completedTask : styles.uncompletedTask,
      ]}
      onPress={() => toggleTask(item.id)}>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView>
      <View style={{}}>
        <FlatList data={todoList} renderItem={renderTask} />
      </View>
    </SafeAreaView>
  );
};

export default TaskList;
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
  uncompletedTask: {
    textDecorationLine: 'line-through',
    backgroundColor: '#ad4e60',
  },
});
