import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { addDonation } from '../store/donationSlice';

const DonationScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [selectedAmount, setSelectedAmount] = useState(null);

  const predefinedAmounts = [10, 25, 50, 100, 250];

  const handleDonation = () => {
    const donationAmount = parseFloat(amount);
    
    if (!donationAmount || donationAmount <= 0) {
      Alert.alert('Invalid Amount', 'Please enter a valid donation amount.');
      return;
    }

    if (!donorName.trim()) {
      Alert.alert('Missing Information', 'Please enter your name.');
      return;
    }

    const donation = {
      amount: donationAmount,
      donor: donorName.trim(),
      date: new Date().toISOString(),
      id: Date.now().toString(),
    };

    dispatch(addDonation(donation));

    Alert.alert(
      'Thank You!',
      `Your donation of $${donationAmount} has been received. Thank you for supporting the Zero Hunger initiative!`,
      [
        {
          text: 'OK',
          onPress: () => {
            setAmount('');
            setDonorName('');
            setSelectedAmount(null);
            navigation.goBack();
          },
        },
      ]
    );
  };

  const selectAmount = (value) => {
    setSelectedAmount(value);
    setAmount(value.toString());
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Make a Donation</Text>
        <Text style={styles.headerSubtitle}>
          Help us feed children in rural schools
        </Text>
      </View>

      {/* Impact Information */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Your Impact</Text>
        <View style={styles.impactItem}>
          <Text style={styles.impactText}>$10 = 5 nutritious meals</Text>
        </View>
        <View style={styles.impactItem}>
          <Text style={styles.impactText}>$25 = 12 nutritious meals</Text>
        </View>
        <View style={styles.impactItem}>
          <Text style={styles.impactText}>$50 = 25 nutritious meals</Text>
        </View>
        <View style={styles.impactItem}>
          <Text style={styles.impactText}>$100 = 50 nutritious meals + supplies</Text>
        </View>
      </View>

      {/* Quick Amount Selection */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Quick Select Amount</Text>
        <View style={styles.amountContainer}>
          {predefinedAmounts.map((value) => (
            <TouchableOpacity
              key={value}
              style={[
                styles.amountButton,
                selectedAmount === value && styles.selectedAmountButton,
              ]}
              onPress={() => selectAmount(value)}
            >
              <Text
                style={[
                  styles.amountButtonText,
                  selectedAmount === value && styles.selectedAmountText,
                ]}
              >
                ${value}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Custom Amount */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Donation Details</Text>
        
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Donation Amount ($)</Text>
          <TextInput
            style={styles.input}
            value={amount}
            onChangeText={(text) => {
              setAmount(text);
              setSelectedAmount(null);
            }}
            placeholder="Enter custom amount"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Your Name</Text>
          <TextInput
            style={styles.input}
            value={donorName}
            onChangeText={setDonorName}
            placeholder="Enter your name"
          />
        </View>

        <TouchableOpacity style={styles.donateButton} onPress={handleDonation}>
          <Text style={styles.donateButtonText}>
            Donate ${amount || '0'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Security Notice */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Security & Trust</Text>
        <Text style={styles.securityText}>
          • All donations are processed securely
        </Text>
        <Text style={styles.securityText}>
          • 100% of donations go directly to feeding programs
        </Text>
        <Text style={styles.securityText}>
          • You will receive a confirmation receipt
        </Text>
        <Text style={styles.securityText}>
          • Tax-deductible receipts available
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#FF9800',
    padding: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'white',
    opacity: 0.9,
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'white',
    margin: 15,
    padding: 20,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  impactItem: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  impactText: {
    fontSize: 16,
    color: '#4CAF50',
    fontWeight: '500',
  },
  amountContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  amountButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
    width: '30%',
    alignItems: 'center',
  },
  selectedAmountButton: {
    backgroundColor: '#FF9800',
  },
  amountButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  selectedAmountText: {
    color: 'white',
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: 'white',
  },
  donateButton: {
    backgroundColor: '#4CAF50',
    padding: 18,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  donateButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  securityText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    paddingLeft: 5,
  },
});

export default DonationScreen;