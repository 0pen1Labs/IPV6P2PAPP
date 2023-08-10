import {Provider} from 'react-redux';
import store from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import RootNavigator from './src/navigation/RootNavigator';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

const persistor = persistStore(store);

// This is to remove selected background pill from react navigation Material-bottom-tab-navigator.
const bottomNavBarTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    notification: 'rgba(255, 255, 255, 0.5)',
    secondaryContainer: 'transparent',
  },
};

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={bottomNavBarTheme}>
          <RootNavigator />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
