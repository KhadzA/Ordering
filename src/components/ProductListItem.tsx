import { StyleSheet, View, Text, Image, useColorScheme, Pressable } from 'react-native';
import { Product } from '@/types';
import { Href, Link } from 'expo-router';

type ProductListItemProps = {
    brewedBattle: Product;
}

export const defaultImage =
  'https://github.com/KhadzA/Images/blob/main/Cafe/DefaultImage.png?raw=true';

const ProductListItem = ({ brewedBattle } : ProductListItemProps) => {
  const colorScheme = useColorScheme(); 
  const styles = getStyles(colorScheme);

return (
    <Link href={`/(tabs)/Categories/BrewedBattleProducts/ProductItem/${brewedBattle.id}` as Href} asChild>
        <Pressable style={styles.container}>
            <Image
                source={{ uri: brewedBattle.image || defaultImage }}
                style={styles.image}
                resizeMode="contain"
            />
                
            <Text style={styles.title}>{brewedBattle.name}</Text>
            <Text style={styles.price}>₱{brewedBattle.price}</Text>
        </Pressable>
    </Link>
  );
};

// Function to get styles based on color scheme
const getStyles = (colorScheme: string | null | undefined) =>
  StyleSheet.create({
        container: {
            padding: 10,
            borderRadius: 20,
            backgroundColor: colorScheme === 'dark' ? '#1e1e1e' : '#fff', 
            flex: 1,
            maxWidth: '50%',
        },
        title: {
            fontSize: 18,
            fontWeight: 'bold',
            marginVertical: 10,
            color: colorScheme === 'dark' ? '#fff' : '#000',
        },
            price: {
            fontSize: 15,
            fontWeight: 'bold',
            marginVertical: 10,
            color: 'blue',
        },
        image: {
            width: '100%',
            aspectRatio: 1,
        },
  });

export default ProductListItem;
