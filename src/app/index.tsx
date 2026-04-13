import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.library}>
      <Text style={styles.Text}>Kurt Vince A. Makabenta, 2ndyrIT2A</Text>
      <Link href={"/about"}>About page</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  library: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  Text: {
    color: "white",
    fontSize: 30,
  }
});