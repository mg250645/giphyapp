import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { AppProvider } from './src/context/data';
import { UIProvider } from './src/context/ui';
import { Main } from "./src/views";

export default function App() {
  return (
    <NativeBaseProvider>
      <AppProvider>
        <UIProvider>
          <View style={styles.container}>
              <StatusBar style="auto" />
              <Main />              
          </View>
        </UIProvider>        
      </AppProvider>
    </NativeBaseProvider>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
