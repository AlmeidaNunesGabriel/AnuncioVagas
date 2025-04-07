import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'; 
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "./src/screens/home";
import Vagas from './src/screens/vagas';
import Estagio from './src/screens/vagasEstagio';

const Drawer = createDrawerNavigator();
export default function App() {
return (

    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Vagas" component={Vagas} options={{drawerLabel: 'Vagas de Emprego'}} />
        <Drawer.Screen name="Vagas de Estagio" component={Estagio} options={{drawerLabel: 'Vagas de Estágio'}} />
      </Drawer.Navigator>
    </NavigationContainer>

  );
}