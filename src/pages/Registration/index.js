import { useState } from 'react';
import apiMockApi from "../../services/MockApi";
import { Text, TextInput, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './styles';

export default function Registration({navigation}) {

    function acessLogin(){
        navigation.navigate('Login')
    }

    const [nome, setNome] = useState('');
    const [data, setData] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    function novaConta(){
        if (nome === '' || data === '' || telefone === '' || email === '' || password === '' || validPassword === '') {
            setErrorMessage('Por favor, preencha todos os campos!');
        }else{
        let dados = {
                "nome": nome,
                "data": data,
                "telefone": telefone,
                "email": email,
                "password": password,
            };
        
        apiMockApi.post('BancoDeDados', dados)
                 .then(response => {
                    if(response.status == 201){
                        alert("Conta criada");
                    }else{
                        alert("Erro ao criar! Tente novamente...");
                    }

                 });
                 navigation.navigate('Home')
    }}

    return (
        <View style={styles.container}>
                <Image source={require('./../../../assets/image2.png')}/>

                <Text style={styles.textCampoDigitavel}>
                    Nome completo
                </Text>

                <TextInput
                    value={nome}
                    style={styles.input}
                    keyboardType='default'
                    onChangeText={(text) => setNome(text)} />

                <Text style={styles.textCampoDigitavel}>
                    Data nascimento
                </Text>

                <TextInput
                    value={data}
                    style={styles.input}
                    keyboardType='default'
                    onChangeText={(text) => setData(text)} />

                <Text style={styles.textCampoDigitavel}>
                    Telefone
                </Text>

                <TextInput
                    value={telefone}
                    style={styles.input}
                    keyboardType='number-pad'
                    onChangeText={(text) => setTelefone(text)} />

                <Text style={styles.textCampoDigitavel}>
                    E-mail
                </Text>

                <TextInput
                    value={email}
                    style={styles.input}
                    keyboardType='email-address'
                    onChangeText={(text) => setEmail(text)} />

                <Text style={styles.textCampoDigitavel}>
                    Senha
                </Text>

                <TextInput
                    value={password}
                    style={styles.input}
                    keyboardType='default'
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)} />

                <Text style={styles.textCampoDigitavel}>
                    Confirmar senha
                </Text>

                <TextInput
                    value={validPassword}
                    style={styles.input}
                    keyboardType='default'
                    secureTextEntry={true}
                    onChangeText={(text) => setValidPassword(text)} />

                <Text>{errorMessage}</Text>

                <TouchableOpacity
                onPress={acessLogin} 
                style={styles.eSenha}>
                <Text style={styles.textoeSenha}>
                    Já possui uma conta?
                </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={novaConta}>
                    <Text style={styles.textoButton}>
                        Cadastrar
                    </Text>
                </TouchableOpacity>
        </View>            
    )
};