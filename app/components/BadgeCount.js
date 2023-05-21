import React from "react";

import { Badge, VStack, Box, NativeBaseProvider } from "native-base";
import { useSelector } from "react-redux";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Example({ color, size }) {
  const stateArray = useSelector((state) => state.array.cart.length);
  return (
    <Box alignItems="flex-start">
      <VStack>
        <Badge // bg="red.400"
          colorScheme="danger"
          rounded="full"
          mb={-4}
          mr={-4}
          zIndex={1}
          variant="solid"
          alignSelf="flex-end"
          _text={{
            fontSize: 8,
          }}
        >
          {stateArray}
        </Badge>
        <MaterialCommunityIcons name="cart" color={color} size={size} />
      </VStack>
    </Box>
  );
}
export default function Badgecount({ color, size }) {
  return (
    <NativeBaseProvider>
      <Example color={color} size={size} />
    </NativeBaseProvider>
  );
}
