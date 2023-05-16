import React, {useState} from 'react';
import {  View,FlatList, StyleSheet, Text,TouchableOpacity,Button } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";



const CartItem = ({item}) => (
   
  <View style={styles.item}>
    <Text style={styles.titlefl}>Name : {item.name}</Text>
    <Text style={styles.timefl}>Status : {item.category}</Text>
    <View style={styles.iconContainer}>
      <TouchableOpacity onPress={() =>console.log (item.id)}>
      <MaterialCommunityIcons name='cart-check' size={24} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log (item.id)}>
      <MaterialCommunityIcons name='trash-can-outline' size={24}/>
      </TouchableOpacity>
    </View>   
  </View>
);

function CartCard() {
const [cart, setCart] = useState([]);
  return (
      <View>
      <FlatList
        data={cart}
        renderItem={({item}) => <CartItem item={item} /> }
  
        keyExtractor={item => item.id}
      
      />
      <Button title='Click' onPress={()=> setCart([{id:1,name:'sfsf',category:'sfsf'}])}/>
      </View>
  );
}
const styles = StyleSheet.create({
  card: {
    width:'100%'
  },

  container: {
    paddingTop:20
  },

  iconContainer: {
    flexDirection:'row',
    justifyContent:'space-around',
    paddingTop: 10
  },

  subtextfl: {
    fontSize: 20,
  },
  
  titlefl: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  
  timefl: {
    fontSize: 20,
  },
})

export default CartCard;