import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

interface TaskProps {
  text: string;
}

const Task: React.FC<TaskProps> = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.itemtext}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemtext: {
    maxWidth: '80%',
  },
  circular: {
    width: 12,
    height: 12,
    backgroundColor: '#55BCF6',  // Typo fixed here (was 'bagroundcolor')
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Task;