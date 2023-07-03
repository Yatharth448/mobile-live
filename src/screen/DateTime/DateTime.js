import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Platform, Pressable } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import Icon from 'react-native-vector-icons/Ionicons'
import moment from 'moment';
import { Calendar } from 'react-native-calendars';

export default function DateTime({ navigation }) {
  const [cont, setCont] = useState('');
  const [show, setShow] = useState(false);
  const [segment, setSegment] = useState('0')
  const [location, setLocation] = useState('')
  const [dateTime, setDateTime] = useState('')
 
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(!show);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [show]);

  const headerView = () => {
    return (
      <View style={{ width: '100%', height: 60, marginTop: Platform.OS == 'ios' ? 40 : 20, justifyContent: 'center', backgroundColor: '#000' }}>
        <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#fff" />
          {/* <FontAwesomeIcon icon="far fa-arrow-left" /> */}
        </TouchableOpacity>

      </View>
    )
  }


  const locationView = () => {
    return (
      <View style={{ width: '100%', height: 60, alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
        <View style={{ width: '92%', height: 50, alignItems: 'flex-start', justifyContent: 'center', borderWidth: 1, borderRadius: 5, borderColor: 'grey' }}>
          <Text style={{ marginLeft: 10, color: segment == 1 ? '#F15A27' : 'darkgrey', fontSize: 14, fontWeight: '400', marginTop: 3 }}>Gaur City 2</Text>
        </View>
      </View>
    )
  }

  const ThemedText = (props) => {
    // const isDarkMode = useColorScheme() === 'dark';
  
    const textColorByMode = {color : '#000'};
  
    const TextElement = React.createElement(Text, props);
    return React.cloneElement(TextElement, {
      style: [props.style, textColorByMode],
    });
  };

  const onChange = () =>{
    console.log('date')
  }
  const dateTimeView = () => {
    return (
      <View style={{ width: '100%', height: 500, alignItems: 'center', justifyContent: 'center', marginTop: 0 }}>
       <Calendar
  markingType={'period'}
  markedDates={{
    '2022-12-23': {marked: true, dotColor: '#50cebb'},
    '2022-12-22': {marked: true, dotColor: '#50cebb'},
    '2022-12-21': {startingDay: true, color: '#50cebb', textColor: 'white'},
    '2022-12-22': {color: '#70d7c7', textColor: 'white'},
    '2022-12-23': {color: '#70d7c7', textColor: 'white', marked: true, dotColor: 'white'},
    '2022-12-24': {color: '#70d7c7', textColor: 'white'},
    '2022-12-25': {endingDay: true, color: '#50cebb', textColor: 'white'}
  }}
/>
      </View>
    )
  }

  const buttonView = () => {
    return (
      <View style={{ width: '100%', height: 50, alignItems: 'center', position: 'absolute', bottom: 30 }}>
        <TouchableOpacity onPress={() => navigation.navigate('UserDetailScreen')} style={{ width: '90%', height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor:  location && dateTime ? '#F15A27' : 'gray', borderRadius: 5 }}>
          <Text style={{ color: location && dateTime ? '#fff' : 'lightgray', fontSize: 16, fontWeight: '600' }}>Continue</Text>
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <View style={styles.main}>
      {headerView()}
      {locationView()}
      {dateTimeView()}
      {buttonView()}

    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    alignItems: 'center',
    // justifyContent: 'center'
  },
});