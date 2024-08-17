import {View, Text, StyleSheet, Image} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {CountryUserInterface} from '../types';


type CountryUserItemProp = PropsWithChildren<{
  item: CountryUserInterface;
}>;

const CountryUserItem = ({item}: CountryUserItemProp): React.JSX.Element => {
  return (
    <View style={styles.item}>
      <Image
        source={{uri: item.image}}
        style={styles.secondImage}
        resizeMode="contain"
      />
      <Image
        source={{uri: `https://flagsapi.com/${item.flag}/flat/16.png`}}
        style={styles.flag}
        resizeMode="contain"
      />
      <Text style={styles.name}>{item.name}</Text>
      <View style={styles.countryContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  secondImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 0.5,
    borderColor: 'gray',
    backgroundColor: '#f2f2f2',
  },
  flag: {
    position: 'absolute',
    top: -15,
    right: 0,
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#000',
    backgroundColor: '#f2f2f2',
  },
  name: {
    fontSize: 12,
    fontWeight: 'bold',
    width: 50,
    textAlign: 'center',
  },
  countryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
});

export default CountryUserItem;
