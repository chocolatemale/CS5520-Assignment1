import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Card from '../components/Card';
import colors from '../colors';
import { validateEmail, validatePhoneNumber } from '../components/Validation';


const StartingScreen = ({ onSignUp, email: initialEmail, phone: initialPhone }) => {
  const [email, setEmail] = useState(initialEmail || '');
  const [phone, setPhone] = useState(initialPhone || '');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const handleEmailChange = (text) => {
    setEmail(text);
    setEmailError(validateEmail(text) ? '' : 'Invalid email address');
  };

  const handlePhoneChange = (text) => {
    setPhone(text);
    setPhoneError(validatePhoneNumber(text) ? '' : 'Invalid phone number');
  };

  const handleReset = () => {
    setEmail('');
    setPhone('');
    setEmailError('');
    setPhoneError('');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Card>
        <Text>Email:</Text>
        <TextInput
          style={{ borderColor: colors.gray, borderWidth: 1, padding: 5 }}
          onChangeText={handleEmailChange}
          value={email}
        />
        {emailError ? <Text style={{ color: 'red' }}>{emailError}</Text> : null}

        <Text>Phone:</Text>
        <TextInput
          style={{ borderColor: colors.gray, borderWidth: 1, padding: 5 }}
          onChangeText={handlePhoneChange}
          value={phone}
          keyboardType="numeric"
        />
        {phoneError ? <Text style={{ color: 'red' }}>{phoneError}</Text> : null}

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
          <TouchableOpacity
            style={{
              backgroundColor: colors.secondary,
              padding: 10,
              alignItems: 'center',
              flex: 1,
            }}
            onPress={handleReset}
          >
            <Text style={{ color: colors.white }}>Reset</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: colors.primary,
              padding: 10,
              alignItems: 'center',
              flex: 1,
              marginLeft: 10,
            }}
            onPress={() => onSignUp(email, phone)}
          >
            <Text style={{ color: colors.white }}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </Card>
    </View>
  );
};

export default StartingScreen;
