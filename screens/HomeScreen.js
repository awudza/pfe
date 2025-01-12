import React, { useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation=useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
          navigation.navigate('Menu'); 
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigation]);

  return (
    // Image de fond
    <ImageBackground
      source={require('../assets/BackgroundAcceuil.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        {/* Logo */}
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
        />
        {/* Phrase d'accroche */}
        <Text style={styles.title}>
          Analysez les composants de votre frigo{'\n'}
          et découvrez des recettes{'\n'}
          incroyables !
        </Text>

        {/* Indicateur de temps */}
        <ActivityIndicator size="large" color="#37bcaa" style={styles.loader} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 0,
    marginTop: -300,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#4e757a',
    textAlign: 'center',
    flexWrap: 'wrap',
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  loader: {
    marginTop: 30, 
  },
});

export default HomeScreen;
