import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const boxImg = require('../assets/box.png');
const plusImg = require('../assets/plus.png');

export const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headingText}>Wallet</Text>
      <View style={styles.actionBlock}>
        <View style={[styles.ImageContainer, styles.marginRight]}>
          <Image style={styles.ImgStyles} source={boxImg} />
        </View>
        <View style={styles.ImageContainer}>
          <Image style={styles.ImgStyles} source={plusImg} />
        </View>
        <View></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headingText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  actionBlock: {
    flexDirection: 'row',
    borderWidth: 2,
  },
  ImageContainer: {
    backgroundColor: 'white',
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
  },
  ImgStyles: {
    width: 20,
    height: 20,
  },
  marginRight: {
    marginRight: 10, // Adjust the value as needed
  },
});
