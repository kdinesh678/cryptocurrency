import React, {PropsWithChildren} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface PageViewProps {
  horizontalSpacing: boolean;
  verticalSpacing: boolean;
  title: string;
}

const PageView: React.FC<PropsWithChildren<Partial<PageViewProps>>> = props => {
  const {
    horizontalSpacing = true,
    verticalSpacing = true,
    title,
    children = null,
  } = props;

  const containerStyle = {
    paddingVertical: verticalSpacing ? 8 : 0,
    paddingHorizontal: horizontalSpacing ? 8 : 0,
  };

  return (
    <View style={containerStyle}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  titleContainer: {
    padding: 8,
  },
});

export default PageView;
