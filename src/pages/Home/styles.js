import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBFBFB',
        alignItems: 'center',
    },
    textoDefault: {
        color: "#000",
        fontSize: 16,
        fontWeight: 'bold',
    },
    textoConteudo:{
        color: "#FFFFFF",
        marginLeft: 13,
        marginTop: 9
    },
    conteudo: {
        backgroundColor: '#CD2424',
        flexDirection: 'row',
        height: 101,
        width: 354,
        borderRadius: 8,
        marginBottom: 5,
        marginTop: 28
    },
    conteudoOff: {
        backgroundColor: '#B1B1B1',
        flexDirection: 'row',
        height: 101,
        width: 354,
        borderRadius: 8,
        marginBottom: 5
    },
    mapImage:{
    },
    containerTexto:{
        width: '70%',
        height: 100
    },
    containerImage:{
        width: '30%',
        height: 100
    }, 
    button: {
        borderWidth: 3,
        borderColor: '#921818',
        backgroundColor: "#CD2424",
        paddingHorizontal: 24,
        //paddingVertical: 8,
        borderRadius: 8,
        alignItems: 'center',
        width: "50%",
    }
})   