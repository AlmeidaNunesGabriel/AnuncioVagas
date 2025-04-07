import { ScrollView, Text, Image, View } from "react-native";
import styles from './styles';
import React from "react";

export default function Home(){
    return(
        <View style={styles.container}> 
            <Text style={styles.title}>Anúncios</Text>
            <View style={styles.scrollWrapper}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent} style={styles.scrollView}>
                    <View style={styles.card}>
                        <Image source={{ uri: 'https://placecats.com/300/200'}} style={styles.image} />
                        <Text style={styles.text}>Anuncio 1. Olha só esse gatinho a venda. </Text>
                    </View>
                    <View style={styles.card}>
                        <Image source={{ uri: 'https://placecats.com/300/201'}} style={styles.image} />
                        <Text style={styles.text}>Anuncio 2. Olha só esse gatinho a venda. </Text>
                    </View>
                    <View style={styles.card}>
                        <Image source={{ uri: 'https://placecats.com/300/202'}} style={styles.image} />
                        <Text style={styles.text}>Anuncio 3. Olha só esse gatinho a venda. </Text>
                    </View>
                    <View style={styles.card}>
                        <Image source={{ uri: 'https://placecats.com/neo_2/300/200'}} style={styles.image} />
                        <Text style={styles.text}>Anuncio 4. Olha só esse gatinho a venda. </Text>
                    </View>
                    <View style={styles.card}>
                        <Image source={{ uri: 'https://placecats.com/g/300/200'}} style={styles.image} />
                        <Text style={styles.text}>Anuncio 5. Olha só esse gatinho a venda. </Text>
                    </View>
                </ScrollView>
            </View>
        </View>

    )
}