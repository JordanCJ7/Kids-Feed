# KidsFeed React Native App - Development Guide

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or later)
- npm or yarn
- Expo CLI (optional, but recommended)
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

### Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Run on specific platforms:**
   ```bash
   npm run android  # For Android
   npm run ios      # For iOS
   npm run web      # For web browser
   ```

## 📱 Project Overview

This is a React Native app built with Expo that supports the Zero Hunger initiative by managing school meal programs in rural schools.

### Features Implemented
- **Dashboard Screen**: Real-time meal tracking and statistics
- **Donation Screen**: Seamless donation process with impact visualization
- **Redux State Management**: Centralized state for meals and donations
- **Navigation**: Stack navigation between screens
- **Responsive Design**: Optimized for mobile devices

### Technology Stack
- **Framework**: React Native with Expo
- **State Management**: Redux Toolkit
- **Navigation**: React Navigation
- **Styling**: React Native StyleSheet
- **Development**: Metro bundler

## 📁 Project Structure

```
├── App.js                 # Main app component
├── app.json              # Expo configuration
├── babel.config.js       # Babel configuration
├── metro.config.js       # Metro bundler configuration
├── package.json          # Dependencies and scripts
├── assets/               # Images, icons, and static files
└── src/
    ├── components/       # Reusable UI components
    │   ├── Card.js
    │   └── ProgressBar.js
    ├── navigation/       # Navigation configuration
    │   └── AppNavigator.js
    ├── screens/          # Screen components
    │   ├── DashboardScreen.js
    │   └── DonationScreen.js
    ├── services/         # API and external services
    │   └── api.js
    ├── store/            # Redux store and slices
    │   ├── store.js
    │   ├── mealSlice.js
    │   └── donationSlice.js
    └── utils/            # Helper functions and constants
        └── helpers.js
```

## 🎨 Design System

### Colors
- Primary: #4CAF50 (Green - representing growth and nutrition)
- Secondary: #FF9800 (Orange - for donations and calls to action)
- Background: #f5f5f5 (Light gray)
- Text: #333333 (Dark gray)

### Components
- **Card**: Reusable container component
- **ProgressBar**: Visual progress indicator
- **Custom buttons and inputs**: Styled for consistency

## 🔄 State Management

The app uses Redux Toolkit for state management:

### Meal State
- `mealsServed`: Number of meals distributed
- `totalMealsNeeded`: Target meal count
- `mealDistribution`: Array of school meal data

### Donation State
- `totalDonations`: Total amount donated
- `donationGoal`: Target donation amount
- `recentDonations`: List of recent donations

## 🌐 API Integration

API service layer is set up in `src/services/api.js` with endpoints for:
- Meal tracking and updates
- Donation processing
- School statistics
- Overall program metrics

## 📱 Screens

### Dashboard Screen
- Overview of meal distribution progress
- Donation progress visualization
- School-wise meal statistics
- Impact metrics display

### Donation Screen
- Quick amount selection
- Custom donation input
- Impact information
- Secure donation processing

## 🚀 Next Steps for Development

1. **Add API Integration**: Connect to your backend services
2. **Implement Authentication**: User login and registration
3. **Add More Screens**: 
   - Profile/Settings
   - School details
   - Donation history
   - Reports and analytics
4. **Enhance UI/UX**:
   - Add animations and transitions
   - Implement dark mode
   - Improve accessibility
5. **Add Push Notifications**: For meal alerts and updates
6. **Testing**: Unit tests and integration tests
7. **Assets**: Create proper app icons and splash screens

## 🛠️ Development Commands

```bash
# Start development server
npm start

# Start with specific platform
npm run android
npm run ios  
npm run web

# Clear cache
npx expo start -c

# Install new packages
npx expo install <package-name>

# Build for production
npx expo build:android
npx expo build:ios
```

## 📝 Contributing

1. Follow React Native best practices
2. Use meaningful commit messages
3. Test on multiple devices/simulators
4. Update documentation for new features
5. Follow the established code style

## 🐛 Troubleshooting

### Common Issues
1. **Metro bundler issues**: Clear cache with `npx expo start -c`
2. **Dependency conflicts**: Run `npx expo install --fix`
3. **Android build issues**: Ensure Android SDK is properly configured
4. **iOS build issues**: Make sure Xcode is up to date

### Getting Help
- Check Expo documentation: https://docs.expo.dev/
- React Navigation docs: https://reactnavigation.org/
- Redux Toolkit docs: https://redux-toolkit.js.org/

## 📄 License

This project is licensed under the terms specified in the LICENSE file.