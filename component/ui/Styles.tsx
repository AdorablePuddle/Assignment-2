import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 0,
		flexDirection: "column",
		backgroundColor: "#ffddfc"
	},
	titleContainer: {
		flex: 0,
		backgroundColor: "#ffddfc",
        alignContent: "center",
	},
    titleImage: {
        borderWidth: 1,
        borderColor: "#ffffff",
        height: 75,
    },
	titleText: {
		color: "#aeaeae",
		textAlign: "center",
        textAlignVertical: "center",
		borderColor: "#dfdfdf",
		borderWidth: 5,
		height: 75,
	}
});