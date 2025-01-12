import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import MenuButtons from '../components/MenuButtons'; // Importation du composant MenuButtons

const MenuScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/BackgroundMenu.png')} // Votre image de fond
      style={styles.background}
      resizeMode="cover"
    >
      {/* Superposition du fond et des boutons */}
      <View style={styles.overlay}>
        {/* Composant des boutons et du titre */}
        <MenuButtons />
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
});

export default MenuScreen;
