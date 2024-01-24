import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image></Image>
            </View>
            {/* <Text style={{ color: "#fff"}}> Hello world </Text> */}
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#25292e",
        alignItems: "center",
        justifyContent: "center",
    },
});
