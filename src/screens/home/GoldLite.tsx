import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, FlatList} from 'react-native';
import {faker} from '@faker-js/faker';

// components
import {CountryUserItem, CategoryItem} from '../../components';
import SearchScreen from './SearchScreen';

// helpers
import {CategoryItemProp, CountryUserInterface} from '../../types';
import colors from '../../theme/colors';

const countryData: CountryUserInterface[] = Array(40)
  .fill('')
  .map((_, index) => {
    return {
      id: index,
      name: faker.person.firstName(),
      flag: faker.location.countryCode(),
      country: faker.location.country(),
      image: faker.image.avatar(),
    };
  });

const data: CategoryItemProp[] = Array(10)
  .fill('')
  .map((_, index) => {
    return {
      id: index,
      category: faker.person.jobArea(),
      image: faker.image.avatar(),
    };
  });

const GoldLite = (): React.JSX.Element => {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(countryData);

  const handleSearch = (text: string) => {
    setSearchText(text);
    if (text) {
      const filtered = countryData.filter(item =>
        item.name.toLowerCase().includes(text.toLowerCase()),
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(countryData);
    }
  };

  return (
    <SafeAreaView style={{backgroundColor: colors.white}}>
      <FlatList
        data={filteredData}
        ListHeaderComponent={
          <>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.scrollViewContainer}>
              {data.map((item, index) => (
                <CategoryItem item={item} key={index.toString()} />
              ))}
            </ScrollView>

            <SearchScreen onSearch={handleSearch} />
          </>
        }
        contentContainerStyle={{
          flexDirection: 'column',
        }}
        columnWrapperStyle={{
          padding: 15,
          gap: 25,
        }}
        renderItem={({item, index}) => {
          return <CountryUserItem item={item} />;
        }}
        keyExtractor={(_, index) => index.toString()}
        numColumns={4}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    backgroundColor: '#FFFFED',
    gap: 1
  },
});

export default GoldLite;
