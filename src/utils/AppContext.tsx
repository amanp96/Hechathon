import React, {FC, useState} from 'react';
import {
  Provider as PaperProvider,
  DefaultTheme,
  MD3DarkTheme,
} from 'react-native-paper';
import {SafeAreaView} from 'react-native';
import {todoList} from './types';

const defaultTheme = {
  dark: false,
  roundness: 4,
  colors: {
    primary: '#3498db',
    accent: '#f1c40f',
    background: '#ecf0f1',
    surface: '#ffffff',
    text: '#2c3e50',
    error: '#e74c3c',
  },
};

export interface AppContextProps {
  task: todoList[] | null;
  setTask: ((race: todoList[]) => void) | null;
  theme: any;
  toggleTheme: (() => void) | null;
}
export const AppContext = React.createContext<AppContextProps>({
  task: null,
  setTask: null,
  theme: null,
  toggleTheme: null,
});
interface Props {
  children: React.ReactNode;
}
export const AppProvider: FC<Props> = ({children}) => {
  const [task, setTask] = useState<AppContextProps['task']>([]);
  const [theme, setTheme] = useState<AppContextProps['theme']>(defaultTheme);
  const toggleTheme = () => {
    setTheme((prevTheme: any) =>
      prevTheme === DefaultTheme ? MD3DarkTheme : DefaultTheme,
    );
  };

  return (
    <AppContext.Provider
      value={{
        task,
        setTask,
        theme,
        toggleTheme,
      }}>
      <PaperProvider theme={theme}>{children}</PaperProvider>
    </AppContext.Provider>
  );
};
export const useAppContext = () =>
  React.useContext<AppContextProps>(AppContext);
