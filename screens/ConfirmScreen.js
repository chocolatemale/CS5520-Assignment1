import React from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import Card from '../components/Card';
import colors from '../colors';

const ConfirmScreen = ({ email, phone, onEdit, onConfirm, onFinishLater }) => {
  return (
    <Modal animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <Card>
          <Text style={{ color: colors.red }}>You have entered:</Text>
          <Text>Email: {email}</Text>
          <Text>Phone: {phone}</Text>
          <Text>Please confirm they are correct.</Text>
        </Card>

        <TouchableOpacity
          style={{
          backgroundColor: colors.secondary,
          padding: 10,
          marginTop: 10,
          alignItems: 'center',
        }}
          onPress={onEdit}
        >
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={onConfirm}
        >
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={onFinishLater}
        >
          <Text style={styles.buttonText}>Finish Later</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  buttonContainer: {
    backgroundColor: colors.primary,
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
  },
});

export default ConfirmScreen;
