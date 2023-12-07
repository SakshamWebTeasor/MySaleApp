import { SafeAreaView } from "react-native";
import Home from "./src/screens/Home";
import { createContext, useState } from "react";

export const ThemeContext = createContext({
  theme: "Light",
  setTheme: (theme: string) => {},
});

const HomeScreen = () => {
  const [theme, setTheme] = useState("Light");
  const themeContextValue = {
    theme,
    setTheme,
  };
  return (
    <ThemeContext.Provider value={themeContextValue}>
      <Home />
    </ThemeContext.Provider>
  );
};

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HomeScreen />
    </SafeAreaView>
  );
}
