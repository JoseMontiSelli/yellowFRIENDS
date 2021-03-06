import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, SectionList } from 'react-native';

// Dados das configurações
import DADOS_Configuracoes from '../Data/DATA_Configuracoes'
// Templates
import CardConfiguracao from './Components/Template_CardConfiguracoes';
import SectionConfuracao from './Components/Template_Configuracao';

export default function Configuracao() {
  return (
    <SafeAreaView style={info.main}>
      <SectionList style={info.list}
          sections={DADOS_Configuracoes}
          keyExtractor={(item, index) => item.nomeConfiguracao + index}

          // Renderiza a sessão da lista
          renderSectionHeader = {({ section: { title } }) => <SectionConfuracao 
                                                            nomeSessao={title} />}

          // Renderiza os items da lista
          renderItem = {({ item }) => <CardConfiguracao
                                      nomeConfiguracao={item.nomeConfiguracao}
                                      descricaoConfiguracao={item.descricao}
                                      iconeConfiguracao={item.icone}
                                      statusConfiguracao={item.status} />}
      />
    </SafeAreaView>
  )
};


const info = StyleSheet.create({
  main: {
    width: '100%',
    maxWidth: 800,
    flex: 1,
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  list: {
    width: '100%',
    marginTop: 10
  }
});


