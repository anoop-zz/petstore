import React, { useState } from 'react';

import { Formik } from 'formik';
import { View, TextInput, Button,Text, StyleSheet,ImageBackground,ActivityIndicator } from 'react-native';

import * as Yup from "yup";

const initialValues = {
  id: 0,
  username:'',
   firstName:'',
    lastName:'',
    email: '',
    password: '',
   phone:'',
   userStatus: 0
 };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(4, 'Password is too short').required('Required'),
    firstName:Yup.string().required('Required'),
    username:Yup.string().required('Required'),
    phone:Yup.number().required('Required'),
  });

function RegisterScreen({navigation}) {

  const [loading,  setLoading] = useState(false);

  const handleRegister = async (values) => {
    setLoading(true);
    const Data = JSON.stringify(values);
    console.log(Data);
    try {
      const response = await  fetch("https://petstore.swagger.io/v2/user", {
        method: 'POST',
        body: Data,
        headers: {
          Accept: "application/json",
          'Content-Type': 'application/json'
        },
      });
      const data = await response.json();
      console.log(data);
      data.code === 200 ? navigation.goBack() : console.log('failed')
      // process data
    } catch (error) {
      console.log(error);
      // handle error
    } finally {
      setLoading(false);
    }
  };

  const ActivityIndicators = () => (
    <View style={styles.containerAct}>
      <ActivityIndicator size="large" color="green" animating={loading}/>
   </View>
  );
  
 return (
        <ImageBackground source={require('../assets/snow.jpg')} style={styles.bgImage} resizeMode='cover'>
          <View style={styles.title}>
             <Text style={styles.titleText}> Registration Screen
            </Text>
            </View>
        <Formik
        initialValues={initialValues}
        onSubmit={handleRegister}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View>
            <TextInput
              placeholder="First Name"
              onChangeText={handleChange('firstName')}
              onBlur={handleBlur('firstName')}
              value={values.firstName}
              autoCapitalize="none"
              keyboardType="email-address"
              style={styles.emailInput}
              placeholderTextColor={'white'}
            />
            {errors.firstName && <Text style={{ color: 'yellow' }}>{errors.firstName}</Text>}
            <TextInput
              placeholder="Second Name"
              onChangeText={handleChange('lastName')}
              onBlur={handleBlur('lastName')}
              value={values.lastName}
              autoCapitalize="none"
              keyboardType="email-address"
              style={styles.emailInput}
              placeholderTextColor={'white'}
            />
            <TextInput
              placeholder="User Name"
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
              autoCapitalize="none"
              keyboardType="email-address"
              style={styles.emailInput}
              placeholderTextColor={'white'}
            />
            {errors.username && <Text style={{ color: 'yellow' }}>{errors.username}</Text>}
            <TextInput
              placeholder="Mobile No"
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
              value={values.phone}
              autoCapitalize="none"
              keyboardType="email-address"
              style={styles.emailInput}
              placeholderTextColor={'white'}
            />
            {errors.phone && <Text style={{ color: 'yellow' }}>{errors.phone}</Text>}
            <TextInput
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              autoCapitalize="none"
              keyboardType="email-address"
              style={styles.emailInput}
              placeholderTextColor={'white'}
            />
            {errors.email && <Text style={{ color: 'yellow' }}>{errors.email}</Text>}
  
            <TextInput
              placeholder="Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
              style={styles.emailInput}
              placeholderTextColor={'white'}
            />
            {errors.password && <Text style={{ color: 'yellow' }}>{errors.password}</Text>}
            <View style={styles.btContainer}>
            <Button onPress={handleSubmit} title="Register" />
            </View>
            
          </View>
        )}
      </Formik>
      <View style={{paddingTop:15}}>
      <ActivityIndicators />
      </View>
      <View style={styles.goBack}>
            <Button  title="Go back" color={'red'} onPress={() => navigation.goBack()} />
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    bgImage: {
        flex:1,
        width: '100%',
        height: '100%',
       
      },
      btContainer:{
        paddingTop:50
      },
      emailInput : {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: 'white',
        borderWidth: 2,
        color:'white'
        
      },
      goBack:{
       flex:1,
      justifyContent:'flex-end',
      paddingBottom:50
      },
      title : {
        alignItems:'center'
      },
      titleText:{
        fontSize:32,
        fontWeight:'900',
      color:'white'      }
})

export default RegisterScreen;
