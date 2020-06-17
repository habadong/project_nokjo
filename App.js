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
const test =
  '/list?stDt=2015-11-18&stTm=00&edDt=2015-11-18&edTm=24&sujCode=333&fcltyMngNo=4824012333&liIndDiv=1&numOfRows=1&pageNo=1&serviceKey=fC9uHQywpBJDPJ7PqWAOUvvS2HqlTkmDRtgm3IJCkyk94BPAPOZXPZKFsG3Oh9cTHSLTs%2B5s8atJTGeKegqHJA%3D%3D';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  _onSetData = async () => {
    const data = await apiGET(test);
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
