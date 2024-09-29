import { View, Text, useColorScheme, StyleSheet, Image, Pressable } from 'react-native';
import { router, Stack, useLocalSearchParams } from 'expo-router';
import BrewedBattle from '@assets/data/products';
import { defaultImage } from '@/components/CategoryListItem';
import { useState } from 'react';
import Button from '@/components/Button';
import { CoffeeSize } from '@/types';
import { useCart } from '@/providers/CartProvider';

const sizes: CoffeeSize[] = ['S', 'M', 'L'];

const BrewedBattleItem = () => {
  const colorScheme = useColorScheme(); 
  const styles = getStyles(colorScheme);
  const { id } = useLocalSearchParams();
  const [selectedSize, setSelectedSize] = useState<CoffeeSize>('M');
  const { addItem } = useCart();

const addToCart = () => {
  if (!brewedBattle) {
    return;
  }
  addItem(brewedBattle, selectedSize);
  router.push('/cart')
}
  
  const brewedBattle = BrewedBattle.find(p => p.id.toString() === id);
  
  if (!brewedBattle) {
    return <Text>Product not Found</Text>;
  }
    
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: brewedBattle?.name }} />
      <Image 
        source={{ uri: brewedBattle.image || defaultImage }}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.sizeTitle}>Select Sizes</Text>
      <View style={styles.sizeContainer}>
        {sizes.map(size => (
          <Pressable
            onPress={() => setSelectedSize(size)}
            key={size}
            style={[
              styles.sizeItem,
              {
                backgroundColor: selectedSize === size
                  ? (colorScheme === 'dark' ? 'black' : 'gainsboro') 
                  : (colorScheme === 'dark' ? '#1e1e1e' : 'white')
              }
            ]}
          >
            <Text
              style={[
                styles.sizeText,
                {
                  color: selectedSize === size 
                    ? (colorScheme === 'dark' ? 'white' : 'black') 
                    : (colorScheme === 'dark' ? 'white' : 'black')
                }
              ]}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.price}>₱ {brewedBattle.price}</Text>
      <Button onPress={addToCart} text='Add to Cart'/>
    </View>
  );
};

export default BrewedBattleItem;

const getStyles = (colorScheme: string | null | undefined) =>
  StyleSheet.create({
    container: {
      backgroundColor: colorScheme === 'dark' ? '#1e1e1e' : '#fff', 
      flex: 1,
      padding: 10,
    },
    image: {
      width: '100%',
      aspectRatio: 1,
    },
    price: {
      color: colorScheme === 'dark' ? '#fff' : '#000',
      fontSize: 18,
      marginTop: 'auto',
    },
    sizeTitle: {
      color: colorScheme === 'dark' ? '#fff' : '#000',
      fontSize: 18,
      marginVertical: 10, 
    },
    sizeContainer: {
      flexDirection: 'row', 
      justifyContent: 'space-around', 
      marginVertical: 10, 
    },
    sizeItem: {
      width: 50,
      aspectRatio: 1,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
    },
    sizeText: {
      fontSize: 18,
    },
  });
