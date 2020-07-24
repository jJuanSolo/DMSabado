import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import Atras from '../componentes/botonDeAtras';

class VistaPrincipal extends PureComponent {
  render(){
    return (
      <View style={styles.container}>
        <Atras col='green' press={console.log('verde')}/>
        <Atras col='blue' press={console.log('azul')}/>
      </View>
    );
  }
}

export default VistaPrincipal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});