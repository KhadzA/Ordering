import { StyleSheet, View, FlatList, TouchableOpacity, useColorScheme } from 'react-native';
import { Href, Link } from 'expo-router'; 
import Category from '@assets/data/Category';  
import CategoryListItem from '@/components/CategoryListItem'; 

export default function CategoryScreen() {
  const colorScheme = useColorScheme();
  const styles = getStyles(colorScheme);

  return (
    <View style={styles.container}>
      <FlatList
        data={Category}
        keyExtractor={(item) => item.id.toString()} 
        renderItem={({ item }) => (
          <Link href={`Categories/BrewedBattleProducts/${item.id}` as Href} asChild>
            <TouchableOpacity>
              <CategoryListItem category={item} />
            </TouchableOpacity>
          </Link>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const getStyles = (colorScheme: string | null | undefined) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colorScheme === 'dark' ? '#1e1e1e' : '#fff', 
    },
    categoryStyle: {
      marginBottom: 10,
      marginTop: 10,
    },
    separator: {
      height: 15,
    },
});
