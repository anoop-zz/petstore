import React, {useState} from "react";
import { View, StyleSheet,FlatList, Text, Modal,TextInput,TouchableOpacity, TouchableWithoutFeedback, StatusBar, SafeAreaView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Searchbar, Button } from 'react-native-paper';

import * as Yup from "yup";
import { Formik } from 'formik';

import PetCard2 from "../components/PetCard2";

const initialValues = {
  name: '',
  tags: '',
  category:'',
  availability:''
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  tags: Yup.string().required('Required'),
  category:Yup.string().required('Required'),
  availability:Yup.string().required('Required'),
});

function PetsFeedScreen(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);

  const onSubmit = (values) => {
    console.log(values);
    setModalVisible(false);
  };
  
    return (
      <>
      <View style={styles.bG}>
      <TouchableWithoutFeedback
      onPress={() =>setModalVisible(true)}>
      <View style={styles.addPetContainer}>
      <Text style={styles.titlePet}>Add New Pet </Text>
      </View>
      </TouchableWithoutFeedback>
      </View>
      
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
           setModalVisible(!modalVisible);
          }}>
            <View style={styles.modContainer}>
               <Button  mode="contained" onPress={() => setModalVisible(false)}>Close</Button>
            <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View>
            <TextInput
              placeholder="Name"
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              autoCapitalize="none"
              keyboardType="default"
              style={styles.emailInput}
              placeholderTextColor={'black'}
            />
            {errors.name && <Text style={{ color: 'red' }}>{errors.name}</Text>}
  
            <TextInput
              placeholder="Tags"
              onChangeText={handleChange('tags')}
              onBlur={handleBlur('tags')}
              value={values.tags}
              style={styles.emailInput}
              keyboardType="default"
              placeholderTextColor={'black'}
              multiline
            />
            {errors.tags && <Text style={{ color: 'red' }}>{errors.tags}</Text>}
            <TextInput
              placeholder="Choose Category (eg. Cats,Dogs..etc)"
              onChangeText={handleChange('category')}
              onBlur={handleBlur('category')}
              value={values.category}
              style={styles.emailInput}
              keyboardType="default"
              placeholderTextColor={'black'}
              
            />
            {errors.category && <Text style={{ color: 'red' }}>{errors.category}</Text>}
            <TextInput
              placeholder="Available or Unavailable"
              onChangeText={handleChange('availability')}
              onBlur={handleBlur('availability')}
              value={values.availability}
              style={styles.emailInput}
              keyboardType="default"
              placeholderTextColor={'black'}
              
            />
            {errors.availability && <Text style={{ color: 'red' }}>{errors.availability}</Text>}
            
            <View style={styles.btContainer}>
            <Button mode="contained" onPress={() =>handleSubmit()}>Submit</Button>
            </View>
          </View>
        )}
      </Formik>
        
           </View>
          
        </Modal>
        <PetCard2 />

      </>
    );
}
const styles = StyleSheet.create({
  addPetContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    flexDirection: "row",
    padding: 5,
    marginVertical: 5,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    },
 bG: {
    backgroundColor: 'dodgerblue',
    flexDirection:'row',
    justifyContent:'space-around',
    },
    btContainer: {
      paddingTop: 15,
      paddingBottom:15
      },
 containerModal: {
    backgroundColor: "#adff2f",
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10
   },
  emailInput : {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'black',
    borderWidth: 2,
    color:'black'
    
  },
  modContainer :{
    flex: 1,
    backgroundColor: 'white',

  },
  titlePet: {
    fontSize: 22,
    fontWeight: "bold"
  },
  });

export default PetsFeedScreen;