import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function DeliveryList({ route, navigation }) {

    function acessHome(){
    navigation.navigate('Home');
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.containerHeader}>
                <Text style={styles.textoHeader}>
                    OS - 23023
                </Text>
            </View>

            <View style={styles.bodyContainer}>
                <Text style={styles.textoConteudo}>Nome:</Text>
                <Text style={styles.textoConteudo}>Hilary Duart</Text>
                <Text style={styles.textoConteudo}>Endereço:</Text>
                <Text style={styles.textoConteudo}>Rua: Newto Rosa 142,  Itapeva II</Text>
                <Text style={styles.textoConteudo}>Telefone:</Text>
                <Text style={styles.textoConteudo}>Tel: 1589998552</Text>
                <Image
                    style={styles.imagem}
                    source={require('../../../assets/image 5.png')} />

                <TouchableOpacity
                    style={styles.button}
                >
                    <Text style={styles.textButton}>
                        Entregar
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                >
                    <Text style={styles.textButton}>
                        Ocorrencia
                    </Text>

                </TouchableOpacity>

                <View style={styles.bodyContainer2}>

                <TouchableOpacity
                style={styles.button2}
                >
                    <Text style={styles.textButton}
                    onPress={acessHome}>
                        Voltar
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.button2}>
                    <Text style={styles.textButton}>
                        Proxima
                    </Text>
                </TouchableOpacity>

                </View>
                
            </View>
        </View>
    )
}