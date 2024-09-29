import { StyleSheet, View, Text, Image, FlatList, useColorScheme } from 'react-native';
import BrewedBattle from '@assets/data/products';
import ProductListItem from '@/components/ProductListItem';

const BrewedBattleMenu = () => {
  return (
    <View>
      <FlatList
        data={ BrewedBattle }
        renderItem={({ item }) => <ProductListItem brewedBattle={item} />}
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{gap: 10}}
      />
    </View>
  );
};

export default BrewedBattleMenu;