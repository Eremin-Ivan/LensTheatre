import React, {useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  TextInput,
  FlatList,
  StyleSheet,
  ScrollView,
} from 'react-native';

import {Styles} from './styles';
import {Themes} from '../../../Theme';

export const ToDoList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleAddTask = () => {
    if (task) {
      if (editIndex !== -1) {
        // Edit existing task
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = task;
        setTasks(updatedTasks);
        setEditIndex(-1);
      } else {
        // Add new task
        setTasks([...tasks, task]);
      }
      setTask('');
    }
  };

  const handleEditTask = index => {
    const taskToEdit = tasks[index];
    setTask(taskToEdit);
    setEditIndex(index);
  };

  const handleDeleteTask = index => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const renderItem = ({item, index}) => (
    <View style={Styles.task}>
      <Text style={Styles.itemList}>{item}</Text>
      <View style={Styles.taskButtons}>
        <TouchableOpacity onPress={() => handleEditTask(index)}>
          <Text style={Styles.editButton}>изменить</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDeleteTask(index)}>
          <Text style={Styles.deleteButton}>удалить</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const navigation = useNavigation();

  return (
    <View style={Styles.screen}>
      <TouchableOpacity
        style={Styles.backButton}
        onPress={() => {
          navigation.navigate('Main');
        }}>
        <Text style={Styles.title}>назад</Text>
      </TouchableOpacity>

      <View style={Styles.container}>
        <TextInput
          style={Styles.input}
          placeholder="введите текст"
          value={task}
          placeholderTextColor={Themes.white}
          cursorColor={Themes.colorLens}
          onChangeText={text => setTask(text)}
        />
        <TouchableOpacity style={Styles.addButton} onPress={handleAddTask}>
          <Text style={Styles.addButtonText}>
            {editIndex !== -1 ? 'Обновить' : 'Добавить'}
          </Text>
        </TouchableOpacity>
        <FlatList
          data={tasks}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};
