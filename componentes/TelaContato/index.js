import React from "react";
import { View, Text, ImageBackground } from "react-native";

import imgFundo from '../../assets/frente-escola.png';
import estilos from './estilos';

export default function TelaInicial() {
  return (
    <ImageBackground source={ imgFundo }  style={ estilos.container }>
      <View style={ estilos.boxApresentacao }>
        <Text style={ estilos.boxTitulo }>Contato</Text>
        <Text style={ estilos.boxSubTitulo }>Entre em contato conosco:</Text>
        <Text style={ estilos.boxParagrafo }>Endereço: Av. 123, 222 - Rio de Janeiro RJ</Text>
        <Text style={ estilos.boxParagrafo }>Cel: 5521000000000</Text>
      </View>
    </ImageBackground>
  )
}