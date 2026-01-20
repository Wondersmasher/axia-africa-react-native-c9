import { Controller, useForm } from "react-hook-form";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

type Inputs = {
  email: string;
  firstName: string;
  lastName: string;
  age: string;
};
export default function ReactHookForm() {
  const email = "axiaafrica@gmail.com";
  const firstName = "Axia";
  const lastName = "Africa";
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      email, // =>  email: email
      firstName, // => firstName:firstName
      lastName, // => lastName:lastName
      age: "",
    },
  });

  //   console.log(errors, "errors from handleSubmit");
  const onSubmit = ({ email, firstName, lastName }: Inputs) => {
    console.log(
      `My email is: ${email}, and my full name is: ${firstName} ${lastName}`,
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.viewStyle}>
        <Text style={styles.textElement}>React Hook Form</Text>
        <Controller
          control={control}
          rules={{
            required: {
              value: true,
              message: "Email is required!",
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.textInputWithErrorContainer}>
              <View style={styles.textInputContainer}>
                <TextInput
                  placeholder='hello@example.com'
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              </View>
              {errors.email && (
                <Text style={styles.errorText}>{errors.email.message}</Text>
              )}
            </View>
          )}
          name='email'
        />
        <Controller
          control={control}
          rules={{
            required: {
              value: true,
              message: "First name is required!",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.textInputWithErrorContainer}>
              <View style={styles.textInputContainer}>
                <TextInput
                  placeholder='First Name'
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              </View>
              {errors.firstName && (
                <Text style={styles.errorText}>{errors.firstName.message}</Text>
              )}
            </View>
          )}
          name='firstName'
        />
        <Controller
          control={control}
          rules={{
            required: {
              value: true,
              message: "Last name is required!",
            },
            minLength: {
              value: 5,
              message: "Last name must be at least 5 characters long",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.textInputWithErrorContainer}>
              <View style={styles.textInputContainer}>
                <TextInput
                  placeholder='Last Name'
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              </View>
              {errors.lastName && (
                <Text style={styles.errorText}>{errors.lastName.message}</Text>
              )}
            </View>
          )}
          name='lastName'
        />
        <Controller
          control={control}
          rules={{
            required: {
              value: true,
              message: "Age is required!",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.textInputWithErrorContainer}>
              <View style={styles.textInputContainer}>
                <TextInput
                  placeholder='age'
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              </View>
              {errors.age && (
                <Text style={styles.errorText}>{errors.age.message}</Text>
              )}
            </View>
          )}
          name='age'
        />

        <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>Console.log()</Text>
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
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});
