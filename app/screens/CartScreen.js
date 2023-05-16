import React, {useState} from "react";

import { Searchbar } from 'react-native-paper';
import CartCard from "../components/CartCard";
import { Button } from "react-native";

function CartScreen({navigation}) {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);

    return (
      <>
      <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
    <CartCard />
    <Button title="Cart" onPress={() => navigation.navigate("MainHome")} />
    </>
    );
}

export default CartScreen;