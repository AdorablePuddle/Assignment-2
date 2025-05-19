import CoinTab from "@/component/CoinTab";
import { styles } from "@/component/ui/Styles";
import { Dimensions } from "react-native";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
var { width, height } = Dimensions.get("window");

export default function TaskShop() {
    return (
        <GestureHandlerRootView>
            <SafeAreaView style={styles.container} >
                <CoinTab />
                <ScrollView>
                    
                </ScrollView>
            </SafeAreaView>
        </GestureHandlerRootView>
    );
}