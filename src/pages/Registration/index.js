import { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './styles';

export default function Registration({navigation}) {

    function acessHome() {
        navigation.navigate('Home');
}

    const [nome, setNome] = useState('');
    const [data, setData] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleRegister = () => {
        let campoNome;
        let campoData;
        let campoTelefone;
        let campoEmail;
        let campoSenha;
        let campoConfirmSenha;

        campoNome = nome;
        campoData = data;
        campoTelefone = telefone;
        campoEmail = email;
        campoSenha = password;
        campoConfirmSenha = validPassword;

        if (nome === '' || data === '' || telefone === '' || email === '' || password === '' || validPassword === '') {
            setErrorMessage('Por favor, preencha todos os campos!');
        }
    }


    return (
        <ScrollView>
            <View style={styles.container}>
            

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
                    style={styles.button}
                    onPress={acessHome}>
                    <Text style={styles.textoButton}>
                        Cadastrar
                    </Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    )
};