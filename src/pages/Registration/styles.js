import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FBFBFB',
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2
    },
    imagem: {
        marginBottom: 25,
        marginTop: 24
    },
    texto: {
        color: "#000",
        fontSize: 30,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: '#A19999',
        backgroundColor: '#E7E7E7',
        paddingHorizontal: 8,
        paddingVertical: 8,
        borderRadius: 8,
        width: "70%",
    },
    button: {
        borderWidth: 3,
        borderColor: '#921818',
        backgroundColor: "#CD2424",
        paddingHorizontal: 148,
        paddingVertical: 8,
        borderRadius: 8,
        alignItems: 'center',
        width: "50%",
        marginTop: 48,
    },

    textoButton: {
        color: "#FFF",
        fontSize: 30,
        //fontFamily: 'Jockey One',
    },

    errorCampo: {
        color: "#F00",
        fontWeight: 'bold',
        fontSize: 16,
    },

    textCampoDigitavel: {
        color: "#757575",
        fontSize: 18,
        //fontFamily: 'Jockey One',
        fontWeight: 'bold',
        bottom: 8,
        paddingTop: 10,
    }
});