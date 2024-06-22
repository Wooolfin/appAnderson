import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBFBFB',
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        width: '100%'
    },
    Image: {
        width: 60,
        height: 40,
        marginTop: 10,
        marginRight: '40%'
    },
    config: {
        width: 40,
        height: 40,
        marginTop: 10,

    },
    textoDefault: {
        color: "#000",
        fontSize: 16,
        fontWeight: 'bold',
    },
    textoConteudo: {
        color: "#FFFFFF",
        marginLeft: 13,
        marginTop: 9
    },
    conteudo: {
        backgroundColor: '#CD2424',
        height: 101,
        width: 332,
        borderRadius: 8,
        marginBottom: 8,
        marginTop: 8
    },
    conteudoOff: {
        backgroundColor: '#B1B1B1',
        flexDirection: 'row',
        height: 101,
        width: 354,
        borderRadius: 8,
        marginBottom: 5
    },
    containerTexto: {
        width: '70%',
        height: 100
    },
    containerImage: {
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