import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Select, VStack, CheckIcon, NativeBaseProvider } from "native-base";
import { Searchbar } from "react-native-paper";
import { useDispatch } from "react-redux";
import { addToCart, deleteFromCart } from "../redux/stateArray";

function PetCard2() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };
  const dispatch = useDispatch();

  const Filter = () => {
    const handleFilter = (itemValue) => {
      setService(itemValue);
      console.log(
        "https://petstore.swagger.io/v2/pet/findByStatus?status=" + itemValue
      );

      fetch(
        "https://petstore.swagger.io/v2/pet/findByStatus?status=" + itemValue,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((jsonData) => {
          // handle success
          setData(jsonData);
        })
        .catch((error) => {
          // handle error
          console.error(error);
        });
    };

    let [service, setService] = React.useState("");
    return (
      <VStack alignItems="center" space={4}>
        <Select
          placeholderTextColor={"black"}
          shadow={2}
          selectedValue={service}
          minWidth="200"
          accessibilityLabel="Filter"
          placeholder="Filter"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" />,
          }}
          _light={{
            bg: "coolGray.100",
            _hover: {
              bg: "coolGray.200",
            },
            _focus: {
              bg: "coolGray.200:alpha.70",
            },
          }}
          _dark={{
            bg: "coolGray.800",
            _hover: {
              bg: "coolGray.900",
            },
            _focus: {
              bg: "coolGray.900:alpha.70",
            },
          }}
          onValueChange={(itemValue) => handleFilter(itemValue)}
        >
          <Select.Item shadow={2} label="Available" value="available" />
          <Select.Item shadow={2} label="Sold" value="sold" />
          <Select.Item shadow={2} label="Pending" value="pending" />
        </Select>
      </VStack>
    );
  };

  const CartItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.titlefl}>Name : {item.name}</Text>
      <Text style={styles.timefl}>Status : {item.status}</Text>
      <Text style={styles.subtextfl}>See More</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => dispatch(addToCart(item))}>
          <MaterialCommunityIcons name="cart" size={24} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch(deleteFromCart(item.id))}>
          <MaterialCommunityIcons name="trash-can-outline" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );

  useEffect(() => {
    console.log("test");
    fetch(
      "https://petstore.swagger.io/v2/pet/findByStatus?status=pending,sold,available",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((jsonData) => {
        // handle success
        setData(jsonData);
      })
      .catch((error) => {
        // handle error
        console.error(error);
      });
  }, [count]);

  const handleSearch = () => {
    const results = data.filter((item) => {
      if (item.name !== undefined) {
        return item.name.toLowerCase().includes(searchQuery.toLowerCase());
      }
      return null;
    });
    setData(results);
  };

  const reloadApp = () => {
    setCount(count + 1);
  };

  const ListEmpty = () => {
    return (
      <View style={styles.noPets}>
        <Text style={styles.petText}>No Pets Available</Text>
        <TouchableOpacity onPress={reloadApp}>
          <Text style={styles.reload}> Reload Feed</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <NativeBaseProvider>
      <View style={styles.topContainer}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          onSubmitEditing={handleSearch}
          onIconPress={handleSearch}
          onClearIconPress={reloadApp}
        />
        <Filter />
      </View>
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => <CartItem item={item} />}
          keyExtractor={() => Math.random()}
          ListEmptyComponent={() => <ListEmpty />}
        />
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
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

export default PetCard2;
