import React, {FC, memo} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface IProps {
  backgroundColor: string;
  title: string;
}

const Header: FC<IProps> = ({backgroundColor, title}) => (
  <View style={[styles.container, {backgroundColor}]}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 64,
    width: '100%',
    elevation: 5,
    position: 'absolute',
    top: 0,
  },
  title: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default memo(Header);
