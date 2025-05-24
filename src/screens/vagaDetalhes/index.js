import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';

export default function VagaDetalhes({ route }) {
  const { vaga, tipo } = route.params;
  const isEstagio = tipo === 'estagio';

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.titulo}>{vaga.titulo}</Text>
          <Text style={styles.salario}>
            {isEstagio ? 'Bolsa: ' : 'Salário: '}{vaga.salario}
          </Text>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Descrição</Text>
            <Text style={styles.descricao}>{vaga.descricao}</Text>
          </View>

          {vaga.requisitos && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>
                {isEstagio ? 'Requisitos' : 'Requisitos'}
              </Text>
              <Text style={styles.requisitos}>{vaga.requisitos}</Text>
            </View>
          )}

          {vaga.beneficios && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Benefícios</Text>
              <Text style={styles.beneficios}>{vaga.beneficios}</Text>
            </View>
          )}

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Contato</Text>
            <Text style={styles.contato}>{vaga.contato}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}