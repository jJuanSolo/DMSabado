import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import firebase from 'firebase';
import { decode, encode } from 'base-64'
import VistaPrincipal from './src/vistas/vistaPrincipal';

if (!global.btoa) {
  global.btoa = encode;
  }
  
if (!global.atob) {
  global.atob = decode;
  }

class App extends PureComponent {
  render(){
    const firebaseConfig = {
      apiKey: "AIzaSyDaanyUsugkUWxW1SePuN0AKYda-oT2krY",
      authDomain: "dispositvosm-6b7fd.firebaseapp.com",
      databaseURL: "https://dispositvosm-6b7fd.firebaseio.com",
      projectId: "dispositvosm-6b7fd",
      storageBucket: "dispositvosm-6b7fd.appspot.com",
      messagingSenderId: "841263318225",
      appId: "1:841263318225:web:ac974884690f5603d2b1f0",
      measurementId: "G-JZVHXP8CPK"
    };

    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
  }
    return (
      <VistaPrincipal />
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
