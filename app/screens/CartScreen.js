import React, { useState } from "react";
import { ScrollView } from "react-native";

import CartCard from "../components/CartCard";

function CartScreen() {
  return (
    <ScrollView>
      <CartCard />
    </ScrollView>
  );
}

export default CartScreen;
