import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { FloatingLabelInput } from 'react-native-floating-label-input';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons'
export default function UserDetailScreen({ route, navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);

    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         setShow(!show);
    //     }, 5000);
    //     return () => clearTimeout(timeout);
    // }, [show]);


    const headerView = () => {
        return (
            <View style={{ width: '100%', height: 80, marginTop: 20, justifyContent: 'center' }}>
                <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => navigation.goBack()}>
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
                    <Text style={{ color: '#000', fontSize: 18, fontWeight: '500' }}>Fill In A Few More Details</Text>
                    <Text style={{ color: 'darkgray', fontSize: 12, fontWeight: '400', marginTop: 3 }}>One last step to create a new account</Text>
                </View>
                <View style={{ width: '90%', height: 50, marginTop: 10 }}>

                    <TextInput
                        mode="outlined"
                        label="Full Name(As Per Driving License)"
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        activeOutlineColor='#F15A27'
                        placeholder="Enter full name"
                    />

                </View>
                <View style={{ width: '90%', height: 50, marginTop: 30 }}>
                    <TextInput
                        mode="outlined"
                        label="Password"
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        secureTextEntry={show}
                        activeOutlineColor='#F15A27'
                        placeholder="Enter password"
                        onPress={(abc)=> console.log('abc')}
                        right={show ? <TextInput.Icon onPress={()=> setShow(false)} icon="eye-off"/> : <TextInput.Icon onPress={()=> setShow(true)} icon="eye"/>}
                    />

                </View>

            </View>
            <View style={{ width: '100%', height: 50, alignItems: 'center', position: 'absolute', bottom: 30 }}>
                <TouchableOpacity onPress={()=> email && password ? navigation.navigate('MyDrawer') : ''} style={{ width: '90%', height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor:  email && password ? '#F15A27' : 'gray', borderRadius: 5 }}>
                    <Text style={{ color: email && password ? '#fff' : 'lightgray', fontSize: 16, fontWeight: '600' }}>REGISTER</Text>
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