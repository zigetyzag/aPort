# aPortApp - EV Driveway Charging App

A React Native application for sharing and renting private EV charging stations. This app allows users to find nearby driveways with EV chargers, rent charging time, and also list their own driveways to earn income.

## Features

- Onboarding screens to explain the app's functionality
- User authentication (login/signup)
- Dual mode: Find chargers or list your driveway
- Home screen showing nearby private charging spots
- Detailed driveway information and booking flow
- Real-time tracking of charging progress
- Transaction history and earnings dashboard
- User profile and driveway listing management
- Payment method management
- Help and support section

## Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the Metro server:
   ```
   npm start
   ```
4. Run on Android:
   ```
   npm run android
   ```
5. Run on iOS:
   ```
   npm run ios
   ```

## Project Structure

- `/src/assets` - Application assets and images
- `/src/components` - Reusable UI components
- `/src/navigation` - Navigation configuration
- `/src/screens` - Application screens
- `/src/services` - API services and backend integration
- `/src/utils` - Utility functions

## Note

This is a demo app showing UI implementation for an EV driveway sharing app concept. The backend functionality is not implemented, and all data is mocked. In a production version, this would integrate with maps, payment processors, and a user management system.

## Dependencies

- React Navigation
- React Native SVG (for icons and graphics)
- React Native Screens
- React Native Safe Area Context