import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';

const ExerciseLog = () => {
  const [exerciseName, setExerciseName] = useState('');
  const [duration, setDuration] = useState('');
  const [reps, setReps] = useState('');
  const [sets, setSets] = useState('');
  const [logs, setLogs] = useState([]);

  const addExerciseLog = () => {
    const newLog = { exerciseName, duration, reps, sets, id: logs.length + 1 };
    setLogs([...logs, newLog]);
    // Clear the input fields
    setExerciseName('');
    setDuration('');
    setReps('');
    setSets('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Exercise Name"
        value={exerciseName}
        onChangeText={setExerciseName}
      />
      <TextInput
        style={styles.input}
        placeholder="Duration (in minutes)"
        keyboardType="numeric"
        value={duration}
        onChangeText={setDuration}
      />
      <TextInput
        style={styles.input}
        placeholder="Repetitions"
        keyboardType="numeric"
        value={reps}
        onChangeText={setReps}
      />
      <TextInput
        style={styles.input}
        placeholder="Sets"
        keyboardType="numeric"
        value={sets}
        onChangeText={setSets}
      />
      <Button title="Log Exercise" onPress={addExerciseLog} />
      <ScrollView>
        {logs.map((log) => (
          <View key={log.id} style={styles.log}>
            <Text>Exercise: {log.exerciseName}</Text>
            <Text>Duration: {log.duration} minutes</Text>
            <Text>Repetitions: {log.reps}</Text>
            <Text>Sets: {log.sets}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  log: {
    padding: 10,
    marginTop: 10,
    backgroundColor: '#f0f0f0',
  },
});

export default ExerciseLog;
