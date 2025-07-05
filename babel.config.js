module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // any other plugins here...
    'react-native-reanimated/plugin' // 👈 must be last
  ]
};
