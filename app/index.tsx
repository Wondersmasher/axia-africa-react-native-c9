import { CustomInput } from "@/components/reusables";
import { useSession } from "@/store";
import { loginSchema, TLoginSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "expo-router";
import { useForm } from "react-hook-form";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function ReactHookForm() {
  const {
    control,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm<TLoginSchema>({
    defaultValues: {
      email: "",
      name: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const role = watch("role");

  const {
    actions: { logIn },
  } = useSession((state) => state);

  const onSubmit = (data: TLoginSchema) => {
    console.log(data);
    logIn(data);
    reset();
  };

  const createDetails = () => {
    setValue("email", "hello@gmail.com");
    setValue("name", "John Doe");
    setValue("role", "user");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.viewStyle}>
        <Text style={styles.textElement}>Sign in to view all pages!</Text>
        <CustomInput
          control={control}
          name='email'
          placeholder='hello@gmail.com'
          label='Email'
        />
        <CustomInput
          control={control}
          name='name'
          placeholder='John Doe'
          label='Full name'
        />
        <View style={{ flexDirection: "column" }}>
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
              onPress={() => setValue("role", "user")}
            >
              <Text style={[styles.buttonText, { textAlign: "center" }]}>
                User
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
              onPress={() => setValue("role", "admin")}
            >
              <Text style={[styles.buttonText, { textAlign: "center" }]}>
                Admin
              </Text>
            </Pressable>
            <Text>{role}</Text>
          </View>
          {errors.role && (
            <Text style={{ color: "red" }}>{errors.role.message}</Text>
          )}
        </View>
        <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>Log in to your account</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => createDetails()}>
          <Text style={styles.buttonText}>Create dummy details</Text>
        </Pressable>
        <Link href='/(drawer)'>Go to drawer</Link>
        <Link href='/dynamic'>Go to dynamic page</Link>
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
