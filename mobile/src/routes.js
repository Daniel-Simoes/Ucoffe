import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './pages/Home';
import Cart from './pages/Cart';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Cart,
    },
    {
      headerLayoutPreset: false,
      defaultNavigationOptions: {
        headerStyle: { backgroundColor: '#333' },
      },
    }
  )
);

export default Routes;
