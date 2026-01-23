import { CustomInput } from "@/components/reusables";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import * as z from "zod";
type Inputs = {
  email: string;
  firstName: string;
  lastName: string;
  age: string;
  gender: string;
};
const inputSchema = z.object({
  email: z.email("Invalid email provided."),
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters!")
    .max(20, "No name can be more than 20 characters. Check again!!!"),
  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters!")
    .max(15, "Your last name cannot be more than 15 characters"),
  age: z.string().min(1, "Invalid age"),
  gender: z.string(),
});

// const InputSchema = z.input<typeof schema>, any, z.output<typeof schema>

export default function ReactHookForm() {
  const email = "";
  const firstName = "";
  const lastName = "";
  const { control, handleSubmit, setValue, reset, watch } = useForm<
    z.input<typeof inputSchema>,
    any,
    z.output<typeof inputSchema>
  >({
    defaultValues: {
      email, // =>  email: email
      firstName, // => firstName:firstName
      lastName, // => lastName:lastName
      age: "",
      gender: "",
    },
    resolver: zodResolver(inputSchema),
  });

  const gender = watch("gender");

  const onSubmit = ({ email, firstName, lastName }: Inputs) => {
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
