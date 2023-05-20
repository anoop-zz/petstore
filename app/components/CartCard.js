import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

const CartItem = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.titlefl}>Name : {item.name}</Text>
    <Text style={styles.timefl}>Status : {item.status}</Text>
    <View style={styles.iconContainer}>
      <TouchableOpacity onPress={() => console.log(item.id)}>
        <MaterialCommunityIcons name="cart-check" size={24} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log(item.id)}>
        <MaterialCommunityIcons name="trash-can-outline" size={24} />
      </TouchableOpacity>
    </View>
  </View>
);

function CartCard() {
  const stateData = useSelector((state) => state.array.cart);

  return (
    <View>
      <FlatList
        data={stateData}
        renderItem={({ item }) => <CartItem item={item} />}
        keyExtractor={() => Math.random()}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    width: "100%",
  },

  container: {
    paddingTop: 20,
  },

  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 10,
  },
  item: {
    backgroundColor: "#a9a9a9",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  subtextfl: {
    fontSize: 20,
  },

  titlefl: {
    fontSize: 22,
    fontWeight: "bold",
  },

  timefl: {
    fontSize: 20,
  },
});

export default CartCard;
