import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome, FontAwesome5 } from '@expo/vector-icons';

import TelaInicial from "./componentes/TelaInicial";
import TelaSobre from "./componentes/TelaQuartos";
import TelaContato from "./componentes/TelaContato";

const Tabs = createBottomTabNavigator();

export default function App () {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen 
          name="Início" 
          component = { TelaInicial }
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="home" color={ color } size={ 24 } />
            ),
          }}
          />

        <Tabs.Screen 
          name="Quartos" 
          component = { TelaSobre } 
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="bed" color={ color } size={ 24} />
            ),
          }}
        />
        
        <Tabs.Screen 
          name="Contato" 
          component = { TelaContato } 
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="phone-alt" color={ color } size={ 24 } />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  )
};
