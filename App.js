
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image} from 'react-native';

export default function App() {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    let campoEmail;
    let campoSenha;
    campoEmail = email;
    campoSenha = password;

    if (email === '' || password === ''){
      setErrorMessage('Por favor, preencha todos os campos!');
    }
    }
  

  return (
    <View style={estilos.container}>
      <Image
        style={estilos.imagem}
        source={require('./assets/image2.png')}/>

      <Text style={estilos.texto}>
        Login
      </Text>      
    
      <TextInput 
      value={email}
      style={estilos.input}
      placeholder="Email:"
      keyboardType='default'
      onChangeText={(text)=>setEmail(text)}/>

      <TextInput 
      value={password}
      style={estilos.input}
      placeholder="Senha:"
      secureTextEntry={true}
      onChangeText={(text)=>setPassword(text)}
      /> 
      
      <Text>{errorMessage}</Text>

      <TouchableOpacity style={estilos.eSenha}>
        <Text style={estilos.textoeSenha}>
          Esqueceu a senha?
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
      style={estilos.button}
      onPress={handleLogin}
      >
        <Text style={estilos.textoButton}>
          Entrar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={estilos.buttonCadastre}
      onPress={handleLogin}
      >
        <Text style={estilos.textoButtonCadastre}>
          Cadastre-se
        </Text>
      </TouchableOpacity>

    </View>
  )
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFBFB',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16
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

  buttonCadastre:{
    borderWidth: 3,
    borderColor: '#B2A7A7',
    backgroundColor: "#DDDDDD",
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
  textoButtonCadastre:{
    color: "#EF2424",
    fontSize: 25,
    fontStyle: 'Jockey One',
  },
  textoeSenha:{
    textDecorationLine:"underline",
    fontWeight: 'bold',
    fontSize: 16,
  },
  errorCampo:{
    color: "#F00",
    fontWeight: 'bold',
    fontSize: 16,
  }
});