import { StyleSheet } from "react-native";
import { COLORS, SIZES, SHADOW } from "../constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    marginTop: 40,
  },
  textBoxWrapper: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: SIZES.padding,
  },
  input: {
    borderWidth: 3,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 18,
  },
  addButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  btn: {
    ...SHADOW,
    backgroundColor: COLORS.accent,
    height: 42,
    width: 42,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
