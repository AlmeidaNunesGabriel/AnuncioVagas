import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'; 
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./src/screens/home";
import Vagas from './src/screens/vagas';
import Estagio from './src/screens/vagasEstagio';
import AnuncioDetalhes from './src/screens/anuncioDetalhes';
import VagaDetalhes from './src/screens/vagaDetalhes';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

// Stack para Home e Detalhes do Anúncio
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="HomeMain" 
        component={Home} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="AnuncioDetalhes" 
        component={AnuncioDetalhes}
        options={{ 
          title: 'Detalhes do Anúncio',
          headerStyle: { backgroundColor: '#f8f8f8' },
          headerTintColor: 'red'
        }}
      />
    </Stack.Navigator>
  );
}

// Stack para Vagas e Detalhes da Vaga
function VagasStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="VagasMain" 
        component={Vagas} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="VagaDetalhes" 
        component={VagaDetalhes}
        options={{ 
          title: 'Detalhes da Vaga',
          headerStyle: { backgroundColor: '#f8f8f8' },
          headerTintColor: 'red'
        }}
      />
    </Stack.Navigator>
  );
}

// Stack para Estágios e Detalhes do Estágio
function EstagioStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="EstagioMain" 
        component={Estagio} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="VagaDetalhes" 
        component={VagaDetalhes}
        options={{ 
          title: 'Detalhes do Estágio',
          headerStyle: { backgroundColor: '#f8f8f8' },
          headerTintColor: 'red'
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen 
          name="Home" 
          component={HomeStack} 
          options={{ drawerLabel: 'Início' }}
        />
        <Drawer.Screen 
          name="Vagas" 
          component={VagasStack} 
          options={{ drawerLabel: 'Vagas de Emprego' }} 
        />
        <Drawer.Screen 
          name="Vagas de Estagio" 
          component={EstagioStack} 
          options={{ drawerLabel: 'Vagas de Estágio' }} 
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}