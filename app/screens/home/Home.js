import React from 'react';
import { Text, View, StatusBar, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../../routes/AuthContextData';
import TopicIcon from '../../components/TopicIcon.js';
import Icons from '../../constants/Icons';
import { styles } from './Styles';

export function HomePage({ navigation }) {
    const { signOut} = useAuth();

    return (
    <>
        <StatusBar barStyle="dark-content"/>
        <SafeAreaView style={ styles.container }>
            <View style={ styles.top } >
                <TouchableOpacity style={styles.hamburgerStyle} onPress={ () => navigation.openDrawer() }>
                    <Image style={styles.hamburgerStyle} source={ Icons.hamburger_menu_icon } />
                </TouchableOpacity>
            </View>
  
            <View style={ styles.topBottom } >
                <Text style={styles.baseText}>Recent Topics</Text>
            </View>
  
            <View style={ styles.middleTop } >
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                    <TopicIcon title='Python' topic='32' link={() => navigation.navigate('ForumDetail')}/>
                    <TopicIcon title='C++' topic='50' />
                    <TopicIcon title='Engels' topic='12' />
                    <TopicIcon title='Netwerken' topic='20' />
                    <TopicIcon title='Java' topic='40' />
                </ScrollView>
            </View>
  
            <View style={ styles.middle } >
                <Text style={styles.h2}>Trending</Text>
            </View>
  
            <View style={ styles.bottom } >
                <View style={styles.no_account}>
                    <Text style={{color: '#9B9B9B'}}>Login Page:  <Text style={{color: '#fff'}}  onPress={ () => signOut() } > Click here</Text>  </Text>
                </View>
            </View>
        </SafeAreaView>
    </>
    );
}
