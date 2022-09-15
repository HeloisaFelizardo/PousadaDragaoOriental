import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  boxApresentacao: {
    backgroundColor: '#bc262e',
    justifyContent: 'center',
    width: 300,
    padding: 20,
    marginBottom: 20,
    borderRadius: 25,
  },
  boxTitulo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#eef003',
    marginBottom: 10,
  },
  boxSubTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom:10,
  },
  boxParagrafo: {
    fontSize: 16,
    color: '#fff',
  },
});

export default styles;