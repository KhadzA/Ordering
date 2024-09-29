import { View, Text, StyleSheet, Image, Pressable, useColorScheme } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useCart } from '../providers/CartProvider';
import { defaultImage } from './ProductListItem';
import { CartItem } from '../types';

type CartListItemProps = {
  cartItem: CartItem;
};

const CartListItem = ({ cartItem }: CartListItemProps) => {
  const { updateQuantity } = useCart();
  const colorScheme = useColorScheme(); 
  const styles = getStyles(colorScheme); 

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: cartItem.product.image || defaultImage }}
        style={styles.image}
        resizeMode='contain'
      />
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{cartItem.product.name}</Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.price}>₱{cartItem.product.price.toFixed(2)}</Text>
          <Text style={styles.size}>Size: {cartItem.size}</Text>
        </View>
      </View>
      <View style={styles.quantitySelector}>
        <FontAwesome
          onPress={() => updateQuantity(cartItem.id, -1)}
          name="minus"
          color="gray"
          style={{ padding: 5 }}
        />
        <Text style={styles.quantity}>{cartItem.quantity}</Text>
        <FontAwesome
          onPress={() => updateQuantity(cartItem.id, 1)}
          name="plus"
          color="gray"
          style={{ padding: 5 }}
        />
      </View>
    </View>
  );
};

// Styles for light and dark modes
const getStyles = (colorScheme: string | null | undefined) =>
  StyleSheet.create({
    container: {
      backgroundColor: colorScheme === 'dark' ? '#2a2a2a' : '#f7f7f7', 
      borderRadius: 10,
      padding: 5,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      shadowColor: colorScheme === 'dark' ? '#fff' : '#000',
      shadowOpacity: 0.1,
      elevation: 2,
    },
    image: {
      width: 75,
      aspectRatio: 1,
      alignSelf: 'center',
      marginRight: 10,
    },
    title: {
      fontWeight: '500',
      fontSize: 16,
      marginBottom: 5,
      color: colorScheme === 'dark' ? '#fff' : '#000', 
    },
    subtitleContainer: {
      flexDirection: 'row',
      gap: 5,
    },
    quantitySelector: {
      flexDirection: 'row',
      gap: 10,
      alignItems: 'center',
      marginVertical: 10,
    },
    quantity: {
      fontWeight: '500',
      fontSize: 18,
      color: colorScheme === 'dark' ? '#fff' : '#000', 
    },
    price: {
      color: colorScheme === 'dark' ? '#ffcc00' : '#000',
      fontWeight: 'bold',
    },
    size: {
      color: 'gray',
      fontWeight: 'bold',
    },
  });

export default CartListItem;
