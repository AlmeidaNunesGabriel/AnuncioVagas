import { ScrollView, Text, View } from "react-native";
import styles from './styles';
import React from "react";

export default function Vagas(){
    return(
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>VAGAS DE EMPREGO</Text>

            <View style={styles.card}>
                <Text style={styles.nomeVaga}>Desenvolvedor Backend</Text>
                <Text style={styles.texto}>Salário: R$ 3000,00</Text>
                <Text style={styles.texto}>Descrição:Não obstante, a estrutura atual da organização aponta para a melhoria das diretrizes de desenvolvimento 
                    para o futuro.</Text>
                <Text style={styles.texto}>Contato: 9999 9999- EMAIL@GMAIL.COM </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.nomeVaga}>Programador Front-End</Text>
                <Text style={styles.texto}>Salário: R$ 3500,00</Text>
                <Text style={styles.texto}>Descrição:A nível organizacional, o entendimento das metas propostas deve passar por modificações independentemente 
                    dos conhecimentos estratégicos para atingir a excelência..</Text>
                <Text style={styles.texto}>Contato: 8888 9999- liamg@GMAIL.COM </Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.nomeVaga}>Desenvolvedor Backend</Text>
                <Text style={styles.texto}>Salário: R$ 3000,00</Text>
                <Text style={styles.texto}>Descrição:Não obstante, a estrutura atual da organização aponta para a melhoria das diretrizes de desenvolvimento 
                    para o futuro.</Text>
                <Text style={styles.texto}>Contato: 9999 9999- EMAIL@GMAIL.COM </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.nomeVaga}>Programador Front-End</Text>
                <Text style={styles.texto}>Salário: R$ 3500,00</Text>
                <Text style={styles.texto}>Descrição:A nível organizacional, o entendimento das metas propostas deve passar por modificações independentemente 
                    dos conhecimentos estratégicos para atingir a excelência..</Text>
                <Text style={styles.texto}>Contato: 8888 9999- liamg@GMAIL.COM </Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.nomeVaga}>Desenvolvedor Backend</Text>
                <Text style={styles.texto}>Salário: R$ 3000,00</Text>
                <Text style={styles.texto}>Descrição:Não obstante, a estrutura atual da organização aponta para a melhoria das diretrizes de desenvolvimento 
                    para o futuro.</Text>
                <Text style={styles.texto}>Contato: 9999 9999- EMAIL@GMAIL.COM </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.nomeVaga}>Programador Front-End</Text>
                <Text style={styles.texto}>Salário: R$ 3500,00</Text>
                <Text style={styles.texto}>Descrição:A nível organizacional, o entendimento das metas propostas deve passar por modificações independentemente 
                    dos conhecimentos estratégicos para atingir a excelência..</Text>
                <Text style={styles.texto}>Contato: 8888 9999- liamg@GMAIL.COM </Text>
            </View>
        </ScrollView>
    );

}
