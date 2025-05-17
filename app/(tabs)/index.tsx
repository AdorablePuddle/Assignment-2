import CoinTab from "@/component/CoinTab";
import TaskTab from "@/component/tasklist/TaskTab";
import { styles } from "@/component/ui/Styles";
import { loadData } from "@/data/UserData";
import { Dimensions } from "react-native";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
var { width, height } = Dimensions.get("window");

export default function Index() {
	loadData();
	return (
		<GestureHandlerRootView>
			<SafeAreaView style={styles.container} >
				<CoinTab />
				<ScrollView>
					<TaskTab />
				</ScrollView>
			</SafeAreaView>
		</GestureHandlerRootView>
	);
}