import React, {PropsWithChildren} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type SearchScreenProp = PropsWithChildren<{
  onSearch: (text: string) => void;
}>;

const SearchScreen = ({onSearch}: SearchScreenProp): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon
          name="search"
          size={20}
          color="#2a2c2e"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Search"
          placeholderTextColor="#999"
          onChangeText={onSearch}
        />
        <Feather
          name="mic"
          size={20}
          color="#2a2c2e"
          style={styles.speechIcon}
        />
      </View>
      <View
        style={{
          backgroundColor: '#f2f2f2',
          padding: 10,
          borderRadius: 8,
          width: '15%',
          margin: 5,
          alignItems: 'center',
          justifyContent: 'center',
          height: 50,
        }}>
        <FontAwesome name="sliders" size={20} color="#000" style={{}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    flexDirection: 'row',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    width: '85%',
    padding: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    paddingVertical: 8,
  },
  speechIcon: {
    marginLeft: 10,
  },
});

export default SearchScreen;
