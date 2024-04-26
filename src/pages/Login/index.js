import { useState } from 'react';
import { TextInput, View, TouchableOpacity, Text} from 'react-native';
import styles from './styles';


export default function Login({navigation}) {

    function acessRegistration() {
        navigation.navigate('Registration');
}

    function acessHome() {
        navigation.navigate('Home');
}


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = () => {
        let campoEmail;
        let campoSenha;
        campoEmail = email;
        campoSenha = password;

        if (email === '' || password === '') {
            setErrorMessage('Por favor, preencha todos os campos!');
        }
    }


    return (
        <View style={styles.container}>
            

            <Text style={styles.texto}>
                Login
            </Text>

            <TextInput
                value={email}
                style={styles.input}
                placeholder="Email:"
                keyboardType='default'
                onChangeText={(text) => setEmail(text)} />

            <TextInput
                value={password}
                style={styles.input}
                placeholder="Senha:"
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
            />

            <Text>{errorMessage}</Text>

            <TouchableOpacity style={styles.eSenha}>
                <Text style={styles.textoeSenha}>
                    Esqueceu a senha?
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={acessHome}
            >
                <Text style={styles.textoButton}>
                    Entrar
                </Text>
            </TouchableOpacity>

            <TouchableOpacity

                style={styles.buttonCadastre}
                onPress={acessRegistration}
            >
                <Text style={styles.textoButtonCadastre}>
                    Cadastre-se
                </Text>
            </TouchableOpacity>

        </View>
    )
};