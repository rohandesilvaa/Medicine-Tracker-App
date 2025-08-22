import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../../constant/Colors";

export default function StartEndDateInputs({
  startDate,
  endDate,
  onStartPress,
  onEndPress,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Time Period</Text>
        <TouchableOpacity style={styles.input} onPress={onStartPress}>
          <Text style={styles.dateText}>
            {startDate ? startDate : "Start Date"}
          </Text>
          <Ionicons
            name="chevron-down-outline"
            size={20}
            color={Colors.GRAY}
            style={styles.dropdownIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}></Text>
        <TouchableOpacity style={styles.input} onPress={onEndPress}>
          <Text style={styles.dateText}>{endDate ? endDate : "End Date"}</Text>
          <Ionicons
            name="chevron-down-outline"
            size={20}
            color={Colors.GRAY}
            style={styles.dropdownIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: "row",
    gap: 10,
  },
  inputGroup: {
    flexDirection: "column",
    width: "50%",
  },
  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#4A4A4A",
    marginBottom: 6,
  },
  input: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.LIGHT_GRAY_BORDER,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    fontSize: 16,
  },
  icon: {
    paddingRight: 10,
    borderRightWidth: 1,
    borderColor: Colors.GRAY,
    color: Colors.PRIMARY,
  },
  dateText: {
    fontSize: 16,
    marginLeft: 10,
    flex: 1,
  },
});
