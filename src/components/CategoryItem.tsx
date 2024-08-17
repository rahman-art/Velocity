import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {CategoryItemProp} from '../types';

const {width: screenWidth} = Dimensions.get('window');

type CategoryInterface = PropsWithChildren<{
  item: CategoryItemProp;
}>;

const CategoryItem = ({item}: CategoryInterface): React.JSX.Element => {
  return (
    <View style={styles.carouselItem}>
      <View style={styles.circle}>
        <Image source={{uri: item.image}} style={styles.image} />
      </View>
      <Text style={styles.title}>{item.category}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselItem: {
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontSize: 12,
    textAlign: 'center',
    width: 95,
  },
});

export default CategoryItem;
