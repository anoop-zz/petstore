import React, {useState, useEffect} from "react";

import CartCard from "./CartCard";
import { View,StyleSheet,TouchableWithoutFeedback} from "react-native";
import { Button, Dialog, Portal, Provider, Text, Checkbox, Searchbar } from 'react-native-paper';


const PickerFunction = () => {

  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
 
  useEffect(() => {
         if (checked) {
             setChecked2(false);
             setChecked3(false);
           }
           if (checked2) {
             setChecked(false);
             setChecked3(false);
           }
           if (checked3) {
             setChecked(false);
             setChecked2(false);
           }
       },[checked,checked2,checked3] );
 
     return (
         <View>
 
         <View style={styles.optionsContainer}>
         <Checkbox
   status={checked ? 'checked' : 'unchecked'}
   onPress={() => {
     setChecked(!checked);
   }} />
         <Text variant="bodyMedium" style={styles.options}>Available</Text>
         </View>
 
         <View style={styles.optionsContainer}>
         <Checkbox
   status={checked2 ? 'checked' : 'unchecked'}
   onPress={() => {
     setChecked2(!checked2);
   }}  />
         <Text variant="bodyMedium" style={styles.options}>Pending</Text>
         </View>
 
         <View style={styles.optionsContainer}>
         <Checkbox
   status={checked3 ? 'checked' : 'unchecked'}
   onPress={() => {
     setChecked3(!checked3);
   }} />
         <Text variant="bodyMedium" style={styles.options}>Sold</Text>
         </View>
         </View>
  );
 }

const PickerNativePaper = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);
  const [visible, setVisible] = useState(false);
  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);
  return (
    <Provider>
    
  <View style={styles.bG}>
      <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
      <TouchableWithoutFeedback
      onPress={showDialog}>
      <View style={styles.addPetContainer}>
      <Text  style={styles.titlePet}>Add New Pet</Text>
      </View>
      </TouchableWithoutFeedback>
      </View>
 
      <View>
     
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Choose an Option to Filter</Dialog.Title>
            <Dialog.Content>
            <PickerFunction />
            </Dialog.Content>
            <Dialog.Actions>
            <Button mode="contained" onPress={hideDialog}>Back</Button>
              <Button onPress={hideDialog}>Filter</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
        </View>
       
  <CartCard/>
 
  </Provider>
  );
};
const styles = StyleSheet.create({
  bG: {
    backgroundColor: 'dodgerblue',
    flexDirection:'row',
    justifyContent:'space-around',
    },
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
      options:{
        paddingLeft:10,
        paddingTop:8
    },
    optionsContainer:{
        flexDirection:'row'
    },
    testt:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    titlePet: {
      fontSize: 22,
      fontWeight: "bold",
      color:'black'
    },
})

export default PickerNativePaper;
