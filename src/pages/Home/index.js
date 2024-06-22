import { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';


export default function Home({ route, navigation }) {

  function acessDeliveryList() {
    navigation.navigate('DeliveryList');
  }
  
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
        source={require('../../../assets/FHicone.png')}/>
      </View>
      <View style={styles.conteudo}>

        <TouchableOpacity style={styles.containerTexto}
        onPress={acessDeliveryList}
        >
          <Text style={styles.textoConteudo}>OS 23023 - Hilary Duarte</Text>
          <Text style={styles.textoConteudo}>Rua: Newto Rosa 141,  Itapeva II</Text>
          <Text style={styles.textoConteudo} >Tel: (15)89998552</Text>
        </TouchableOpacity>

        <View style={styles.containerImage}>
          <Image
            source={require('../../../assets/maps.png')} />
        </View>

      </View>
      <View style={styles.conteudoOff}>
        <View style={styles.containerTexto}>
          <Text style={styles.textoConteudo}>OS 23023 - Hilary Duarte</Text>
          <Text style={styles.textoConteudo}>Rua: Newto Rosa 141,  Itapeva II</Text>
          <Text style={styles.textoConteudo} >Tel: (15)89998552</Text>
        </View>

        <View style={styles.containerImage}>
          <Image
            source={require('../../../assets/maps.png')} />
        </View>
      </View>

      <View style={styles.conteudoOff}>
        <View style={styles.containerTexto}>
          <Text style={styles.textoConteudo}>OS 23023 - Hilary Duarte</Text>
          <Text style={styles.textoConteudo}>Rua: Newto Rosa 141,  Itapeva II</Text>
          <Text style={styles.textoConteudo} >Tel: (15)89998552</Text>
        </View>

        <View style={styles.containerImage}>
          <Image
            source={require('../../../assets/maps.png')} />
        </View>
      </View>

      <View style={styles.conteudoOff}>
        <View style={styles.containerTexto}>
          <Text style={styles.textoConteudo}>OS 23023 - Hilary Duarte</Text>
          <Text style={styles.textoConteudo}>Rua: Newto Rosa 141,  Itapeva II</Text>
          <Text style={styles.textoConteudo} >Tel: (15)89998552</Text>
        </View>

        <View style={styles.containerImage}>
          <Image
            source={require('../../../assets/maps.png')} />
        </View>
      </View>

      <View style={styles.conteudoOff}>
        <View style={styles.containerTexto}>
          <Text style={styles.textoConteudo}>OS 23023 - Hilary Duarte</Text>
          <Text style={styles.textoConteudo}>Rua: Newto Rosa 141,  Itapeva II</Text>
          <Text style={styles.textoConteudo} >Tel: (15)89998552</Text>
        </View>

        <View style={styles.containerImage}>
          <Image
            source={require('../../../assets/maps.png')} />
        </View>
      </View>

    </View>
  )
};