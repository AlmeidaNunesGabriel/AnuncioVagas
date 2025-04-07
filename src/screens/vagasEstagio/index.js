import {View, Text, FlatList} from 'react-native';
import styles from './styles';
import React from "react";

const listaEstagio = [
    {
        id: '1',
        nome: 'Estágio Backend',
        salario: 'R$ 2000,00',
        descricao: 'Não obstante, a estrutura atual da organização aponta para a melhoria das diretrizes de desenvolvimento para o futuro.',
        contato: '9999 9999 - EMAIL@GMAIL.COM',
      },
      {
        id: '2',
        nome: 'Estagio Front-End',
        salario: 'R$ 1500,00',
        descricao: 'A nível organizacional, o entendimento das metas propostas deve passar por modificações independentemente dos conhecimentos estratégicos.',
        contato: '8888 9999 - liamg@GMAIL.COM',
      },
      {
        id: '3',
        nome: 'Estágio Backend',
        salario: 'R$ 2000,00',
        descricao: 'Não obstante, a estrutura atual da organização aponta para a melhoria das diretrizes de desenvolvimento para o futuro.',
        contato: '9999 9999 - EMAIL@GMAIL.COM',
      },
      {
        id: '4',
        nome: 'Estagio Front-End',
        salario: 'R$ 1500,00',
        descricao: 'A nível organizacional, o entendimento das metas propostas deve passar por modificações independentemente dos conhecimentos estratégicos.',
        contato: '8888 9999 - liamg@GMAIL.COM',
      },
]

export default  function VagasEstagio() {


    const renderItem = ({item}) => (
        <View style={styles.card}>
      <Text style={styles.nomeVaga}>{item.nome}</Text>
      <Text style={styles.texto}>Salário: {item.salario}</Text>
      <Text style={styles.texto}>Descrição: {item.descricao}</Text>
      <Text style={styles.texto}>Contato: {item.contato}</Text>
    </View>
  );
    
  return(
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