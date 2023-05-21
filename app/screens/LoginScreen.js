import React, { useState } from "react";

import { Formik } from "formik";
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(4, "Password is too short").required("Required"),
});

function LoginScreen({ navigation }) {
  const [loading, setLoading] = useState(false);

  const handleLogin = async (values) => {
    setLoading(true);
    console.log(values);
    try {
      const response = await fetch(
        "https://petstore.swagger.io/v2/user/login?username=" +
          values.email +
          "&password=" +
          values.password,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      data.code === 200
        ? navigation.navigate("MainHome")
        : console.log(data.code);
      // process data
    } catch (error) {
      console.log(error);
      // handle error
    } finally {
      setLoading(false);
    }
  };

  const ActivityIndicators = () => (
    <View style={styles.containerAct}>
      <ActivityIndicator size="large" color="dodgerblue" animating={loading} />
    </View>
  );

  return (
    <ImageBackground
      source={require("../assets/pets.jpg")}
      style={styles.bgImage}
      resizeMode="cover"
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Pet Store</Text>
      </View>
      <Formik
        initialValues={initialValues}
        onSubmit={handleLogin}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View>
            <TextInput
              placeholder="Email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              autoCapitalize="none"
              keyboardType="email-address"
              style={styles.emailInput}
              placeholderTextColor={"white"}
            />
            {errors.email && (
              <Text style={{ color: "yellow" }}>{errors.email}</Text>
            )}

            <TextInput
              placeholder="Password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              secureTextEntry
              style={styles.emailInput}
              placeholderTextColor={"white"}
            />
            {errors.password && (
              <Text style={{ color: "yellow" }}>{errors.password}</Text>
            )}
            <View style={styles.btContainer}>
              <Button onPress={handleSubmit} title="Login" />
            </View>
            <View>
              <ActivityIndicators />
            </View>
          </View>
        )}
      </Formik>
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <View style={styles.createUser}>
          <Text style={styles.textUser}> Create New User</Text>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  btContainer: {
    paddingTop: 15,
    paddingBottom: 15,
  },

  createUser: {
    paddingTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  emailInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "white",
    borderWidth: 2,
    color: "white",
  },
  textUser: {
    fontSize: 18,
    fontWeight: "900",
    color: "white",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "dodgerblue",
  },
  titleContainer: {
    alignItems: "center",
    position: "relative",
    bottom: 150,
  },
});

export default LoginScreen;
