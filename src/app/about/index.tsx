import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const index = () => {
  return (
    <View style={styles.granary}>
      <Text style={styles.field}>This is my life</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    granary: {
     flex: 1,
     alignItems: "center",
     justifyContent: "center",
     backgroundColor: "grey"
    },
    field: {
        fontSize: 40,

    }
})
export default index