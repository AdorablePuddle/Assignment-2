import { Stack } from "expo-router";

export default function RootLayout() {
  	return (
		<Stack>
			<Stack.Screen name="index" options = {{title: "Task List"}} />
			<Stack.Screen name="tasksetup" options = {{title: "Create New Task"}} />
			<Stack.Screen name="taskshop" options = {{title: "Shop"}} />
			<Stack.Screen name="petscreen" options = {{title: "Pet"}} />
		</Stack>
  	);
}
