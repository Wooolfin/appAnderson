import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBFBFB',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16
    },
    texto: {
        color: "#000",
        fontSize: 30,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: '#A19999',
        paddingHorizontal: 8,
        paddingVertical: 8,
        borderRadius: 8,
        width: "60%",
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
    },

    buttonCadastre: {
        borderWidth: 3,
        borderColor: '#B2A7A7',
        backgroundColor: "#DDDDDD",
        paddingHorizontal: 24,
        //paddingVertical: 8,
        borderRadius: 8,
        alignItems: 'center',
        width: "50%",
    },

    textoButton: {
        color: "#FFF",
        fontSize: 25,
        fontStyle: 'Jockey One',
    },
    textoButtonCadastre: {
        color: "#EF2424",
        fontSize: 25,
        fontStyle: 'Jockey One',
    },
    textoeSenha: {
        textDecorationLine: "underline",
        fontWeight: 'bold',
        fontSize: 16,
    },
    errorCampo: {
        color: "#F00",
        fontWeight: 'bold',
        fontSize: 16,
    }
});