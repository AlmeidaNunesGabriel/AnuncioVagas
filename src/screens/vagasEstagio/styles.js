import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
  },
  card: {
    width: width - 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20, // Corrigido aqui (antes era marginBotton)
    borderWidth: 1,
    borderColor: '#ccc',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  texto: {
    fontSize: 16,
    marginBottom: 8,
  },
  nomeVaga: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default styles;