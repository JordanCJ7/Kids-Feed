import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setMealsServed, updateMealDistribution } from '../store/mealSlice';

const { width } = Dimensions.get('window');

const DashboardScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { mealsServed, totalMealsNeeded, mealDistribution } = useSelector((state) => state.meals);
  const { totalDonations, donationGoal } = useSelector((state) => state.donations);

  useEffect(() => {
    // Simulate loading initial data
    dispatch(setMealsServed(750));
    dispatch(updateMealDistribution([
      { school: 'Rural Primary School A', meals: 200 },
      { school: 'Rural Primary School B', meals: 180 },
      { school: 'Rural Primary School C', meals: 220 },
      { school: 'Rural Primary School D', meals: 150 },
    ]));
  }, [dispatch]);

  const mealProgress = (mealsServed / totalMealsNeeded) * 100;
  const donationProgress = (totalDonations / donationGoal) * 100;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Zero Hunger Initiative</Text>
        <Text style={styles.headerSubtitle}>Supporting Rural Schools</Text>
      </View>

      {/* Meal Progress Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Meal Distribution Progress</Text>
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${mealProgress}%` }]} />
          </View>
          <Text style={styles.progressText}>
            {mealsServed} / {totalMealsNeeded} meals served
          </Text>
        </View>
      </View>

      {/* Donation Progress Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Donation Progress</Text>
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, styles.donationFill, { width: `${donationProgress}%` }]} />
          </View>
          <Text style={styles.progressText}>
            ${totalDonations} / ${donationGoal} raised
          </Text>
        </View>
        <TouchableOpacity
          style={styles.donateButton}
          onPress={() => navigation.navigate('Donation')}
        >
          <Text style={styles.donateButtonText}>Make a Donation</Text>
        </TouchableOpacity>
      </View>

      {/* School Distribution */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Meals by School</Text>
        {mealDistribution.map((item, index) => (
          <View key={index} style={styles.schoolItem}>
            <Text style={styles.schoolName}>{item.school}</Text>
            <Text style={styles.schoolMeals}>{item.meals} meals</Text>
          </View>
        ))}
      </View>

      {/* Impact Stats */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Impact Statistics</Text>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>4</Text>
            <Text style={styles.statLabel}>Schools Supported</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>320</Text>
            <Text style={styles.statLabel}>Children Fed Daily</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>98%</Text>
            <Text style={styles.statLabel}>Attendance Rate</Text>
          </View>
        </View>
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
    backgroundColor: '#4CAF50',
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
  progressContainer: {
    marginBottom: 10,
  },
  progressBar: {
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    marginBottom: 10,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 5,
  },
  donationFill: {
    backgroundColor: '#FF9800',
  },
  progressText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  donateButton: {
    backgroundColor: '#FF9800',
    padding: 15,
    borderRadius: 8,
    marginTop: 15,
    alignItems: 'center',
  },
  donateButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  schoolItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  schoolName: {
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
  schoolMeals: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});

export default DashboardScreen;