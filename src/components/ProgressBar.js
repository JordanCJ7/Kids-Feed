import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/helpers';

const ProgressBar = ({ progress, color = colors.primary, height = 10, showPercentage = true }) => {
  const progressPercentage = Math.min(Math.max(progress, 0), 100);

  return (
    <View style={styles.container}>
      <View style={[styles.progressBar, { height }]}>
        <View
          style={[
            styles.progressFill,
            {
              width: `${progressPercentage}%`,
              backgroundColor: color,
              height,
            },
          ]}
        />
      </View>
      {showPercentage && (
        <Text style={styles.percentageText}>{Math.round(progressPercentage)}%</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  progressBar: {
    backgroundColor: colors.border,
    borderRadius: 5,
    marginBottom: 5,
  },
  progressFill: {
    borderRadius: 5,
  },
  percentageText: {
    fontSize: 12,
    color: colors.textSecondary,
    textAlign: 'right',
  },
});

export default ProgressBar;