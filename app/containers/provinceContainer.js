import React, {
  Component
} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Picker,
  TouchableOpacity
} from 'react-native';
import schoolArr from '../components/schoolArr.json'
export default class ProvinceContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Subjects: '1', //文1  理5
      Code: '34', //省份
      Batch: '2', //批次
      school: '', //学校编码
      schoolList: []
    }
  }
  componentWillMount() {
    var schoolL = schoolArr.filter(function(el) {
      return ('1' == el.Subjects && '34' == el.Code && '2' == el.Batch);
    });
    this.setState({
      schoolList: schoolL,
      school: schoolL[0].SchoolCode
    })
  }
  static navigationOptions = {
    title: '根据地域',
  };
  subjectChange(lan) {
    var _this = this;
    var schoolL = schoolArr.filter(function(el) {
      if (lan == el.Subjects && _this.state.Code == el.Code && _this.state.Batch == el.Batch) {
        return true;
      }
    });
    this.setState({
      schoolList: schoolL,
      school: schoolL[0].SchoolCode,
      Subjects: lan
    })
  }
  codeChange(lan) {
    var _this = this;
    var schoolL = schoolArr.filter(function(el) {
      if (_this.state.Subjects == el.Subjects && lan == el.Code && _this.state.Batch == el.Batch) {
        return true;
      }
    });
    this.setState({
      schoolList: schoolL,
      school: schoolL[0].SchoolCode,
      Code: lan
    })
  }
  batchChange(lan) {
    var _this = this;
    var schoolL = schoolArr.filter(function(el) {
      if (_this.state.Subjects == el.Subjects && _this.state.Code == el.Code && lan == el.Batch) {
        return true;
      }
    });
    this.setState({
      schoolList: schoolL,
      school: schoolL[0].SchoolCode,
      Batch: lan
    })
  }
  render() {
    var _this = this.props.navigation
    return (
      <View style={styles.container}> 
        <View style={styles.selectBox}>
          <Text style={styles.selectText}>文理科</Text>
          <Picker style={styles.select} prompt="请选择文理科"
            selectedValue={this.state.Subjects}
            onValueChange={(lang)=>this.subjectChange(lang)}> 
            <Picker.Item label="文科" value="1" />
            <Picker.Item label="理科" value="5" />
          </Picker>
        </View>
        <View style={styles.selectBox}>
          <Text style={styles.selectText}>院校所在省份</Text>
          <Picker style={styles.select} prompt="请选择省份"
            selectedValue={this.state.Code}
            onValueChange={(lang) => this.codeChange(lang)}> 
            <Picker.Item label="安徽" value="34" />
            <Picker.Item label="北京" value="11" /> 
            <Picker.Item label="重庆" value="50" /> 
            <Picker.Item label="福建" value="35" /> 
            <Picker.Item label="广东" value="44" /> 
            <Picker.Item label="甘肃" value="62" /> 
            <Picker.Item label="贵州" value="52" /> 
            <Picker.Item label="广西" value="45" /> 
            <Picker.Item label="湖北" value="42" /> 
            <Picker.Item label="黑龙江" value="23" /> 
            <Picker.Item label="河北" value="13" />
            <Picker.Item label="河南" value="41" /> 
            <Picker.Item label="湖南" value="43" /> 
            <Picker.Item label="海南" value="46" /> 
            <Picker.Item label="江苏" value="32" />
            <Picker.Item label="吉林" value="22" /> 
            <Picker.Item label="江西" value="36" /> 
            <Picker.Item label="辽宁" value="21" />
            <Picker.Item label="宁夏" value="64" /> 
            <Picker.Item label="内蒙古" value="15" /> 
            <Picker.Item label="青海" value="63" /> 
            <Picker.Item label="上海" value="31" /> 
            <Picker.Item label="四川" value="51" />
            <Picker.Item label="陕西" value="61" /> 
            <Picker.Item label="山东" value="37" /> 
            <Picker.Item label="山西" value="14" /> 
            <Picker.Item label="天津" value="12" />
            <Picker.Item label="西藏" value="54" /> 
            <Picker.Item label="新疆" value="65" /> 
            <Picker.Item label="云南" value="53" /> 
            <Picker.Item label="浙江" value="33" />
          </Picker>
        </View>
        <View style={styles.selectBox}>
          <Text style={styles.selectText}>选择批次</Text>
          <Picker style={styles.select} prompt="请选择批次"
            selectedValue={this.state.Batch}
            onValueChange={(lang)=>this.batchChange(lang)}> 
            <Picker.Item label="本科提前批" value="1" />
            <Picker.Item label="本科一批" value="2" />
            <Picker.Item label="本科二批A" value="3" />
            <Picker.Item label="本科二批B" value="4" />
            <Picker.Item label="专科" value="6" />
          </Picker>
        </View>
        <View style={styles.selectBox}>
          <Text style={styles.selectText}>学校名称</Text>
          <Picker style={styles.select} prompt="请选择学校" selectedValue={this.state.school} onValueChange={(lang) => this.setState({school: lang})}>
             {
              this.state.schoolList.map((item)=>  <Picker.Item label={item.text} key={item.value} value={item.SchoolCode} />)                      
             }
          </Picker>
        </View>
        <View style={styles.buttonBox}>          
          <TouchableOpacity
            style={styles.button}
            onPress={()=>_this.navigate('ProvinceResult',{
              Subjects: this.state.Subjects, 
              Code: this.state.Code, 
              Batch: this.state.Batch, 
              school: this.state.school,
            })}
          >
            <Text style={styles.buttonText}>点击确定</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.explainBox}>
          <View style={styles.explain}>
            <View>
              <Text style={styles.explainText}>本功能帮助考生根据省份查询院校录取详情，使用流程:</Text>
            </View>
            <View>
              <Text style={styles.explainText}>第一步 确定要查询的 <Text style={styles.explainLabel}>【文理科】</Text></Text>
              <Text style={styles.explainText}>第二步 确定要查询的 <Text style={styles.explainLabel}>【省份】</Text></Text> 
              <Text style={styles.explainText}>第三步 选择 <Text style={styles.explainLabel}>【录取批次】</Text></Text> 
              <Text style={styles.explainText}>第四步 选择符合条件的 <Text style={styles.explainLabel}>【院校】</Text></Text> 
              <Text style={styles.explainText}>第五步 点击查询详情</Text>              
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  selectBox: {
    flexDirection: 'row',
    height: 50,
    paddingLeft: 10,
    paddingTop: 10,
    paddingRight: 10,
    justifyContent: 'space-between',
  },
  selectText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    lineHeight: 34,
  },
  select: {
    flex: 3,
    flexDirection: 'row',
    color: '#139aff',
    height: 50,
    justifyContent: 'flex-end'
  },
  buttonBox: {
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 46
  },
  button: {
    borderRadius: 20,
    height: 38,
    backgroundColor: '#ff7e00',
  },
  buttonText: {
    lineHeight: 26,
    color: '#fff',
    textAlign: 'center',
  },
  explainBox: {
    padding: 10,
    marginTop: 30,
  },
  explain: {
    padding: 10,
    backgroundColor: '#f8f8f8'
  },
  explainText: {
    color: '#999',
    lineHeight: 26
  },
  explainLabel: {
    color: '#ff7e00',
    lineHeight: 26
  }


});