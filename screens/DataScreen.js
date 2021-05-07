import React, { useState } from "react";
import { View } from "react-native";
import axios from "axios";
import { DataTable } from 'react-native-paper';


const SplashScreen = ({navigation}) => {
  const [resultData, setData] = useState([]);
React.useEffect(() => {
    async function fetchData() {
      axios
        .get(`https://covid19.th-stat.com/api/open/timeline`)
        .then((res) => {
          setData(res.data.Data)
        });
    }
    fetchData();
}, [navigation,setData]);

  return (
    <>
      <View style={{ marginLeft: 50, zIndex: 999, marginTop: -50 }}>
      <DataTable>
      <DataTable.Header>
        <DataTable.Title>Date</DataTable.Title>
        <DataTable.Title>NewConfirmed</DataTable.Title>
        <DataTable.Title>NewRecovered</DataTable.Title>
        <DataTable.Title>NewHospitalized</DataTable.Title>
        <DataTable.Title>NewDeaths</DataTable.Title>
        <DataTable.Title>Confirmed</DataTable.Title>
        <DataTable.Title>Recovered</DataTable.Title>
        <DataTable.Title>Hospitalized</DataTable.Title>
        <DataTable.Title>Deaths</DataTable.Title>
      </DataTable.Header>
      {resultData.map((item,key)=>{
        <DataTable.Row>
            <DataTable.Cell>{item.Date}</DataTable.Cell>
            <DataTable.Cell numeric>{item.NewConfirmed}</DataTable.Cell>
            <DataTable.Cell numeric>{item.NewRecovered}</DataTable.Cell>
            <DataTable.Cell numeric>{item.NewHospitalized}</DataTable.Cell>
            <DataTable.Cell numeric>{item.NewDeaths}</DataTable.Cell>
            <DataTable.Cell numeric>{item.Confirmed}</DataTable.Cell>
            <DataTable.Cell numeric>{item.Recovered}</DataTable.Cell>
            <DataTable.Cell numeric>{item.Hospitalized}</DataTable.Cell>
            <DataTable.Cell numeric>{item.Deaths}</DataTable.Cell>
        </DataTable.Row>
      })}

      </DataTable>
      <Button
        title="Go to CPU_RAM"
        onPress={() => navigation.navigate('SplashScreen2')}
      >CPU_RAM</Button>
      </View>
    </>
  );
};

export default SplashScreen;
