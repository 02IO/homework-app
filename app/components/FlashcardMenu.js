import React from 'react';
import { Text, View, StatusBar, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Theme from '../constants/Theme';
import TopicIcon from './FlashcardTopic';

export function FlashcardMenu({ props }) {
    return (
    <>
      <ScrollView style={styles.scrollStyle} horizontal={true} showsHorizontalScrollIndicator={false} >
          <TopicIcon title='Python' topic='32' link={null}/>
          <TopicIcon title='HTML' topic='50' />
          <TopicIcon title='Netwerken' topic='12' />
          <TopicIcon title='Engels' topic='20' />
          <TopicIcon title='Nederlands' topic='40' />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  
  scrollStyle: {
      marginTop: '10%',
      marginLeft: '4%',
      marginRight: '4%',
  },

});