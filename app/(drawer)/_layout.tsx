import { useSession } from "@/store";
import { Drawer } from "expo-router/drawer";

const Layout = () => {
  const { user } = useSession((state) => state);

  return (
    <Drawer
      screenOptions={{
        drawerHideStatusBarOnOpen: true,
      }}
    >
      <Drawer.Protected guard={user?.role === "admin"}>
        <Drawer.Screen
          name='(tabs)'
          options={{
            title: "Admins Only",
            headerShown: false,
          }}
        />
      </Drawer.Protected>
      <Drawer.Protected guard={user?.role === "user"}>
        <Drawer.Screen
          name='index'
          options={{
            title: "Manual",
          }}
        />
      </Drawer.Protected>
      <Drawer.Screen
        name='react-hook-form'
        options={{
          title: "React Hook Form",
        }}
      />
      <Drawer.Screen
        name='react-hook-form-zod'
        options={{
          title: "React Hook Form With Zod",
        }}
      />
    </Drawer>
  );
};
export default Layout;
