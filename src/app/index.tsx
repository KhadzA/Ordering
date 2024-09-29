import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const LandingPage = () => {
    return (
        <ImageBackground
            source={{ uri: 'https://github.com/KhadzA/Images/blob/main/Cafe/Wall.png?raw=true' }}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.container}>
                {/* Logo */}
                <Image
                    source={{ uri: 'https://github.com/KhadzA/Images/blob/main/Cafe/Cafe_Logo.png?raw=true' }}
                    style={styles.logo}
                />

                {/* Welcome Text */}
                <Text style={styles.title}>OPEN DAILY</Text>
                <Text style={styles.title}>AT 10AM-10PM</Text>
                <Text style={styles.subtitle}>GREAT PLAYS•GREAT TASTE•GREAT PLACE</Text>

                {/* Buttons for Sign In and Sign Up */}
                <View style={styles.buttonContainer}>
                    <Link href={'/(tabs)/Categories'} asChild>
                        <TouchableOpacity style={styles.signIn}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                    </Link>

                    <Link href="/(tabs)" asChild>
                        <TouchableOpacity style={styles.signUp}>
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#000',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    title: {
        fontWeight: '600',
        fontSize: 22.49,
        color: '#fff',
        textAlign: 'center',
    },
    subtitle: {
        fontWeight: '600',
        fontSize: 16.88,
        color: '#fff',
        marginTop: 10,
        marginBottom: 40,
        textAlign: 'center',
        letterSpacing: -1,
    },
    buttonContainer: {
        alignItems: 'center',
        width: '100%',
    },
    signUp: {
        backgroundColor: 'rgb(58,142,215)',
        paddingVertical: 15,
        borderRadius: 15,
        width: '80%',
        alignItems: 'center',
        marginTop: 15,
    },
    signIn: {
        backgroundColor: 'rgb(156,65,82)',
        paddingVertical: 15,
        borderRadius: 15,
        alignItems: 'center',
        width: '80%',
    },
    buttonText: {
        color: '#fff',
        fontWeight: '500',
    },
});

export default LandingPage;
