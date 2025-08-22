import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from "react-native";
import Colors from "../../constant/Colors";
import { Picker } from "@react-native-picker/picker";
import { DoseOption } from "../../constant/Options";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function MediNameDoseInputs({
  values,
  onChange,
  showDosePicker,
  setShowDosePicker,
  dose,
  onDoseChange,
}) {
  return (
    <View style={styles.container}>
      <View style={[styles.inputGroup, { width: "70%" }]}>
        <Text style={styles.label}>Medicine Name</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. Paracetamol"
          value={values?.name}
          onChangeText={(value) => onChange("name", value)}
        />
      </View>

      <View style={[styles.inputGroup, { width: "30%" }]}>
        <Text style={styles.label}>Dose</Text>
        <TouchableOpacity
          style={[
            styles.input,
            {
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
            },
          ]}
          onPress={() => setShowDosePicker(true)}
        >
          <Text style={styles.textInput}>{dose || "2"}</Text>
          <Ionicons
            name="chevron-down-outline"
            size={20}
            color={Colors.GRAY}
            style={styles.dropdownIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Dose Picker Modal */}
      <Modal visible={showDosePicker} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.pickerContainer}>
            <View style={styles.pickerHeader}>
              <TouchableOpacity onPress={() => setShowDosePicker(false)}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setShowDosePicker(false)}>
                <Text style={styles.doneButtonText}>Done</Text>
              </TouchableOpacity>
            </View>
            <Picker
              selectedValue={dose}
              onValueChange={onDoseChange}
              style={styles.picker}
            >
              {DoseOption.map((item, index) => (
                <Picker.Item
                  key={index}
                  label={item.toString()}
                  value={item.toString()}
                />
              ))}
            </Picker>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flexDirection: "row",
    gap: 10,
  },
  inputGroup: {},
  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#4A4A4A",
    marginBottom: 6,
  },
  input: {
    height: 50,
    fontSize: 16,
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.LIGHT_GRAY_BORDER,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
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
});
