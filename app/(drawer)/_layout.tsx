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
          title: "React Hook Form",
        }}
      />
    </Drawer>
  );
};
export default Layout;
