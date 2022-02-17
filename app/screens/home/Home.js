import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TopicIcon from '../../components/TopicIcon.js';
import Icons from '../../constants/Icons';

import { AuthContext } from "../../routes/Context.js";

export function HomePage({ navigation }) {
    const { signOut } = React.useContext(AuthContext);

    return (
    <>
      <StatusBar barStyle="dark-content"/>
      <SafeAreaView style={styles.container}>
      <Image style={styles.hamburgerStyle}
        source={Icons.hamburger_left_icon}
        />
          <Text style={styles.baseText}>Recent Topics</Text>
          <View style={styles.scrollView}>
          <ScrollView style={styles.scrollStyle} horizontal={true} showsHorizontalScrollIndicator={false} >
            <TopicIcon title='Python' topic='32' link={() => navigation.navigate('ForumDetail')}/>
            <TopicIcon title='C++' topic='50' />
            <TopicIcon title='Engels' topic='12' />
            <TopicIcon title='Netwerken' topic='20' />
            <TopicIcon title='Java' topic='40' />
          </ScrollView>
          </View>
          <View style={styles.no_account}>
            <Text style={{color: '#9B9B9B'}}>
              Login Page:  
              <Text style={{color: '#fff'}}  onPress={signOut} > Click here</Text>
            </Text>
          </View>
      </SafeAreaView>
    </>
  );
}

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
    marginTop: '0%',
    marginRight: '50%',
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
    backgroundColor: '#272B3E',
    borderRadius: 15,
    padding: 15,
  },

  no_account: {
    marginTop: '55%',
    justifyContent: 'center', 
    alignItems: 'center',
  },

  containerStyle: {
    marginTop: '20%',
    flexDirection: 'row-reverse',
  },

  scrollView: {
    height: '30%',

  },

  scrollStyle: {
    marginTop: '10%',
    marginLeft: '4%',
    marginRight: '4%',
  },

  hamburgerStyle: {
    width: 35,
    height: 35,
    marginRight: '80%',
    marginTop: '-35%',
    marginBottom: '5%',
  }

});