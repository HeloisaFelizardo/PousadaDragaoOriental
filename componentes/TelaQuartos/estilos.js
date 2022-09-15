import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    backgroundColor:'#bc262e',
  },
  titulo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#eef003',
    marginTop: 10,
  },
  subtitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  paragrafo: {
    color: '#fff',
    fontSize: 18,
  },
  containerImagens: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 30,
  },
  img: {
    flex: 1,
    height: 300,
    margin: 5,
    borderRadius: 25,
  }
});

export default styles;