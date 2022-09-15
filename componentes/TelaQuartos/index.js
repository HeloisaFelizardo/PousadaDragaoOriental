import React from "react";
import { View, Text, Image } from "react-native";

import img1 from '../../assets/quarto-1.png';
import img2 from '../../assets/quarto-2.png';
import estilos from './estilos';

export default function TelaSobre() {
  return (
    <View style={ estilos.container }>
      <Text style={ estilos.titulo }>Nossos quartos</Text>
      <Text style={ estilos.subtitulo }>Veja detalhes sobre nossos quartos</Text>
      
      <View style={ estilos.containerImagens }> 
        <Image resizeMode="cover" source={img1} style={ estilos.img } />
        <Image source={img2} style={ estilos.img } />
      </View>

      <Text style={ estilos.subtitulo }>Todos os nossos quartos incluem:</Text>
      <Text style={ estilos.paragrafo }>- TV de tela plana a cabo</Text>
      <Text style={ estilos.paragrafo }>- Cozinha compacta</Text>
      <Text style={ estilos.paragrafo }>- Área para refeições</Text>
      <Text style={ estilos.paragrafo }>- Ar-condicionado</Text>
    </View>
  )
}