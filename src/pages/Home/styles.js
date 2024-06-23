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
    sidebar: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: 215,
        backgroundColor: '#CD2424',
        alignItems: 'flex-start',
        elevation: 8, // sombra para efeito visual
    },
    sidebar2: {
        flexDirection:'row',
    },
    sidebarText: {
        fontWeight:'bold',
        fontSize: 26,
        marginBottom: 20,
        color:'#FFFFFF',
        marginLeft: 22,
    },
    sidebarText2: {
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 46,
        marginLeft: 16,
        color:'#FFFFFF',
    },
    usuario: {
        width: 56,
        height: 48,
        marginTop: 18,
        marginLeft:10
    }, 
    btnSair: {
        marginTop: '150%',
        flexDirection:'row',
        alignSelf:'baseline'
    },
    sair: {
        width:30,
        height: 36,
        marginTop: 18,
        marginLeft:10,
    },
    textSair: {
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 20,
        marginTop: 16,
        marginLeft: 16,
        color:'#FFFFFF',
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
    containerImage: {
        width: '30%',
        height: 100
    },
})   