import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Content = props => {
    return (
        <View styles={styles.content}>
            <View>
                {props.temp ? <Text style={styles.info}>{Math.round(props.temp)}&#8451;</Text> : null}
            </View>
            <View>
                {props.weather ? <Text style={styles.info}>{props.weather}</Text> : null}
            </View>
            <View>
                {props.city ? <Text style={styles.cityName}>{props.city}</Text> : null}
            </View>
        </View>
    );
}

export default Content;

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: 'transparent',
        width: '100%',
    },
    info: {
        fontSize: 50,
        color: 'black',
        paddingLeft: 20,
        paddingTop: 50,
    },
    countryName: {
        fontSize: 25,
        color: 'black',
        paddingLeft: 20,
    },
    cityName: {
        fontSize: 35,
        paddingLeft: 20,
        paddingTop: 40,
        paddingBottom: 25,
    }
})