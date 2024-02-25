import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import TaskList from './TaskList';
import axios from 'axios';
import {todoList} from '../utils/types';
import {useAppContext} from '../utils/AppContext';

const Home = () => {
  const [todoList, setTodoList] = useState<todoList[]>([]);
  const {setTask} = useAppContext();
  useEffect(() => {
    getTodoList();
  }, []);
  const getTodoList = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
        if (res?.data) {
          let data = res?.data;
          setTodoList(data);
          setTask!(data);
        }
      })
      .catch(err => console.log(err));
  };
  const updateTask = (id: number) => {
    let updateArr = todoList.map(item =>
      item.id === id ? {...item, completed: !item.completed} : item,
    );
    setTodoList(updateArr);
  };
  return (
    <View>
      <TaskList todoList={todoList} toggleTask={updateTask} />
    </View>
  );
};

export default Home;
