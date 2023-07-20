import { StyleSheet, Text, View } from "react-native";
export const ActivityScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Activity Screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
  },
});
