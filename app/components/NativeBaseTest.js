import React from "react";
import { Button, View, StyleSheet } from "react-native";

const Test = () => {
  const obj = { firstName: 'Bob', middleName: 'Chris', lastName: 'Smith' };
  const { firstName, ...otherNames } = obj;
  console.log( firstName ); // Expected output: 'Bob'
  console.log( otherNames );
  // Expected output: { middleName: 'Chris', lastName: 'Smith' }

const objec =  {
  "id":3232323,
  "category": {
    "id": 0,
    "name": "string"
  },
  "name": "fish",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}
console.log(objec.category.name);
console.log(objec.tags[0].name);


}
function NativeBaseTest(props) {


    return (
      <View style={styles.container}>
     <Button title="Click" onPress={Test}/>
     </View>
    );
}
const styles = StyleSheet.create({
  container :{
    flex:1,
    justifyContent:'flex-end',
    alignItems:'center'
  }
})
export default NativeBaseTest;