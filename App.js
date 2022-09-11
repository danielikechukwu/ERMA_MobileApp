import 'react-native-gesture-handler';

import { LogBox } from 'react-native'
import {View } from 'react-native'
import AppNavigator from './components/AppNavigator';
import { Provider } from 'react-redux';
import { store } from './components/store';



const App = () => {

  LogBox.ignoreLogs([
    'ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from \'deprecated-react-native-prop-types\'.',
    'NativeBase: The contrast ratio of',
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
])   

    return (


   <View style={{ flex: 1}}>   

    <Provider store={store} >
  
      <AppNavigator />

    </Provider>
     
     
   </View>

  )
}

export default App
