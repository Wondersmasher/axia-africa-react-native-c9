import { Drawer } from "expo-router/drawer";

const Layout = () => {
  return (
    <Drawer
      screenOptions={{
        drawerHideStatusBarOnOpen: true,
      }}
    >
      <Drawer.Screen
        name='(tabs)'
        options={{
          title: "Tabs",
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name='index'
        options={{
          title: "Manual",
        }}
      />
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
