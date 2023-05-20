import React, { useState } from "react";
import { ScrollView } from "react-native";

import { Searchbar } from "react-native-paper";

import CartCard from "../components/CartCard";

function CartScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <ScrollView>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <CartCard />
    </ScrollView>
  );
}

export default CartScreen;
