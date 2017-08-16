import React, {
  Component
} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Picker
} from 'react-native';
import ajax from '../components/ajaxService.js'
export default class ProvinceResultContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolData: []
    }
  }
  componentWillMount() {
    var Data = this.props.navigation.state.params
    var result = ajax.sendAjax('http://120.76.46.101:8686/api/ScenePost/Provinceone', {
      batch: Data.Batch,
      ProvinceCode: Data.Code,
      subjects: Data.Subjects,
      schoolcode: Data.school,
    }).then(data => alert(JSON.parse(data).error), err => alert(11))


  }
  static navigationOptions = {
    title: '根据地域结果',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text></Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }


});