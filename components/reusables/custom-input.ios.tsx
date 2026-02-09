import {
  Control,
  Controller,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form";
import {
  ColorValue,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

type CustomInputProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  placeholder: string;
  rules?: RegisterOptions<T, Path<T>>;
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  errorText?: StyleProp<TextStyle>;
  textInputWithErrorContainer?: StyleProp<ViewStyle>;
  textInputContainer?: StyleProp<ViewStyle>;
  placeholderTextColor?: ColorValue;
};
function CustomInput<T extends FieldValues>({
  control,
  name,
  placeholder,
  rules,
  label,
  labelStyle,
  textInputWithErrorContainer,
  textInputContainer,
  errorText,
  placeholderTextColor = "white",
}: CustomInputProps<T>) {
  return (
    <Controller
      control={control}
      rules={rules}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <View
          style={[
            styles.textInputWithErrorContainer,
            textInputWithErrorContainer,
          ]}
        >
          {label && (
            <Text style={[styles.labelStyle, labelStyle]}>{label}</Text>
          )}
          <View style={[styles.textInputContainer, textInputContainer]}>
            <TextInput
              placeholder={placeholder}
              placeholderTextColor={placeholderTextColor}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </View>
          {error && (
            <Text style={[styles.errorText, errorText]}>{error.message}</Text>
          )}
        </View>
      )}
      name={name}
    />
  );
}
export { CustomInput };

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  viewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    gap: 20,
  },
  textElement: {
    fontSize: 30,
    fontWeight: "400",
    color: "red",
    alignItems: "center",
  },
  textInputContainer: {
    padding: 20,
    width: "100%",
    borderRadius: 10,
    backgroundColor: "lightgray",
    flex: 1,
  },
  textInputWithErrorContainer: {
    gap: 5,
    flex: 1,
    width: "100%",
  },
  errorText: {
    color: "red",
    fontSize: 10,
  },
  button: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    textAlign: "left",
  },
  labelStyle: { color: "black" },
});
