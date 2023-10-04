import { StyleSheet } from "react-native";
import WebView from "react-native-webview";
import Constants from "expo-constants";

export default function App() {
  return (
    <WebView style={styles.container} source={{ uri: "https://expo.dev" }} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
