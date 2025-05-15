import { Text, View } from "react-native";
import CoinTab from "@/component/CoinTab";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CoinTab />
    </View>
  );
}
