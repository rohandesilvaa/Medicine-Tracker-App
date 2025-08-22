import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { TypeList } from "../../constant/Options";
import Colors from "../../constant/Colors";

export default function TypeListInput({ selectedType, onSelectType }) {
  return (
    <View>
      <Text style={styles.titleType}>Choose the type of medicine</Text>
      <FlatList
        data={TypeList}
        style={styles.flatList}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              style={[
                styles.typeInputGroup,
                { marginRight: 10 },
                {
                  backgroundColor:
                    item.name === selectedType?.name
                      ? Colors.PRIMARY
                      : "#4E73F81A",
                },
              ]}
              onPress={() => onSelectType(item)}
            >
              <Image style={styles.medicineIcon} source={item?.icon} />
            </TouchableOpacity>
            <Text style={styles.typeText}>{item?.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titleType: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: "600",
    color: "#4A4A4A",
  },
  flatList: {
    marginTop: 5,
  },
  typeInputGroup: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 70,
    marginTop: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.LIGHT_GRAY_BORDER,
    backgroundColor: "white",
  },
  medicineIcon: {
    width: 35,
    height: 35,
  },
  typeText: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 5,
  },
});
