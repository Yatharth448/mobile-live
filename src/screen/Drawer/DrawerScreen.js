import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Feather from 'react-native-vector-icons/Feather'

// import { FloatingLabelInput } from 'react-native-floating-label-input';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'


function CustomDrawerContent(props) {
  const width = Dimensions.get('window').width * 0.3;

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.menuContainer}>
        <View
          style={[
            styles.menuItemsCard,
            { backgroundColor: '#fff2df', width: width, height: width },
          ]}>
          <>
            <View
              style={[styles.circleContainer, { backgroundColor: '#FFC56F' }]}>
              <Feather travel name="briefcase" size={25} color="#fbae41" />
              <DrawerItem
                label="Screen1"
                labelStyle={{ color: '#fbae41', fontSize: 10 }}
                onPress={() => {
                  props.navigation.navigate('HomeScreen');
                }}
              />
            </View>
          </>
          <DrawerItem
            style={{
              position: 'absolute',
              left: 0,
              width: width,
              height: width,
            }}
            label="Screen2"
            labelStyle={{ color: '#609806' }}
            onPress={() => {
              props.navigation.navigate('Screen1');
            }}
          />
        </View>
        <View
          style={[
            styles.menuItemsCard,
            { backgroundColor: '#EFFFD5', width: width, height: width },
          ]}>
          <View
            style={[styles.circleContainer, { backgroundColor: '#b5ff39' }]}>
            <Feather Medical name="briefcase" size={25} color="#609806" />
          </View>

          <DrawerItem
            style={{
              position: 'absolute',
              left: 0,
              width: width,
              height: width,
            }}
            label="Screen2"
            labelStyle={{ color: '#609806' }}
            onPress={() => {
              props.navigation.navigate('StackNav');
            }}
          />
        </View>
      </View>

      <View style={{ width: '100%', height: 50, justifyContent: 'center', marginTop: 20 }}>
        <DrawerItem
          style={{
            position: 'absolute',
            left: 0,
            width: '100%',
            height: 50,
          }}
          label="Policies"
          labelStyle={{ color: '#609806' }}
          onPress={() => {
            props.navigation.navigate('StackNav');
          }}
        />
      </View>
      <View style={{ width: '100%', height: 50, justifyContent: 'center' }}>
        <DrawerItem
          style={{
            position: 'absolute',
            left: 0,
            width: '100%',
            height: 50,
          }}
          label="Help & Support"
          labelStyle={{ color: '#609806' }}
          onPress={() => {
            props.navigation.navigate('StackNav');
          }}
        />
      </View>
    </DrawerContentScrollView>
  );
}



export default function DrawerScreen({ ...props }) {
  return (
    <CustomDrawerContent {...props} />
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    alignItems: 'center',
  },
  menuContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10
  },
  menuItemsCard: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  circleContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    padding: 10,
  },
});