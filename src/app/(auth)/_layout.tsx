import { View, Text } from 'react-native';
import { Stack } from 'expo-router';

const AuthLayout = () => {
    return (
        <View style={{ flex: 1 }}>
            <Stack.Screen options={{ headerShown: false }} />
        </View>
    );
};

export default AuthLayout;
