import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import Asimage from "./assets/as-image.svg";
import Asdrafts from "./assets/as-drafts.svg";
import Asrejectedclaims from "./assets/as-rejectedclaims";
import Asclaimhist from "./assets/as-claimhist";
import Asreminder from "./assets/as-reminder";
import IconBadge from "react-native-icon-badge";

let numNoti = 0;
export default function App() {
  return (
    <View style={styles.container}>
      <Feather name="x-circle" />
      <AntDesign name="exclamationcircleo" />
      <MaterialIcons name="pending-actions" />
      <MaterialIcons name="dashboard" />
      <AntDesign name="plus" />
      <MaterialCommunityIcons name="text-box-check-outline" />
      <Octicons name="credit-card" />
      <Feather name="x" />
      <MaterialIcons name="bolt" />
      <MaterialCommunityIcons name="line-scan" />
      <MaterialIcons name="arrow-forward" />
      <MaterialCommunityIcons name="camera-retake-outline" />
      <MaterialIcons name="arrow-back-ios" />
      <MaterialCommunityIcons name="checkbox-marked-circle-outline" />
      <AntDesign name="questioncircleo" />
      <Asimage fill="black" />
      <Asdrafts fill="black" />
      <Asrejectedclaims fill="black" />
      <Asclaimhist fill="black" />
      <Asreminder fill="black" />
      <IconBadge
        MainElement={<MaterialIcons name="notifications" size={60} />}
        BadgeElement={
          <Text style={{ color: "#FFFFFF", fontSize: 11 }}>{numNoti}</Text>
        }
        IconBadgeStyle={{
          width: 25,
          width: 25,
          borderWidth: 4,
          height: 25,
          borderColor: "#b08502",
        }}
        Hidden={numNoti == 0}
      />
      <IconBadge
        MainElement={<MaterialIcons name="notifications" size={60} />}
        BadgeElement={
          <Text style={{ color: "#FFFFFF", fontSize: 11 }}>13</Text>
        }
        IconBadgeStyle={{
          width: 25,
          borderWidth: 4,
          height: 25,
          borderColor: "#b08502",
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b08502",
    alignItems: "center",
    justifyContent: "center",
  },
});
