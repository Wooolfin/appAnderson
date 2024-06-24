import { View, FlatList, Text, TouchableOpacity, Image } from "react-native"
import { useEffect, useState } from "react";
import apiMockApi from "../../services/MockApi";
import styles from "./styles";

export default function MeusEnderecos({ navigation }) {

  const [lista, setLista] = useState();
  const [nome, setNome] = useState();

  const [showSidebar, setShowSidebar] = useState(false);
  const configs = () => { setShowSidebar(!showSidebar); };
  const hideSidebar = () => { setShowSidebar(false); };

  function listaEntregas() {

    apiMockApi
      .get('entregas')
      .then(response => {
        if (response.status == 200) {
          setLista(response.data);
        }
      });
  }

  function logout() {
    navigation.navigate('Login')
  }
  function acessDelivery(item) {
    navigation.navigate('DeliveryList', { item });
  }

  useEffect(() => {
    listaEntregas();
  });

  return (
    <View style={styles.container} onStartShouldSetResponder={hideSidebar}>

      <View style={styles.header}>
        <TouchableOpacity onPress={configs}>
          <Image
            style={styles.config}
            source={require('../../../assets/Config.png')}/>
        </TouchableOpacity>
        <Image
          style={styles.Image}
          source={require('../../../assets/FHicone.png')}/>
      </View>
      <View>
        <Image
          source={require('../../../assets/Line.png')}/>
      </View>

      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        renderItem={
          ({ item }) => (
            <View style={styles.conteudo}>
              <TouchableOpacity onPress={() => acessDelivery(item)}>
                <Text style={styles.textoConteudo}>OS 23023 - {item.nome}</Text>
                <Text style={styles.textoConteudo}>{item.endereco}</Text>
                <Text style={styles.textoConteudo}>Tel: {item.telefone}</Text>
              </TouchableOpacity>
            </View>
          )} />

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
              source={require('../../../assets/sair.png')}/>
              <Text style={styles.textSair}>Sair</Text>
          </TouchableOpacity>

        </View>
      )}

    </View>
  );
}