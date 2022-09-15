import React from "react";
import { View, Text, ImageBackground } from "react-native";

import imgFundo from '../../assets/frente-escola.png';
import estilos from './estilos';

export default function TelaInicial() {
  return (
    <ImageBackground source={ imgFundo }  style={ estilos.container }>
      <View style={ estilos.boxApresentacao }>
        <Text style={ estilos.boxTitulo }>東方龍 Dōngfāng lóng </Text>
        <Text style={ estilos.boxParagrafo }>Pousada Dragão Oriental</Text>
      </View>
    </ImageBackground>
  )
}