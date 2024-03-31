import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CalendarPage = () => {
  const [markedDates, setMarkedDates] = useState({});

  const handleDayPress = (day) => {
    const { dateString } = day;
    const isMedTaken = markedDates[dateString]?.marked;

    const newMarkedDates = {
      ...markedDates,
      [dateString]: { marked: !isMedTaken, dotColor: !isMedTaken ? 'green' : 'red' },
    };

    setMarkedDates(newMarkedDates);

    Alert.alert(
      "Medication Status",
      !isMedTaken ? "Marked as taken." : "Marked as not taken.",
      [{ text: "OK" }]
    );
  };

  return (
    <View style={styles.container}>
      <Calendar
        current={new Date()}
        minDate={'2024-01-01'}
        maxDate={'2024-12-31'}
        onDayPress={handleDayPress}
        markedDates={markedDates}
        markingType={'simple'}
        enableSwipeMonths={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
});

export default CalendarPage;

