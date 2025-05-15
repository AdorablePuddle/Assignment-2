import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
	return (
		<SafeAreaView style={styles.container}>
			<Link href = "/tasksetup" style={styles.button}>
				Create New Task
			</Link>
			<Link href = "/taskshop" style={styles.button}>
				Shop
			</Link>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#ffddfc"
	},
	button: {
		borderColor: "#ffffff",
		borderWidth: 2,
		backgroundColor: "#ffffff",
		textAlign: "center",
		fontSize: 18,
	},
});