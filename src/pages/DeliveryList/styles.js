import { StyleSheet } from "react-native";

export default StyleSheet.create({

    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        width: '95%',
        marginHorizontal: 12,
        marginVertical: 16,
        fontStyle: 'italic',
        height: 559
      },
      containerHeader: {
        backgroundColor: '#CD2424',
        height: 58,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5
      },
      bodyContainer:{
        backgroundColor: '#CD2424',
        height: "100%",
        width: "100%"
      },
      button: {
        borderWidth: 3,
        borderColor: '#B2A7A7',
        backgroundColor: "#F4F3F3",
        borderRadius: 8,
        alignItems: 'center',
        width: 331,
        height: 40,
        marginBottom: 10

    },
    textButton:{
      color: 'red',
      fontSize: 30,
      fontWeight: 'bold'
    },
    textoConteudo:{
      color: '#FFFFFF',
      fontSize: 14,
      marginLeft: 18,
    },
    textoHeader:{
      color: '#FFFFFF',
      fontSize: 36
    },
    imagem:{
      height: 165,
      width: 310,
      marginLeft: 22,
      marginVertical: 18
    }
})