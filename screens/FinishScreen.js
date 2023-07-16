import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Card from '../components/Card';
import colors from '../colors';

const FinishScreen = ({ confirmed, phone, onRestart }) => {
  const getLastDigit = (number) => {
    return number % 10;
  };

  const getImageUrl = (lastDigit) => {
    return `https://picsum.photos/id/${lastDigit}/100/100`;
  };

  const renderContent = () => {
    if (confirmed) {
      const lastDigit = getLastDigit(phone);
      const imageUrl = getImageUrl(lastDigit);

      return (
        <>
          <Text style={{ fontSize: 20, marginBottom: 10 }}>Thank you for signing up! Here is a picture for you (based on the last digit of your phone number).</Text>
          <Image source={{ uri: imageUrl }} style={{ width: 100, height: 100, alignSelf: 'center', marginBottom: 20 }} />
        </>
      );
    } else {
      return (
        <>
          <Text style={{ fontSize: 20, marginBottom: 10 }}>Sorry to see you go.</Text>
          <Image source={require('../assets/sad-smiley-face.png')} style={{ width: 100, height: 100, alignSelf: 'center', marginBottom: 20 }} />
        </>
      );
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Card>
        {renderContent()}
      </Card>

      <TouchableOpacity
        style={{ backgroundColor: colors.primary, padding: 10, marginTop: 10, alignItems: 'center' }}
        onPress={onRestart}
      >
        <Text style={{ color: colors.white }}>Start Again</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FinishScreen;
