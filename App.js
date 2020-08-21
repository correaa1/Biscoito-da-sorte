import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./src/biscoito.png')
    };

   this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      'Seja quem você é. Porque você nunca sabe quem amaria a pessoa que você esconde.',
      'A vida é um caos aleatório,ordenada pelo tempo.',
      'O aleatório não existe, nosso cérebro sempre toma decisões mesmo que ocultas.',
      'A verdade, é que dói lembrar dela.','Cada instante é sempre.',
      'Conhecimento Parado Torna-se Esquecimento.'
      ];
  }

  quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase:'"' + this.frases [numeroAleatorio] + '"',
      img: require('./src/biscoitoAberto.png')
    });
  }
  render() {
    return (
      <View style={styles.container}>
  <Image
      source={this.state.img}
      style={styles.img}
      />

      <Text style={styles.textoFrase}>{this.state.textoFrase} </Text>

      <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
        <View style={styles.btnArea}>
        <Text style={styles.btnTexto}>  Quebrar Biscoito </Text>
        </View>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img:{
    width: 250,
    height:250
  },
  textoFrase:{
    fontSize:20,
    color:'#dd7b22',
    margin:30,
    fontStyle: 'italic',
    textAlign:'center'
  },
  botao:{
    width: 230,
    height:50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius:25
  },
  btnArea:{
    flex:1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto:{
    fontSize:18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
});
export default App;
