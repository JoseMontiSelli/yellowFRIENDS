import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, } from 'react-native';

export function Ajudar() {
  return (

    <ScrollView>
      <View style={styles.container}>

        <View style={styles.header_background}>
          <Text>Meu pau</Text>
        </View>

        <View style={styles.section_dadosusuarios}>

          <View style={styles.section_personalinfo}>

            <View style={styles.section_nicklocalization}>
            </View>

            <View style={styles.section_tempoapp}>
            </View>

          </View>

          <View style={styles.section_bio}>
            <Text style={styles.lbl_bio}>Eu sou só um cara legal tentando ajudar e gosto de trens</Text>
          </View>
        </View>

        <View style={styles.selos_background}>

          <Image
            source={require('./src/images/Selos/selo_BemHumorado.png')}
            style={styles.selo_bemhumorado}/>

          <Image
            source={require('./src/images/Selos/selo_BomConselheiro.png')}
            style={styles.selo_bomconselheiro}/>

          <Image
            source={require('./src/images/Selo/selo_BomOuvinte.png')}
            style={styles.selo_bomouvinte}/>

        </View>

        <StatusBar style={'auto'}></StatusBar>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  header_background: {
    flex: 1,
    backgroundColor: '#FFE600',
    width: '100%',
    height: 98,
    paddingTop: 44,
    paddingLeft: '5.6%',
    flexDirection: 'row',
    borderRadius: 5,

  },


  section_dadosusuarios: {
    flex: 1,
    flexDirection: 'column',
    top: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem_usuario: {
    backgroundColor: 'gray',
    width: 200,
    height: 200,
    borderRadius: 100
  },
  lbl_nome: {
    fontSize: 30,
    top: 30,
  },
  section_personalinfo: {
    flex: 1,
    top: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },
  section_nicklocalization: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15
  },
  vector_transpa: {
    width: 10,
  },
  section_tempoapp: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15
  },
  lbl_caption: {
    fontSize: 15
  },
  section_bio: {
    flex: 1,
    top: 60,
    justifyContent: 'center'

  },
  lbl_bio: {
    fontSize: 18,
    textAlign: 'center'

  },
  selos_background: {
    flex: 1,
    backgroundColor: '#FFE600',
    width: '100%',
    height: 1200,
    top: 525,
    flexDirection: 'column',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',

  },
  title_Selos: {
    width: 113,
    height: 36,
    top: -400,
    right: 100


  },
  selo_bemhumorado: {
    width: 313,
    height: 130,
    top: -360

  },
  selo_bomconselheiro: {
    width: 313,
    height: 130,
    top: -300
  },
  selo_bomouvinte: {
    width: 313,
    height: 130,
    top: -240
  },

});
