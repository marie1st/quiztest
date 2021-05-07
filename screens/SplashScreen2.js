import React, { useState } from "react";
import { View } from "react-native";
import * as Device from 'expo-device';

const SplashScreen2 = () => {
const CPU_PER = Device.supportedCpuArchitectures;
const RAM_QUAN = Device.totalMemory;
  return (
    <>
      <View style={{ marginLeft: 50, zIndex: 999, marginTop: -50 }}>
      <DataTable>
      <DataTable.Header>
        <DataTable.Title>CPU</DataTable.Title>
        <DataTable.Title >RAM</DataTable.Title>
      </DataTable.Header>
      <DataTable.Row>
        <DataTable.Cell numeric>{CPU_PER}</DataTable.Cell>
        <DataTable.Cell numeric>{RAM_QUAN}</DataTable.Cell>
      </DataTable.Row>
      </DataTable>
      </View>
    </>
  );
};

export default SplashScreen2;
