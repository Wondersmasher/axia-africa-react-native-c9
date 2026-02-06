import { CustomInput } from "@/components";
import { inputSchema, TInputSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function ReactHookForm() {
  const { control, handleSubmit, setValue, reset, watch } =
    useForm<TInputSchema>({
      defaultValues: {
        email: "",
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
      },
      resolver: zodResolver(inputSchema),
    });

  const gender = watch("gender");

  const onSubmit = ({ email, firstName, lastName }: TInputSchema) => {
    console.log(
      `My email is: ${email}, and my full name is: ${firstName} ${lastName}`,
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.viewStyle}>
        <Text style={styles.textElement}>React Hook Form With Zod</Text>
        <CustomInput
          control={control}
          name='email'
          placeholder='hello@gmail.com'
          label='Email'
        />
        <CustomInput
          control={control}
          name='firstName'
          placeholder='John'
          label='First name'
        />
        <CustomInput
          control={control}
          name='age'
          placeholder='1000000'
          label='Age'
        />
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            gap: 20,
          }}
        >
          <Pressable
            style={[
              styles.button,
              {
                flex: 1,
              },
            ]}
            onPress={() => setValue("gender", "Male")}
          >
            <Text style={[styles.buttonText, { textAlign: "center" }]}>
              Male
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.button,
              {
                flex: 1,
                width: "100%",
              },
            ]}
            onPress={() => setValue("gender", "Female")}
          >
            <Text style={[styles.buttonText, { textAlign: "center" }]}>
              Female
            </Text>
          </Pressable>
          <Text>{gender}</Text>
        </View>

        <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>Console.log()</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => reset()}>
          <Text style={styles.buttonText}>Reset</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

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
    fontSize: 24,
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
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    textAlign: "left",
  },
});
