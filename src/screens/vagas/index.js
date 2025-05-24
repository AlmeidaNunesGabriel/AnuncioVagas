import { FlatList, Text, View, TouchableOpacity } from "react-native";
import styles from './styles';
import React from "react";

const listaVagas = [
  {
    id: '1',
    titulo: 'Desenvolvedor Backend',
    salario: 'R$ 3.000,00',
    descricao: 'Não obstante, a estrutura atual da organização aponta para a melhoria das diretrizes de desenvolvimento para o futuro.',
    contato: '(11) 99999-9999 - backend@gmail.com',
    requisitos: 'Conhecimento em Node.js, MongoDB, APIs REST',
    beneficios: 'Vale alimentação, plano de saúde, home office flexível'
  },
  {
    id: '2',
    titulo: 'Programador Front-End',
    salario: 'R$ 3.500,00',
    descricao: 'A nível organizacional, o entendimento das metas propostas deve passar por modificações independentemente dos conhecimentos estratégicos para atingir a excelência.',
    contato: '(11) 88888-9999 - frontend@gmail.com',
    requisitos: 'React, JavaScript, CSS, HTML, Git',
    beneficios: 'Vale refeição, convênio médico, gympass'
  },
  {
    id: '3',
    titulo: 'Desenvolvedor Full Stack',
    salario: 'R$ 4.200,00',
    descricao: 'Profissional para atuar com desenvolvimento completo de aplicações web, desde o backend até o frontend.',
    contato: '(11) 77777-7777 - fullstack@gmail.com',
    requisitos: 'React, Node.js, Python, PostgreSQL',
    beneficios: 'Plano de saúde premium, vale alimentação, bônus anual'
  },
  {
    id: '4',
    titulo: 'Analista de Sistemas',
    salario: 'R$ 3.800,00',
    descricao: 'Responsável por análise e desenvolvimento de sistemas corporativos, levantamento de requisitos e documentação técnica.',
    contato: '(11) 66666-6666 - analista@gmail.com',
    requisitos: 'Java, Spring, Oracle, UML, Metodologias Ágeis',
    beneficios: 'Vale transporte, plano odontológico, participação nos lucros'
  },
  {
    id: '5',
    titulo: 'DevOps Engineer',
    salario: 'R$ 5.500,00',
    descricao: 'Profissional para implementar e manter infraestrutura de CI/CD, automação de deploys e monitoramento de aplicações.',
    contato: '(11) 55555-5555 - devops@gmail.com',
    requisitos: 'Docker, Kubernetes, AWS, Jenkins, Linux',
    beneficios: 'Home office 100%, stock options, seguro de vida'
  },
  {
    id: '6',
    titulo: 'Mobile Developer',
    salario: 'R$ 4.000,00',
    descricao: 'Desenvolvimento de aplicativos móveis nativos e híbridos para Android e iOS.',
    contato: '(11) 44444-4444 - mobile@gmail.com',
    requisitos: 'React Native, Flutter, Swift, Kotlin',
    beneficios: 'Flexibilidade de horários, cursos pagos, notebook'
  }
];

export default function Vagas({ navigation }) {
  const handleVagaPress = (vaga) => {
    navigation.navigate('VagaDetalhes', { vaga, tipo: 'emprego' });
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.nomeVaga}>{item.titulo}</Text>
      <Text style={styles.salario}>Salário: {item.salario}</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => handleVagaPress(item)}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Saiba Mais</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>VAGAS DE EMPREGO</Text>
      <FlatList
        data={listaVagas}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}