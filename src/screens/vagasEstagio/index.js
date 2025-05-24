import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import React from "react";

const listaEstagio = [
  {
    id: '1',
    titulo: 'Estágio Backend',
    salario: 'R$ 2.000,00',
    descricao: 'Não obstante, a estrutura atual da organização aponta para a melhoria das diretrizes de desenvolvimento para o futuro.',
    contato: '(11) 99999-9999 - estagio.backend@gmail.com',
    requisitos: 'Cursando Ciência da Computação, conhecimento básico em programação',
    beneficios: 'Vale transporte, vale refeição, auxílio educação'
  },
  {
    id: '2',
    titulo: 'Estágio Front-End',
    salario: 'R$ 1.500,00',
    descricao: 'A nível organizacional, o entendimento das metas propostas deve passar por modificações independentemente dos conhecimentos estratégicos.',
    contato: '(11) 88888-9999 - estagio.frontend@gmail.com',
    requisitos: 'Cursando Sistemas de Informação, HTML, CSS, JavaScript básico',
    beneficios: 'Vale alimentação, horário flexível, mentoria'
  },
  {
    id: '3',
    titulo: 'Estágio Mobile',
    salario: 'R$ 1.800,00',
    descricao: 'Oportunidade para aprender desenvolvimento mobile em ambiente corporativo com equipe experiente.',
    contato: '(11) 77777-7777 - estagio.mobile@gmail.com',
    requisitos: 'Cursando Engenharia de Software, interesse em mobile',
    beneficios: 'Vale transporte, vale refeição, curso de inglês'
  },
  {
    id: '4',
    titulo: 'Estágio QA',
    salario: 'R$ 1.600,00',
    descricao: 'Estágio em Quality Assurance para aprender sobre testes automatizados e manuais.',
    contato: '(11) 66666-6666 - estagio.qa@gmail.com',
    requisitos: 'Cursando área de TI, atenção aos detalhes, organização',
    beneficios: 'Vale alimentação, plano de saúde, certificações'
  }
];

export default function VagasEstagio({ navigation }) {
  const handleEstagioPress = (estagio) => {
    navigation.navigate('VagaDetalhes', { vaga: estagio, tipo: 'estagio' });
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.nomeVaga}>{item.titulo}</Text>
      <Text style={styles.salario}>Bolsa: {item.salario}</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => handleEstagioPress(item)}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Saiba Mais</Text>
      </TouchableOpacity>
    </View>
  );
    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>VAGAS DE ESTÁGIO</Text>
      <FlatList
        data={listaEstagio}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}