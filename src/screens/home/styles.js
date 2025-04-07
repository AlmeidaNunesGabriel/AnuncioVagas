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
        height: 260,      
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
        height: 240,
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
        fontSize: 16,
        textAlign: 'center',
      },

  });

  export default styles;