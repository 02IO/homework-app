import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Theme from '../constants/Theme';

function TopicIcon({ title, topic, link, navigation, props}) {
  return (
    <View style={styles.container}> 
        <TouchableOpacity onPress={link}>
        <View style={styles.big_rect}>
            <View style={styles.small_rect}>
                <Text style={styles.topics}>{topic} topics</Text>
                <Text style={styles.title_style}>{title}</Text>
            </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "visible",
    width: 198,
    height: 139,
    marginRight: 10,
  },
  big_rect: {
    width: 198,
    height: 139,
    backgroundColor: Theme.COLORS.Slate,
    borderRadius: 20,
    elevation: 5,
  },
  small_rect: {
    width: 150,
    height: 103,
    backgroundColor: Theme.COLORS.Slate,
    borderRadius: 20
  },

  title_style: {
    color: "rgba(255,255,255,1)",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: -37,
    marginLeft: 21,
    marginBottom: 100,
  },

  topics: {

    color: "rgba(255,255,255,1)",
    fontSize: 15,
    marginTop: 61,
    marginLeft: 21,
    marginBottom: -10
  },

});

export default TopicIcon;