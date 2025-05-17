import { ThemedText } from "@/component/ThemedText";
import { styles } from "@/component/ui/Styles";
import { UserData } from "@/data/UserData";
import { Image } from "expo-image";
import { View } from "react-native";
var testImages = [
    require("@/assets/images/bg/test-bg.png"),
    require("@/assets/images/bg/test-bg-2.png")
]

export default function CoinTab() {
    return (
        <View style={styles.titleContainer}>
            <Image style={[styles.titleImage, {resizeMode: "cover"}]} source={testImages[0]}/>
            <ThemedText type="title" style={styles.titleText}>
                Task Coin: {UserData.coin}
            </ThemedText>
        </View>
    );
}