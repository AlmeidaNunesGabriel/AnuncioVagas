import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
  },

  scrollWrapper: {
    height: 280,      
    width: '100%',
  },

  scrollView: {
    height:'100%',
    width: '100%'
  },

  scrollContent: {
    alignItems: 'center',
    paddingHorizontal: 5,
  },

  card: {
    width: 180,
    height: 260,
    marginRight: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    borderWidth: 2,               
    borderColor: '#ccc',          
    shadowColor: '#000',          
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5, 
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 8,
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    flex: 1,
  },
  buttonContainer: {
    marginTop: 8,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'red',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default styles;