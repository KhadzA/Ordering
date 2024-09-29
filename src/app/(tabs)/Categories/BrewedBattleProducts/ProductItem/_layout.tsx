import { View } from '@/components/Themed';
import { Stack, Tabs } from 'expo-router';

export default function ProductItemStack() {
  return (
    <Stack>
      <Stack.Screen name='[id]' options={{ title: 'Details' }} />
    </Stack>
  );
}