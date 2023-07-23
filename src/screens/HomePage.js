import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
  Keyboard,
} from "react-native";
import CustomListItem from "../components/customListItem";
import { DIALOG_CONST, COMMON_CONST } from "../constants";
import styles from "./homePage.styles";

export default function Homepage() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleAddTask = () => {
    if (task !== "") {
      Alert.alert(
        editIndex !== -1
          ? DIALOG_CONST.UPDATE_ITEM_TITLE
          : DIALOG_CONST.ADD_ITEM_TITLE,
        editIndex !== -1
          ? DIALOG_CONST.UPDATE_ITEM_MESSAGE
          : DIALOG_CONST.ADD_ITEM_MESSAGE,
        [
          {
            text: DIALOG_CONST.NEGATIVE_BUTTON_LABEL,
            style: "cancel",
          },
          {
            text: DIALOG_CONST.POSITIVE_BUTTON_LABEL,
            onPress: () => {
              Keyboard.dismiss();
              if (task) {
                if (editIndex !== -1) {
                  const updatedTasks = [...tasks];
                  updatedTasks[editIndex] = task;
                  setTasks(updatedTasks);
                  setEditIndex(-1);
                } else {
                  // Add new task
                  setTasks([...tasks, task]);
                }
                setTask("");
              }
            },
          },
        ]
      );
    } else {
      Alert.alert("ERROR", COMMON_CONST.EMPTY_INPUT_FIELD_ERROR);
    }
  };

  const handleDeleteTask = (index) => {
    Alert.alert(
      DIALOG_CONST.DELETE_ITEM_TITLE,
      DIALOG_CONST.DELETE_ITEM_MESSAGE,
      [
        {
          text: DIALOG_CONST.NEGATIVE_BUTTON_LABEL,
          style: "cancel",
        },
        {
          text: DIALOG_CONST.POSITIVE_BUTTON_LABEL,
          onPress: () => {
            Keyboard.dismiss();
            const updatedTasks = [...tasks];
            updatedTasks.splice(index, 1);
            setTasks(updatedTasks);
          },
        },
      ]
    );
  };

  const handleEditTask = (index) => {
    Alert.alert(
      DIALOG_CONST.UPDATE_ITEM_TITLE,
      DIALOG_CONST.UPDATE_ITEM_MESSAGE,
      [
        {
          text: DIALOG_CONST.NEGATIVE_BUTTON_LABEL,
          style: "cancel",
        },
        {
          text: DIALOG_CONST.POSITIVE_BUTTON_LABEL,
          onPress: () => {
            const taskToEdit = tasks[index];
            setTask(taskToEdit);
            setEditIndex(index);
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={COMMON_CONST.ADD_NEW_TASK}
        value={task}
        onChangeText={(text) => setTask(text)}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
        <Text style={styles.addButtonText}>
          {editIndex !== -1
            ? DIALOG_CONST.UPDATE_ITEM_TITLE
            : DIALOG_CONST.ADD_ITEM_TITLE}
        </Text>
      </TouchableOpacity>
      <FlatList
        style={{ flex: 1 }}
        data={tasks}
        renderItem={({ item, index }) => (
          <CustomListItem
            data={item}
            index={index}
            handleDeleteTask={handleDeleteTask}
            handleEditTask={handleEditTask}
          />
        )}
        keyExtractor={(index) => index.toString()}
      />
    </View>
  );
}
