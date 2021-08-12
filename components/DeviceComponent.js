import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as DeviceInfo from "expo-device";

class Device extends Component {
  static navigationOptions = {
    title: "Device Info",
  };

  render() {
    return (
      <View style={styles.placement}>
        <Text>
          <Text style={styles.bold}>MANUFACTURER: </Text>
          {DeviceInfo.manufacturer}
        </Text>
        <Text>
          <Text style={styles.bold}>MODEL: </Text>
          {DeviceInfo.modelName}
        </Text>
        <Text>
          <Text style={styles.bold}>OS: </Text>
          {DeviceInfo.osVersion}
        </Text>
        <Text>
          <Text style={styles.bold}>DEVICE NAME: </Text>
          {DeviceInfo.deviceName}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: "bold",
  },
  placement: {
    margin: 20,
  },
});

export default Device;
