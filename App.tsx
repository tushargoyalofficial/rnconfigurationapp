import React, { FC, memo } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Appbar from '@/components/Appbar';

const App: FC = () => {
  return (
    <>
      <Appbar backgroundColor="red" title="Here goes the title youyouououou" />
      <View style={styles.container}>
        <Text>This is App.tsx file...</Text>
        <View style={{ padding: 24 }}>
          <Button title="Hello" color="#F44336" onPress={() => { }} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default memo(App);
