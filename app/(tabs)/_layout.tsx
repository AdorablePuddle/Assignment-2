import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from "expo-router";

export default function TabLayout() {
	return (
		<Tabs screenOptions={{ tabBarActiveTintColor: "pink"}}>
			<Tabs.Screen 
				name = "index"
				options = {{
					title: "Task List",
					tabBarIcon: ({ color }) => <Entypo name="list" size={20} color={color}/>,
					headerShown: false
				}}
			/>
			<Tabs.Screen 
				name = "tasksetup"
				options = {{
					title: "Make a Task",
					tabBarIcon: ({ color }) => <MaterialIcons name="event-note" size={20} color={color}/>,
					headerShown: false
				}}
			/>
			<Tabs.Screen 
				name = "taskshop"
				options = {{
					title: "Shop",
					tabBarIcon: ({ color }) => <Entypo name="shop" size={20} color={color}/>,
					headerShown: false
				}}
			/>
			<Tabs.Screen 
				name = "petscreen"
				options = {{
					title: "Pets",
					tabBarIcon: ({ color }) => <AntDesign name="heart" size={20} color={color}/>,
					headerShown: false
				}}
			/>
		</Tabs>
	);
}