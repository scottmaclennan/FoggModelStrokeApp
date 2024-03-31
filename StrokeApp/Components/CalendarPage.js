import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CalendarPage = () => {
  return (
    <View style={styles.container}>
      <Calendar
        // Initially visible month. Default = Date()
        current={'2024-03-01'}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={'2022-05-10'}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={'2024-05-30'}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={(day) => console.log('selected day', day)}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat={'yyyy MM'}
        // Do not show days of other months in month page. Default = false
        hideExtraDays={true}
        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
        firstDay={1}
        // Show week numbers to the left. Default = false
        showWeekNumbers={true}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={(month) => console.log('month changed', month)}
        // Enable the option to swipe between months. Default = false
        enableSwipeMonths={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50, // Adjust based on your navbar's height
  },
});

export default CalendarPage;
