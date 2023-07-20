import { StyleSheet, Text, View } from "react-native";

export const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard Screen</Text>
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
