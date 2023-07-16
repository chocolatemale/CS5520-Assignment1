import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartingScreen from './screens/StartingScreen';
import { validateEmail, validatePhoneNumber } from './components/Validation';
import ConfirmScreen from './screens/ConfirmScreen';
import FinishScreen from './screens/FinishScreen';
import colors from './colors';

const App = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('starting');

  const handleSignUp = (enteredEmail, enteredPhone) => {
    setEmail(enteredEmail);
    setPhone(enteredPhone);
    if (validateEmail(enteredEmail) && validatePhoneNumber(enteredPhone)) {
      setCurrentScreen('confirm');
    }
  };

  const handleConfirm = () => {
    setConfirmed(true);
    setCurrentScreen('finish');
  };

  const handleFinishLater = () => {
    setCurrentScreen('finish');
  };

  const handleRestart = () => {
    setEmail('');
    setPhone('');
    setConfirmed(false);
    setCurrentScreen('starting');
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={[colors.primary, colors.secondary]} style={styles.gradient}>
        {currentScreen === 'starting' && (
          <StartingScreen
            email={email}
            phone={phone}
            onSignUp={handleSignUp}
          />
        )}
        {currentScreen === 'confirm' && (
          <ConfirmScreen
            email={email}
            phone={phone}
            onEdit={() => setCurrentScreen('starting')}
            onConfirm={handleConfirm}
            onFinishLater={handleFinishLater}
          />
        )}
        {currentScreen === 'finish' && (
          <FinishScreen confirmed={confirmed} phone={phone} onRestart={handleRestart} />
        )}
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
});

export default App;
