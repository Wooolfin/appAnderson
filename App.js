import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';

export default function App() {
  return (
    <View style={estilos.container}>
      <Image
        style={estilos.imagem}
        source={require('./assets/image2.png')}/>

      <Text style={estilos.texto}>
        Login
      </Text>      
    
      <TextInput 
      style={estilos.input}
      placeholder="Usuario:"
      keyboardType='default'/>
     
      <TextInput 
      style={estilos.input}
      placeholder="Senha:"
      secureTextEntry={true}/> 

      <TouchableOpacity style={estilos.eSenha}>
        <Text style={estilos.textoeSenha}>
          Esqueceu a senha?
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={estilos.button}>
        <Text style={estilos.textoButton}>
          Entrar
        </Text>
      </TouchableOpacity>


    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFBFB',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16
  },
  imagem:{

  },
  texto:{
    color: "#000",
    fontSize: 30,
    fontWeight: 'bold',
  },
  input:{
    borderWidth: 1,
    borderColor: '#A19999',
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 8,
    width: "60%",
  },
  button:{
    borderWidth: 3,
    borderColor: '#921818',
    backgroundColor: "#CD2424",
    paddingHorizontal: 24,
    //paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    width: "50%",
  },
  textoButton:{
    color: "#FFF",
    fontSize: 25,
    fontStyle: 'Jockey One',
  },
  eSenha:{

  },
  textoeSenha:{
    textDecorationLine:"underline",
    fontWeight: 'bold',
    fontSize: 16,
  }
});
