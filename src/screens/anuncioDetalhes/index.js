import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './styles';

export default function AnuncioDetalhes({ route }) {
  const { anuncio } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Image source={{ uri: anuncio.imagem }} style={styles.image} />
        
        <View style={styles.infoContainer}>
          <Text style={styles.titulo}>{anuncio.titulo}</Text>
          <Text style={styles.preco}>{anuncio.preco}</Text>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Descrição</Text>
            <Text style={styles.descricao}>{anuncio.descricaoCompleta}</Text>
          </View>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Contato</Text>
            <Text style={styles.contato}>{anuncio.contato}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}