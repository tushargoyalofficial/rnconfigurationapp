import React, {FC, memo} from 'react';
import {StyleSheet, View, Text} from 'react-native';

const App: FC = () => {
  return (
    <View style={[styles.container]}>
      <Text>This is App.tsx file...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default memo(App);
