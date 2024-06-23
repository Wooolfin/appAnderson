import { Text, View, Image, TouchableOpacity, Picker } from 'react-native';
import styles from './styles';
import { useState } from 'react';

export default function DeliveryList({ route, navigation }) {

    const [ocorrencia, setocorrencia] = useState();

    const [showSidebar, setShowSidebar] = useState(false);
    const configs = () => { setShowSidebar(!showSidebar); };
    const hideSidebar = () => { setShowSidebar(false); };

    function logout() {
        navigation.navigate('Login')
    }
    function acessHome() {
        navigation.navigate('Home');
    }

    return (
        <View style={styles.mainContainer} onStartShouldSetResponder={hideSidebar}>
            <View style={styles.header}>
                <TouchableOpacity onPress={configs}>
                    <Image
                        style={styles.config}
                        source={require('../../../assets/Config.png')}
                    />
                </TouchableOpacity>
                <Image
                    style={styles.Image}
                    source={require('../../../assets/FHicone.png')} />
            </View>
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
                    style={styles.button}>
                    <Text style={styles.textButton}>
                        Entregar
                    </Text>
                </TouchableOpacity>

                <Picker
                    ocorrencia={ocorrencia}
                    onValueChange={(itemValue, itemIndex) =>
                        setocorrencia(itemValue)
                    }
                    style={styles.box}
                >
                    <Picker.Item label="Ausente" value="ausente" />
                    <Picker.Item label="Caixa Postal" value="caixaPostal" />
                    <Picker.Item label="Endereço Não Localizado" value="semEndereco" />
                    <Picker.Item label="Numero Não Locazaiado" value="semNumero" />
                    <Picker.Item label="Endereço Zona Rural" value="zonaRural" />
                    <Picker.Item label="Solicitação Entrega Fatura " value="entregaFatura" />
                </Picker>

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
                {showSidebar && (
                    <View style={styles.sidebar}>
                        <View style={styles.sidebar2}>
                            <Image
                                style={styles.usuario}
                                source={require('../../../assets/usuario.png')} />
                            <Text style={styles.sidebarText2}>Flavio Castellar</Text>
                        </View>

                        <TouchableOpacity>
                            <Text style={styles.sidebarText}>Perfil</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.sidebarText}>Configurações</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnSair} onPress={logout}>
                            <Image
                                style={styles.sair}
                                source={require('../../../assets/sair.png')} />
                            <Text style={styles.textSair}>Sair</Text>
                        </TouchableOpacity>

                    </View>
                )}
        </View>
    )
}