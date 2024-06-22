import { View, FlatList, Text, TouchableOpacity,Image } from "react-native"
import apiMockApi from "../../services/MockApi";
import { useEffect, useState } from "react";
import styles from "./styles";

export default function MeusEnderecos({ navigation }) {

  const [lista, setLista] = useState();

  function consultarEnderecos() {

    apiMockApi
      .get('entregas')
      .then(response => {
        if (response.status == 200) {

          setLista(response.data);

        }
      });
  }

  function acessDelivery() {
    navigation.navigate('DeliveryList');
  }

  useEffect(() => {
    consultarEnderecos();
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            style={styles.config}
            source={require('../../../assets/Config.png')}
          />
        </TouchableOpacity>
        <Image
          style={styles.Image}
          source={require('../../../assets/FHicone.png')} />
      </View>
      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        renderItem={
          ({ item }) => (
            <View style={styles.conteudo}>
              <TouchableOpacity onPress={acessDelivery}>
                <Text style={styles.textoConteudo}>OS 23023 - {item.nome}</Text>
                <Text style={styles.textoConteudo}>{item.endereco}</Text>
                <Text style={styles.textoConteudo}>Tel: {item.telefone}</Text>
              </TouchableOpacity>
            </View>
          )} />

    </View>
  );
}