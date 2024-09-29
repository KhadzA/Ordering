import { View, Platform, Text, FlatList, useColorScheme, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useCart } from '@/providers/CartProvider';
import CartListItem from '@/components/CartListItem';
import Button from '@/components/Button';
import { Stack } from 'expo-router';

const CartScreen = () => {
    const { items, total } = useCart();
    const colorScheme = useColorScheme(); 
    const styles = getStyles(colorScheme); 

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: 'Cart' }} />
            <FlatList
                data={items}
                renderItem={({ item }) => <CartListItem cartItem={item} />}
                contentContainerStyle={{ gap: 10 }}
            />
            <Text style={styles.totalText}>
                Total: ₱{total}
            </Text>
            <Button text='Checkout' />
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </View>
    );
};

const getStyles = (colorScheme: string | null | undefined) => 
    StyleSheet.create({
        container: {
            padding: 10,
            backgroundColor: colorScheme === 'dark' ? '#1e1e1e' : '#fff', 
            flex: 1,
        },
        totalText: {
            marginTop: 20,
            fontSize: 20,
            fontWeight: '500',
            color: colorScheme === 'dark' ? '#fff' : '#000', 
        },
    });

export default CartScreen;
