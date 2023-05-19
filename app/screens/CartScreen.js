import React, { useState } from "react";

import { Searchbar } from "react-native-paper";

import CartCard from "../components/CartCard";

function CartScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <CartCard />
    </>
  );
}

export default CartScreen;
