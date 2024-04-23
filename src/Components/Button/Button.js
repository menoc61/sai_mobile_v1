import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import Colors from "../../Constants/Color";

const Button = (props) => {
  const filledBgColor = props.color || Colors.primary;
  const outlinedColor = Colors.white;
  const bgColor = props.filled ? filledBgColor : outlinedColor;
  const textColor = props.filed ? Colors.white : Colors.primary;
  return (
    <TouchableOpacity
      style={{
        top:50,
        ...styles.button,
        ...{ backgroundColor: bgColor },
        ...props.style,
      }}
      onPress={props.onPress}
    >
      <Text
        style={{
          fontSize: 18,
          ...{ color: textColor },
        }}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    paddingBottom: 16,
    paddingVertical: 10,
    borderColor: Colors.primary,
    borderWidth: 2,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Button;