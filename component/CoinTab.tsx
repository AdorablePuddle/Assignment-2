import { ThemedText } from "@/component/ThemedText";
import { styles } from "@/component/ui/Styles";
import { Image } from "expo-image";
import { View } from "react-native";
var testingValue : number = 10;
const imageAssetPath = require("@/assets/images/bg/test_bg.png");

export default function CoinTab() {
    return (
        <View style={styles.titleContainer}>
            <Image style={[styles.titleImage, {resizeMode: "cover"}]} source={imageAssetPath}/>
            <ThemedText type="title" style={styles.titleText}>
                Coin Counter: {testingValue}
            </ThemedText>
        </View>
    );
}