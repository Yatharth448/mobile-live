import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Platform, Pressable, FlatList } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import Icon from 'react-native-vector-icons/Ionicons'

export default function HomeScreen({ navigation }) {
  const [cont, setCont] = useState('');
  const [show, setShow] = useState(false);
  const [segment, setSegment] = useState('0')
  const [location, setLocation] = useState('')
  const [dateTime, setDateTime] = useState('')
  const dataSource = [{ name: 'Maruti Suzuki Alto', price: '₹ 150 per hour' }, { name: 'Maruti Suzuki Swift', price: '₹ 150 per hour' }, { name: 'Maruti Suzuki Baleno', price: '₹ 150 per hour' }, { name: 'Maruti Suzuki Ertiga', price: '₹ 150 per hour' }]

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(!show);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [show]);

  const headerView = () => {
    return (
      <View style={{ width: '100%', height: 60, marginTop: Platform.OS == 'ios' ? 40 : 20, justifyContent: 'center', backgroundColor: '#000' }}>
        <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => navigation.openDrawer()}>
          <Icon name="menu" size={24} color="#fff" />
          {/* <FontAwesomeIcon icon="far fa-arrow-left" /> */}
        </TouchableOpacity>

      </View>
    )
  }

  const topSegmentControl = () => {
    return (
      <View style={{ width: '100%', height: 50, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginTop: 15 }}>
        <Pressable onPress={() => setSegment('0')} style={{ width: '46%', height: 48, borderColor: segment == 0 ? '#F15A27' : 'grey', borderWidth: 1, borderTopLeftRadius: segment == 0 ? 0 : 5, borderBottomLeftRadius: segment == 0 ? 0 : 5, justifyContent: 'center', alignItems: 'center' }}>
          <Icon name="repeat" size={20} color={segment == 0 ? '#F15A27' : 'darkgrey'} />
          <Text style={{ color: segment == 0 ? '#F15A27' : 'darkgrey', fontSize: 14, fontWeight: '400', marginTop: 0 }}>Round Trip</Text>
        </Pressable>
        <Pressable onPress={() => setSegment('1')} style={{ width: '46%', height: 48, borderColor: segment == 1 ? '#F15A27' : 'grey', borderWidth: 1, borderTopRightRadius: segment == 1 ? 0 : 5, borderBottomRightRadius: segment == 1 ? 0 : 5, justifyContent: 'center', alignItems: 'center' }}>
          <Icon name="airplane" size={20} color={segment == 1 ? '#F15A27' : 'darkgrey'} />
          <Text style={{ color: segment == 1 ? '#F15A27' : 'darkgrey', fontSize: 14, fontWeight: '400', marginTop: 3 }}>Airport Round Trip</Text>
        </Pressable>

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

  const dateTimeView = () => {
    return (
      <Pressable onPress={() => navigation.navigate('DateTime')} style={{ width: '100%', height: 60, alignItems: 'center', justifyContent: 'center', marginTop: 0 }}>
        <View style={{ width: '92%', height: 50, alignItems: 'flex-start', justifyContent: 'center', borderWidth: 1, borderRadius: 5, borderColor: 'grey' }}>
          <Text style={{ marginLeft: 10, color: segment == 1 ? '#F15A27' : 'darkgrey', fontSize: 14, fontWeight: '400', marginTop: 3 }}>Gaur City 2</Text>
        </View>
      </Pressable>
    )
  }

  const buttonView = () => {
    return (
      <View style={{ width: '100%', height: 50, alignItems: 'center', marginTop: 20 }}>
        <TouchableOpacity onPress={() => navigation.navigate('UserDetailScreen')} style={{ width: '90%', height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: location && dateTime ? '#F15A27' : 'gray', borderRadius: 5 }}>
          <Text style={{ color: location && dateTime ? '#fff' : 'lightgray', fontSize: 16, fontWeight: '600' }}>FIND CARS</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const carCatalogueView = () => {
    return (
      <View style={{ width: '100%', alignItems: 'center', marginTop: 20 }}>
        <View style={{ width: '90%', height: 50, alignItems: 'center', flexDirection: 'row' }}>
          <View style={{ width: '40%', alignItems: 'flex-start', justifyContent: 'center' }}>
            <Text style={{ color: location && dateTime ? '#fff' : 'lightgray', fontSize: 14, fontWeight: '500' }}>Car Catalogue</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('UserDetailScreen')} style={{ width: '60%', alignItems: 'flex-end', justifyContent: 'center', }}>
            <Text style={{ color: location && dateTime ? '#fff' : 'lightgray', fontSize: 13, fontWeight: '400' }}>View All</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          contentContainerStyle={{ marginBottom: 20, marginTop: 30 }}
          data={dataSource}
          keyExtractor={(item, index) => index}
          horizontal
          showsHorizontalScrollIndicator={false}
          numColumns={1}
          renderItem={({ item, index }) => (
            <Pressable onPress={() => this.navigateTo(item.url)}>

              <View style={{ width: 200, height: 100, alignItems: 'center', marginLeft: 15 }}>


                <View style={{ width: 200, height: 80, alignItems: 'flex-start', justifyContent: 'flex-end', borderRadius: 10, shadowColor: Platform.OS === 'ios' ? "rgba(0,0,0, 0.3)" : '#000000', shadowOffset: { width: 2, height: 2 }, shadowOpacity: 0.5, elevation: 5, boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)", borderBottomLeftRadius : 10, borderBottomRightRadius: 10}}>

                  <Text style={{ color: '#000', fontSize: 14, fontWeight: '600', marginLeft: 10 }}>{item.name}</Text>

                  <Text style={{ color: '#000', fontSize: 13, fontWeight: '600', marginLeft: 10, marginBottom: 3 }}>{item.price}</Text>


                </View>

                <View style={{ width: 200, alignItems: 'center', position: 'absolute', top: -50 }}>

                  <Icon name="car" size={100} color="red" />
                </View>

              </View>
            </Pressable>
          )}
        />

      </View>
    )
  }

  return (
    <View style={styles.main}>
      {headerView()}
      {topSegmentControl()}
      {locationView()}
      {dateTimeView()}
      {buttonView()}
      {carCatalogueView()}

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