import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';

class BotonDeAtras extends PureComponent {
  render(){
      const { col, press } = this.props;

    return (
      <View style={styles.container}>
          <Icon 
          size={50}
          name="arrow-left-circle"
          type="material-community"
          color={ col } 
          onPress={press}
          />
      </View>
    );
  }
}

export default BotonDeAtras;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
