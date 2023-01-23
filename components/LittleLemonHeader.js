import { StyleSheet, Text, View } from 'react-native';
import React from 'react'

export default function LittleLemonHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>LittleLemonHeader</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 0.2
    },
    headerText: {
        padding: 40,
        fontSize: 30,
        color: 'black'
    }
  });
  