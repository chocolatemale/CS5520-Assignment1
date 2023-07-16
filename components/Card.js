// Card.js
import React from 'react';
import { View, Platform, StyleSheet } from 'react-native';
import colors from '../colors';

const Card = ({ children }) => {
  return (
    <View style={styles.card}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: colors.gray,
        shadowOpacity: 0.5,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
    padding: 20,
    marginBottom: 20,
  },
});

export default Card;
