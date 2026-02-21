import { Button, ButtonSpinner, ButtonText, CustomInput } from "@/components";
import { useSession } from "@/store";
import { loginSchema, TLoginSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "expo-router";
import { useForm } from "react-hook-form";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useShallow } from "zustand/shallow";

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
    isLoading,
    actions: { logIn },
  } = useSession(
    useShallow((state) => ({
      actions: state.actions,
      isLoading: state.isLoading,
    })),
  );

  const onSubmit = (data: TLoginSchema) => {
    // console.log(data);
    logIn(data);
    reset();
  };

  const createDetails = () => {
    setValue("email", "hello@gmail.com");
    setValue("name", "John Doe");
    setValue("role", "user");
  };

  return (
    <ScrollView style={styles.container} className='bg-red-200'>
      <View style={styles.viewStyle}>
        <Text style={styles.textElement}>Sign in to view all pages!</Text>
        <CustomInput
          control={control}
          name='email'
          placeholder='hello@gmail.com'
          label='Email'
          textInputContainer={{
            backgroundColor: "transparent",
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "black",
          }}
          placeholderTextColor='black'
        />
        <CustomInput
          control={control}
          name='name'
          placeholder='John Doe'
          label='Full name'
          textInputContainer={{
            backgroundColor: "transparent",
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "black",
          }}
          placeholderTextColor='black'
        />
        <View style={{ flexDirection: "column" }}>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              gap: 20,
            }}
          >
            <Button
              onPress={() => setValue("role", "user")}
              className='bg-red-900 flex-1'
            >
              <ButtonText>User</ButtonText>
            </Button>
            <Button
              onPress={() => setValue("role", "admin")}
              className='bg-red-900 flex-1'
            >
              <ButtonText> Admin</ButtonText>
            </Button>

            <Text>{role}</Text>
          </View>
          {errors.role && (
            <Text style={{ color: "red" }}>{errors.role.message}</Text>
          )}
        </View>
        <Button onPress={handleSubmit(onSubmit)} className='bg-red-900'>
          <ButtonText>
            {isLoading ? "Logging in..." : `Log in to your account`}
          </ButtonText>
          {isLoading && <ButtonSpinner color={"white"} size={"small"} />}
        </Button>

        <Button onPress={createDetails} className='bg-red-900'>
          <ButtonText>Create dummy details</ButtonText>
        </Button>

        <Link href='/(drawer)'>Go to drawer</Link>
        <Link href='/(dynamic)'>Go to dynamic page</Link>
        <Link href='/native-wind'>Go to Native Wind page</Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "white",
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
