import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

import ProfileItem from "../components/ProfileItem";

function ProfileScreen({ navigation }) {
  const handleLogout = () =>
    fetch("https://petstore.swagger.io/v2/user/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // handle success
        data.code === 200
          ? console.log("success") & navigation.navigate("LoginScreen")
          : console.log("failed");
      })
      .catch((error) => {
        // handle error
        console.error(error);
      });

  const [item, setData] = useState([]);

  useEffect(() => {
    fetch("https://petstore.swagger.io/v2/user/string", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((jsonData) => {
        // handle success
        setData(jsonData);
      })
      .catch((error) => {
        // handle error
        console.error(error);
      });
  }, []);

  return (
    <View style={styles.page}>
      <ProfileItem item={item} />
      <View style={styles.logout}>
        <Button icon="logout" mode="contained" onPress={() => handleLogout()}>
          Log Out
        </Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  logout: {
    flex: 1,
    justifyContent: "flex-end",
  },
  page: {
    flex: 1,
  },
});
export default ProfileScreen;
