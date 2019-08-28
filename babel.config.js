module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@react-native-community/react-native-image-picker': './src/index.ts',
        },
        cwd: 'babelrc',
      },
    ],
  ],
};
