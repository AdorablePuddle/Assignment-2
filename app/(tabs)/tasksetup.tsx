import { styles } from "@/component/ui/Styles";
import { Dimensions, View } from "react-native";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
var { width, height } = Dimensions.get("window");
var testingValue : number = 10;

export default function TaskSetup() {
    return (
        <GestureHandlerRootView>
            <SafeAreaView style={styles.container} >
                <View>
                    
                </View>
                <ScrollView>

                </ScrollView>
            </SafeAreaView>
        </GestureHandlerRootView>
    );
}