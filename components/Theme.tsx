'use client';

import { createContext, ReactNode, useState } from "react";



// Built Connection with createContext
export const ThemeContext = createContext({
  theme: 'light',
  switchLight: () => {},
  switchDark: () => {},
});

// ThemeProvider Function
const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // State for theme management
  const [theme, setTheme] = useState('light');

  // Function for Light theme
  const switchLight = () => {
    setTheme('light');
  };

  // Function for Dark theme
  const switchDark = () => {
    setTheme('dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, switchLight, switchDark }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
