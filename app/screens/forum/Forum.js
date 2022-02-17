import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, FlatList, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ForumPost from '../../components/ForumPost';
import Icons from '../../constants/Icons';

export class ForumDetail extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          data: [], 
          isLoading: true
        };
    }

    async getDetails() {
      try {
        const response = await fetch('http://172.16.137.126:8080/app_project/post_details.php');
        const json = await response.json();
        console.log(json);
        // Alert.alert(JSON.stringify(json));
        this.setState({ data: json });
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ isLoading: false });
      }
    }

    componentDidMount(){
      this.getDetails();
    }

    onRefresh() {
      this.getDetails();
    }

    renderItem = ({ item }) => (
      <ForumPost title={item.title} name={item.name} views={item.views}/>
    );  

    render() {
    const { data, isLoading } = this.state;

    return (
    <>
      <StatusBar barStyle="dark-content"/>
      <SafeAreaView style={styles.container}>
      <Image style={styles.hamburgerStyle}
        source={Icons.hamburger_left_icon}
      />
        <Text style={styles.baseText}>Python Discussions</Text>

        <View style={styles.container}>
          {isLoading ? <ActivityIndicator/> : (
          <FlatList
            onRefresh={() => this.onRefresh()}
            refreshing={this.state.isLoading}
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={this.renderItem}
          />
        )}
        </View>

          <View style={styles.no_account}>
            <Text style={{color: '#9B9B9B'}}>
              Home Page:  
              <Text style={{color: '#fff'}}  onPress={() => this.props.navigation.navigate('Home')} > Click here</Text>
            </Text>
          </View>
      </SafeAreaView>
    </>
  );
  }
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#161616',
    justifyContent: 'center', 
    alignItems: 'center',
  },

  baseText: {
    color: '#fff',
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 23,
    justifyContent: 'center', 
    alignItems: 'center',
    marginRight: '34%',
    marginBottom: '10%'
  },

  logo: {
    marginTop: '-40%',
    justifyContent: 'center', 
    alignItems: 'center',
    resizeMode: 'contain',
    width: '80%',
    height: '80%',
  },
  
  inputView: {
    marginTop: -250,
    width: '70%',
    justifyContent: 'center', 
    alignItems: 'center',
  },

  input: {
    width: '90%',
    marginTop: '5%',
    backgroundColor: '#161616',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#9B9B9B',
    padding: 15,
  },

  button_password: {
    marginTop: '15%',
    justifyContent: 'center', 
    alignItems: 'center',
  },

  forgotPassword: {
    color: '#9B9B9B',
    fontFamily: 'Arial',
    marginTop: 20,
    fontSize: 17,

  },

  no_account: {
    marginTop: '55%',
    justifyContent: 'center', 
    alignItems: 'center',
  },

  sign_up_here: {
    color: '#3068DE',
  },

  hamburgerStyle: {
    width: 35,
    height: 35,
    marginRight: '80%',
    marginBottom: '5%',
  },

});