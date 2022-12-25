/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import COLORS from './theme';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  
  const backgroundStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.background,
    color : COLORS.background,
  };

  var text = "Alfurnative";

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: COLORS.Background,
            width: '100%',
            height: '100%',
          }}>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: COLORS.accent
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: COLORS.text,
  }
});

export default App;
