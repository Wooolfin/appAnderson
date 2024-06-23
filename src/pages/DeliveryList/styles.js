import { StyleSheet } from "react-native";

export default StyleSheet.create({

  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
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
  containerHeader: {
    backgroundColor: '#CD2424',
    height: 58,
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5
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
    flexDirection: 'row',
  },
  sidebarText: {
    fontWeight: 'bold',
    fontSize: 26,
    marginBottom: 20,
    color: '#FFFFFF',
    marginLeft: 22,
  },
  sidebarText2: {
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 46,
    marginLeft: 16,
    color: '#FFFFFF',
  },
  usuario: {
    width: 56,
    height: 48,
    marginTop: 18,
    marginLeft: 10
  },
  btnSair: {
    marginTop:'150%',
    flexDirection: 'row',
    alignSelf: 'baseline'
  },
  sair: {
    width: 30,
    height: 36,
    marginTop: 18,
    marginLeft: 10,
  },
  textSair: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 20,
    marginTop: 16,
    marginLeft: 16,
    color: '#FFFFFF',
  },
  bodyContainer: {
    backgroundColor: '#CD2424',
    height: "100%",
    width: "100%",

  },

  bodyContainer2: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor: '#CD2424',
    height: "100%",
    width: "100%",
    columnGap: 15
  },

  button: {
    borderWidth: 3,
    borderColor: '#B2A7A7',
    backgroundColor: "#F4F3F3",
    borderRadius: 8,
    alignItems: 'center',
    width: 314,
    height: 40,
    marginBottom: 10,
    marginLeft: 20,
  },
  button2: {
    width: 150,
    height: 40,
    borderWidth: 3,
    borderColor: '#B2A7A7',
    backgroundColor: "#F4F3F3",
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,

  },
  box: {
    borderWidth: 3,
    borderColor: '#B2A7A7',
    backgroundColor: "#F4F3F3",
    borderRadius: 8,
    alignItems: 'center',
    width: 314,
    height: 40,
    marginBottom: 10,
    marginLeft: 20,
    color: '#000000',
    fontSize: 23,
    fontWeight: 'bold'
  },
  textButton: {
    color: '#AB2020',
    fontSize: 30,
    fontWeight: 'bold'
  },
  textoConteudo: {
    color: '#FFFFFF',
    fontSize: 14,
    marginLeft: 18,
  },
  textoHeader: {
    color: '#FFFFFF',
    fontSize: 36
  },
  imagem: {
    height: 165,
    width: 310,
    marginLeft: 22,
    marginVertical: 18
  }
})