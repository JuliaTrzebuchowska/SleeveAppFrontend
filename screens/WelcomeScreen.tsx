import React from 'react';
import { View, Text, Button, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const WelcomeScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Ostrzeżenie</Text>
        <Text style={styles.text}>
          Zanim rozpoczniesz korzystanie z urządzenia, zapoznaj się z poniższymi
          przeciwwskazaniami. W przypadku jakichkolwiek wątpliwości lub problemów zdrowotnych
          skonsultuj się z lekarzem przed użyciem.
        </Text>

        <Text style={styles.subTitle}>Przeciwwskazania do stosowania rękawa wibracyjnego:</Text>
        <Text style={styles.text}>
          • Osoby z rozrusznikiem serca lub innymi implantami elektronicznymi.
        </Text>
        <Text style={styles.text}>
          • Osoby cierpiące na choroby serca, takie jak niewydolność serca lub arytmia.
        </Text>
        <Text style={styles.text}>
          • Osoby z zaawansowaną osteoporozą lub złamaniami kości.
        </Text>
        <Text style={styles.text}>
          • Osoby z aktywnymi infekcjami skóry lub otwartymi ranami w miejscu stosowania
          rękawa.
        </Text>
        <Text style={styles.text}>• Kobiety w ciąży (szczególnie w pierwszym trymestrze).</Text>
        <Text style={styles.text}>• Osoby z nowotworami, zwłaszcza w miejscach objętych wibracjami.</Text>
        <Text style={styles.text}>
          • Osoby z zaburzeniami neurologicznymi, które mogą powodować nadwrażliwość na wibracje.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('NextScreen')}
        >
          <Text style={styles.buttonText}>Zaczynamy</Text>
        </TouchableOpacity>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20, 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
    alignSelf: 'center',
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
