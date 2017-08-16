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
  TouchableOpacity,
  ScrollView
} from 'react-native';
import {
  StackNavigator
} from 'react-navigation';
export default class homeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  static navigationOptions = {
    title: '录取信息查询'
  };

  render() {
    const _this = this.props.navigation
    return (
      <View style={styles.container}> 
        <View style={styles.banner}>
          <Image style={styles.bannerImg} source={require('../img/analysis-banner.jpg')} />          
        </View>
        <ScrollView>
        <View style={styles.menuTop}>
          <View style={styles.menuLeft}>
            <TouchableOpacity  style={styles.province} onPress={()=>_this.navigate('Province')} >
              <Image style={styles.iconProvinceImg} source={require('../img/province.png')} />
              <View  style={styles.ProvinceFontBox}>
                <Text style={styles.ProvinceFont}>根据地域</Text>
                <Text style={styles.ProvinceFontDetail}>根据省份查询院校录取详情</Text>
              </View>              
            </TouchableOpacity>
          </View>
          <View style={styles.menuRight}>
            <TouchableOpacity  style={styles.profession} onPress={()=>_this.navigate('Province')}>
              <Image style={styles.iconProfessionImg} source={require('../img/profession.png')} />
              <View  style={styles.ProfessionFontBox}>
                <Text style={styles.ProfessionFont}>根据专业</Text>
                <Text style={styles.ProfessionFontDetail}>根据专业查询院校录取详情</Text>
              </View>              
            </TouchableOpacity>
            <TouchableOpacity  style={styles.result} onPress={()=>_this.navigate('Province')}>
              <Image style={styles.iconProfessionImg} source={require('../img/result.png')} />
              <View  style={styles.ProfessionFontBox}>
                <Text style={styles.ProfessionFont}>根据成绩</Text>
                <Text style={styles.ProfessionFontDetail}>根据高考分数和位次查询录取详情</Text>
              </View>              
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.menuFt}>
          <View style={styles.menuFtLeft}>
            <TouchableOpacity  style={styles.school} onPress={()=>_this.navigate('Province')}>
              <Image style={styles.iconProfessionImg} source={require('../img/profession.png')} />
              <View  style={styles.ProfessionFontBox}>
                <Text style={styles.ProfessionFont}>学校类型</Text>
                <Text style={styles.ProfessionFontDetail}>根据学校类型查询院校录取详情</Text>
              </View>              
            </TouchableOpacity>
          </View>
          <View style={styles.menuFtRight}>
            <TouchableOpacity  style={styles.same} onPress={()=>_this.navigate('Province')}>
              <Image style={styles.iconProfessionImg} source={require('../img/same.png')} />
              <View  style={styles.ProfessionFontBox}>
                <Text style={styles.ProfessionFont}>同分去向</Text>
                <Text style={styles.ProfessionFontDetail}>查询同样分数或排名的考生录取去向</Text>
              </View>              
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bannerBottom}>
          <Image style={styles.bannerBottomImg} source={require('../img/banner-bottom.png')} />
        </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  banner: {
    flexDirection: 'row',
    height: 200,
  },
  bannerImg: {
    flex: 1,
    height: 200,
    resizeMode: 'stretch'
  },
  menuTop: {
    flexDirection: 'row',
    flex: 1,
    paddingLeft: 10,
    paddingTop: 10,
    paddingRight: 10,
    justifyContent: 'space-between',
  },
  menuLeft: {
    flex: 1,
    height: 290,
    paddingRight: 5
  },
  province: {
    flexDirection: 'column',
    flex: 1,
    height: 290,
    backgroundColor: '#fe6b5b',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconProvinceImg: {
    width: 90,
    height: 90,
  },
  ProvinceFontBox: {
    alignItems: 'center'
  },
  ProvinceFont: {
    paddingTop: 14,
    fontSize: 14,
    color: '#fff'
  },
  ProvinceFontDetail: {
    paddingTop: 10,
    fontSize: 12,
    color: '#fff'
  },
  menuRight: {
    flexDirection: 'column',
    flex: 1,
    paddingLeft: 5,
    height: 290
  },
  profession: {
    height: 140,
    marginBottom: 10,
    backgroundColor: '#ffba21',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconProfessionImg: {
    width: 50,
    height: 50,
  },
  ProfessionFontBox: {
    alignItems: 'center'
  },
  ProfessionFont: {
    paddingTop: 8,
    fontSize: 14,
    color: '#fff'
  },
  ProfessionFontDetail: {
    paddingTop: 6,
    fontSize: 12,
    color: '#fff'
  },
  result: {
    height: 140,
    marginBottom: 10,
    backgroundColor: '#ff7e00',
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuFt: {
    flexDirection: 'row',
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 30,
    justifyContent: 'space-between',
  },
  menuFtLeft: {
    flex: 1,
    height: 140,
    paddingRight: 5
  },
  school: {
    flexDirection: 'column',
    height: 140,
    backgroundColor: '#139aff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuFtRight: {
    flex: 1,
    paddingLeft: 5,
    height: 140
  },
  same: {
    flexDirection: 'column',
    flex: 1,
    height: 140,
    backgroundColor: '#62b332',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bannerBottom: {
    flex: 1,
    flexDirection: 'row',
    height: 100,
  },
  bannerBottomImg: {
    flex: 1,
    height: 100,
    resizeMode: 'stretch'
  },
});