import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { FloatingLabelInput } from 'react-native-floating-label-input';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons'
export default function LoginScreen({ route, navigation }) {
  const [email, setEmail] = useState('');
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(!show);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [show]);


  const headerView = () => {
    return (
      <View style={{ width: '100%', height: 80, marginTop: 20, justifyContent: 'center' }}>
        <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => console.log('Back')}>
          <Icon name="arrow-back" size={28} color="#000" />
          {/* <FontAwesomeIcon icon="far fa-arrow-left" /> */}
        </TouchableOpacity>

      </View>
    )
  }

  return (
    <View style={styles.main}>
      {headerView()}
      <View style={styles.container}>
        <View style={{ height: 50, width: '90%' }}>
          <Text style={{ color: '#000', fontSize: 18, fontWeight: '500' }}>Enter Email ID</Text>
          <Text style={{ color: 'darkgray', fontSize: 12, fontWeight: '400', marginTop: 3 }}>we'll veriffy if the email is registered with Karaya</Text>
        </View>
        <View style={{ width: '90%', height: 50, marginTop: 10 }}>

          <TextInput
            mode="outlined"
            label="Email ID"
            onChangeText={(text) => setEmail(text)}
            value={email}
            activeOutlineColor='#F15A27'
            placeholder="Enter email"
          // right={<TextInput.Affix text="/100" />}
          />

        </View>

      </View>
      <View style={{ width: '100%', height: 50, alignItems: 'center', position: 'absolute', bottom: 30 }}>
        <TouchableOpacity onPress={()=> navigation.navigate('UserDetailScreen')} style={{ width: '90%', height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: email ? '#F15A27' : 'gray', borderRadius: 5 }}>
          <Text style={{ color: email ? '#fff' : 'lightgray', fontSize: 16, fontWeight: '600' }}>Continue</Text>
        </TouchableOpacity>
      </View>
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
  },
});