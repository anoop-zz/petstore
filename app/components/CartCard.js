import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { deleteFromCart } from "../redux/stateArray";
import { Searchbar } from "react-native-paper";

function CartCard() {
  const stateData = useSelector((state) => state.array.cart);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  const [count, setCount] = useState(0);

  const handleSearch = () => {
    const results = data.filter((item) => {
      if (item.name !== undefined) {
        return item.name.toLowerCase().includes(searchQuery.toLowerCase());
      }
      return null;
    });
    setData(results);
  };

  useEffect(() => {
    setData(stateData);
  }, [stateData, count]);
  const reloadApp = () => {
    setCount(count + 1);
    console.log(count);
  };

  const CartItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.titlefl}>Name : {item.name}</Text>
      <Text style={styles.timefl}>Status : {item.status}</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => console.log(item.id)}>
          <MaterialCommunityIcons name="cart-check" size={24} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch(deleteFromCart(item.id))}>
          <MaterialCommunityIcons name="trash-can-outline" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
  const ListEmpty = () => {
    return (
      <View style={styles.noPets}>
        <Text style={styles.petText}>No Pets Found</Text>
        <TouchableOpacity onPress={reloadApp}>
          <Text style={styles.reload}> Reload Cart</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        onSubmitEditing={handleSearch}
        onIconPress={handleSearch}
        onClearIconPress={reloadApp}
      />
      <FlatList
        data={data}
        renderItem={({ item }) => <CartItem item={item} />}
        keyExtractor={() => Math.random()}
        ListEmptyComponent={<ListEmpty />}
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
  noPets: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100,
  },
  petText: {
    fontSize: 22,
    fontWeight: "bold",
  },

  reload: {
    fontSize: 22,
    fontWeight: "bold",
    color: "dodgerblue",
    paddingTop: 50,
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
