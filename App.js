import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {apiGET} from './services/get';

const {height, width} = Dimensions.get('window');
const key =
  'JYzJfcvHK1bq%2Fu2TTNgl%2B4lcrLCR7XsbDJ7b%2BGt0EP5XX5vcfBFJm4LPILroyFHj87GpIbbPVMp8EOndskzgYA%3D%3D';
const test =
  '/list?stDt=2015-11-18&stTm=00&edDt=2015-11-18&edTm=24&sujCode=333&fcltyMngNo=4824012333&liIndDiv=1&numOfRows=1&pageNo=1&serviceKey=';
const encoded = encodeURI(key);
class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  _onSetData = async () => {
    const data = await apiGET(test + encoded);
    console.log('@@@@@@@');
    console.log(data);
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>hello!</Text>
        <Text>there!</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this._onSetData()}>
          <Text>button</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.button, backgroundColor: 'blue'}}
          onPress={() => console.log(encoded)}>
          <Text style={{color: 'white'}}>확인</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: width - 50,
    height: 50,
    marginTop: 15,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
