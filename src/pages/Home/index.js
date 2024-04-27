import { useState } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export default function Home({route, navigation}) {

    const { E_mail } = route.params; 
    const { Senha } = route.params;

    return (
        <View style={styles.container}>
            
            <Text style={styles.texto}>
              E-mail: {E_mail}
            </Text>
            <Text style={styles.texto}>
               Senha: {Senha}
            </Text>
        </View>    
)
}