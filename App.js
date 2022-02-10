import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Form from './src/components/layout/Form';
import Content from './src/components/layout/Content';
import Footer from './src/components/layout/Footer';
import { API_TOKEN } from 'react-native-dotenv';

export default function App() {
  const [city, setCity] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [temp, setTemp] = useState('');
  const [weather, setWeather] = useState('');
  const [windSpeed, setWindSpeed] = useState('');
  const [minTemp, setMinTemp] = useState('');
  const [pressure, setPressure] = useState('');
  const [weatherIcon, setWeatherIcon] = useState('');

  const fetchData = () => {
    fetchCityData(city);
    console.log('city', city);
  }

  const fetchCityData = async city => {
    const url = (`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_TOKEN}&units=metric`)
    const api_call = await fetch(url);

    const response = await api_call.json();

    console.log('response', response);

    setCountryCode(response.sys.country);
    setTemp(response.main.temp);
    setWeather(response.weather[0].main);
    setPressure(response.main.pressure);
    setWindSpeed(response.wind.speed);
    setMinTemp(response.main.temp_min);
    setWeatherIcon(response.weather[0].icon);
  }

  return (
    <View style={styles.container}>
      <Form onChangeText={text => setCity(text)} onSubmit={fetchData} />
      <Content temp={temp} city={city} countryCode={countryCode} weather={weather} weatherIcon={weatherIcon} />
      <Footer pressure={pressure} windSpeed={windSpeed} minTemp={minTemp} weatherIcon={weatherIcon} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
