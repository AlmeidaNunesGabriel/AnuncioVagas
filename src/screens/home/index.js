import { ScrollView, Text, Image, View, TouchableOpacity } from "react-native";
import styles from './styles';
import React from "react";

const anuncios = [
  {
    id: 1,
    titulo: "Anuncio 1",
    descricao: "Olha só esse gatinho a venda.",
    descricaoCompleta: "Este é um lindo gatinho de estimação, muito carinhoso e brincalhão. Ideal para famílias com crianças. Já está vacinado e vermifugado.",
    preco: "R$ 350,00",
    imagem: "https://placecats.com/300/200",
    contato: "(11) 99999-9999 - gatinho1@gmail.com"
  },
  {
    id: 2,
    titulo: "Anuncio 2",
    descricao: "Olha só esse gatinho a venda.",
    descricaoCompleta: "Gatinho muito dócil e sociável, acostumado com outros animais. Perfeito para quem busca um companheiro fiel.",
    preco: "R$ 280,00",
    imagem: "https://placecats.com/300/201",
    contato: "(11) 88888-8888 - gatinho2@gmail.com"
  },
  {
    id: 3,
    titulo: "Anuncio 3",
    descricao: "Olha só esse gatinho a venda.",
    descricaoCompleta: "Filhote de gato muito ativo e saudável. Adora brincar e é muito carinhoso com seus donos.",
    preco: "R$ 400,00",
    imagem: "https://placecats.com/300/202",
    contato: "(11) 77777-7777 - gatinho3@gmail.com"
  },
  {
    id: 4,
    titulo: "Anuncio 4",
    descricao: "Olha só esse gatinho a venda.",
    descricaoCompleta: "Gato adulto muito tranquilo, ideal para apartamentos. Já castrado e com todas as vacinas em dia.",
    preco: "R$ 200,00",
    imagem: "https://placecats.com/neo_2/300/200",
    contato: "(11) 66666-6666 - gatinho4@gmail.com"
  },
  {
    id: 5,
    titulo: "Anuncio 5",
    descricao: "Olha só esse gatinho a venda.",
    descricaoCompleta: "Gatinha muito carinhosa e limpa, adora receber carinho. Perfeita para quem mora sozinho.",
    preco: "R$ 320,00",
    imagem: "https://placecats.com/g/300/200",
    contato: "(11) 55555-5555 - gatinha5@gmail.com"
  }
];

export default function Home({ navigation }) {
  const handleAnuncioPress = (anuncio) => {
    navigation.navigate('AnuncioDetalhes', { anuncio });
  };

  return (
    <View style={styles.container}> 
      <Text style={styles.title}>Anúncios</Text>
      <View style={styles.scrollWrapper}>
        <ScrollView 
          horizontal={true} 
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={styles.scrollContent} 
          style={styles.scrollView}
        >
          {anuncios.map((anuncio) => (
            <TouchableOpacity 
              key={anuncio.id}
              style={styles.card}
              onPress={() => handleAnuncioPress(anuncio)}
              activeOpacity={0.7}
            >
              <Image source={{ uri: anuncio.imagem }} style={styles.image} />
              <Text style={styles.text}>{anuncio.descricao}</Text>
              <View style={styles.buttonContainer}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Ver Detalhes</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}