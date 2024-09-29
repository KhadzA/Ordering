import { Stack, Tabs } from 'expo-router';

export default function BrewedBattleStack() {
  return (
    <Stack>
      <Stack.Screen name='[id]' options={{ title: 'Brewed Battle' }} />
      <Stack.Screen name='ProductItem' options={{ headerShown: false }} />
    </Stack>
  );
}