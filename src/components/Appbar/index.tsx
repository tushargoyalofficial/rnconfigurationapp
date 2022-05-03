import React, {FC, memo} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface IProps {
  backgroundColor: string;
  title: string;
}

const Appbar: FC<IProps> = ({backgroundColor, title}) => (
  <View style={[styles.container, {backgroundColor}]}>
    <View style={styles.spacingSmall}>
      <Text>Go Back</Text>
    </View>
    <View style={styles.spacingLarge}>
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
    </View>
    <View style={styles.spacingSmall}>
      <Text>Right icon/element</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 64,
    padding: 12,
    width: '100%',
    elevation: 5,
    position: 'absolute',
    top: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },
  spacingSmall: {
    flex: 0.2,
  },
  spacingLarge: {
    flex: 0.6,
  },
});

export default memo(Appbar);
