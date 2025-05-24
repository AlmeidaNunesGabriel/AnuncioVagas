import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingHorizontal: 10,
    flex: 1,
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
    marginBottom: 15,
    borderWidth: 1,               
    borderColor: '#ccc',          
    shadowColor: '#000',          
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    alignItems: 'center',
  },

  nomeVaga: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    color: '#333',
  },

  salario: {
    fontSize: 16,
    marginBottom: 15,
    color: 'red',
    fontWeight: '600',
  },

  button: {
    backgroundColor: 'red',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    minWidth: 120,
  },

  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default styles;