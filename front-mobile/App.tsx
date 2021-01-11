import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/Header';
import { useFonts, OpenSans_400Regular, OpenSans_700Bold} from '@expo-google-fonts/open-sans';
import AppLoading from "expo-app-loading"
import Routes from './src/Routes';
import "intl"
import "intl/locale-data/jsonp/en"

export default function App() {

  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold
  });

  
  if (!fontsLoaded) {
    return <AppLoading />;
  }


  return (
    <View style={styles.container}>
      <Routes/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
