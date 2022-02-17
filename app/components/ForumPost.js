import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

function ForumPost({title, name, views, onPress, props}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        style={styles.button}
      >
        <Text style={styles.titlePost}>{title}</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.loremIpsum}>{views} views</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    width: 338,
    height: 86,
    backgroundColor: "rgba(68,67,67,1)",
    borderRadius: 18,
    marginLeft: 18
  },
  titlePost: {
    fontFamily: 'System',
    color: "rgba(255,255,255,1)",
    marginTop: 9,
    marginLeft: 41
  },
  name: {
    fontFamily: 'System',
    color: "rgba(255,255,255,1)",
    marginLeft: 41
  },
  loremIpsum: {
    fontFamily: 'System',
    color: "rgba(255,255,255,1)",
    marginTop: 18,
    marginLeft: 262
  }
});

export default ForumPost;