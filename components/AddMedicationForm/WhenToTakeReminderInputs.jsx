import {
  View,
  TouchableOpacity,
  Text,
  Modal,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Picker } from "@react-native-picker/picker";
import Colors from "../../constant/Colors";
import { WhenToTake } from "../../constant/Options";
import DateTimePickerModal from "../DateTimePickerModal";

export default function WhenToTakeReminderInputs({
  when,
  onWhenPress,
  showPicker,
  setShowPicker,
  onWhenChange,
  reminder,
  onReminderPress,
  showReminder,
  setShowReminder,
  onReminderChange,
  tempReminderTime,
  getValidDate,
  FormatTime,
  loading,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>When to Take</Text>
        <TouchableOpacity style={styles.input} onPress={onWhenPress}>
          <Text style={styles.textInput}>{when || "Before Lunch"}</Text>
          <Ionicons
            name="chevron-down-outline"
            size={20}
            color={Colors.GRAY}
            style={styles.dropdownIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Picker Modal */}
      <Modal visible={showPicker} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.pickerContainer}>
            <View style={styles.pickerHeader}>
              <TouchableOpacity onPress={() => setShowPicker(false)}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setShowPicker(false)}>
                <Text style={styles.doneButtonText}>Done</Text>
              </TouchableOpacity>
            </View>
            <Picker
              selectedValue={when}
              onValueChange={onWhenChange}
              style={styles.picker}
            >
              {WhenToTake.map((item, index) => (
                <Picker.Item key={index} label={item} value={item} />
              ))}
            </Picker>
          </View>
        </View>
      </Modal>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Reminder Time</Text>
        <TouchableOpacity style={styles.input} onPress={onReminderPress}>
          <Text style={styles.dateText}>
            {reminder ? reminder : "Set Time"}
          </Text>
          <Ionicons
            name="chevron-down-outline"
            size={20}
            color={Colors.GRAY}
            style={styles.dropdownIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Time Picker Modal */}
      {showReminder &&
        DateTimePickerModal(
          "time",
          getValidDate(tempReminderTime),
          (event, date) => {
            onReminderChange(date);
          },
          () => setShowReminder(false),
        )}
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
    fontSize: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.LIGHT_GRAY_BORDER,
    backgroundColor: "#fff",
    paddingLeft: 16,
  },
  icon: {
    paddingRight: 10,
    borderRightWidth: 1,
    borderColor: Colors.GRAY,
    color: Colors.PRIMARY,
  },
  textInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  dropdownIcon: {
    marginLeft: 5,
    marginRight: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  pickerContainer: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 15,
  },
  pickerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.LIGHT_GRAY_BORDER,
  },
  doneButtonText: {
    color: Colors.PRIMARY,
    fontSize: 16,
    fontWeight: "bold",
  },
  cancelButtonText: {
    color: Colors.GRAY,
    fontSize: 16,
  },
  picker: {
    width: "100%",
  },
  dateInputGroup: {
    flexDirection: "row",
    gap: 10,
  },
  dateText: {
    fontSize: 16,
    marginLeft: 10,
    flex: 1,
  },
});
