import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'; 
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "./src/screens/home";
import Vagas from './src/screens/vagas';


const Drawer = createDrawerNavigator();
export default function App() {
return (

    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Vagas" component={Vagas} options={{drawerLabel: 'Vagas de Emprego'}} />
      </Drawer.Navigator>
    </NavigationContainer>

  );
}