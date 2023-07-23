import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./customListItem.styles";

export default function CustomListItem(props) {
  return (
    <View style={styles.task}>
      <Text style={styles.itemList}>{props.data}</Text>
      <View style={styles.taskButtons}>
        <TouchableOpacity onPress={() => props.handleEditTask(props.index)}>
          <Text style={styles.editButton}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.handleDeleteTask(props.index)}>
          <Text style={styles.deleteButton}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
