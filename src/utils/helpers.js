// Utility functions for the KidsFeed app

// Format currency for display
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

// Format large numbers with commas
export const formatNumber = (num) => {
  return new Intl.NumberFormat('en-US').format(num);
};

// Calculate percentage
export const calculatePercentage = (current, total) => {
  if (total === 0) return 0;
  return Math.round((current / total) * 100);
};

// Format date for display
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

// Validate email format
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Generate unique ID
export const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Truncate text with ellipsis
export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

// Get meal cost per dollar
export const getMealsPerDollar = () => {
  return 2; // Assuming $1 feeds 2 meals
};

// Calculate meals from donation amount
export const calculateMealsFromDonation = (donationAmount) => {
  return donationAmount * getMealsPerDollar();
};

// Color scheme for the app
export const colors = {
  primary: '#4CAF50',
  secondary: '#FF9800',
  background: '#f5f5f5',
  white: '#ffffff',
  text: '#333333',
  textSecondary: '#666666',
  border: '#e0e0e0',
  success: '#4CAF50',
  warning: '#FF9800',
  error: '#F44336',
  info: '#2196F3',
};

// Screen dimensions utility
export const getScreenDimensions = () => {
  const { Dimensions } = require('react-native');
  return Dimensions.get('window');
};