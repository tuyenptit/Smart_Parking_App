import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import Navigation from './src/navigation/Navigation';
import {UserProvider} from './src/provider/UserProvider';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <UserProvider>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Navigation />
      </SafeAreaView>
    </UserProvider>
  );
}

export default App;
