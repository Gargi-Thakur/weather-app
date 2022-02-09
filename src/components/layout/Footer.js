import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';

const Footer = props => {
    return (
        <View style={styles.footer}>
            {props.pressure && props.windSpeed && props.minTemp ?
                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                    <Text style={{ fontSize: 15, color: 'red', paddingBottom: 20, backgroundColor: 'transparent' }}>
                        {moment().format}
                    </Text>
                </View>
                : null}
            {props.pressure && props.windSpeed && props.minTemp ?
                <View style={{ flexDirection: 'row', paddingHorizontal: 20, flex: 3, paddingTop: 4 }}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.textLabel}>Pressure</Text>
                        <Text style={{ fontSize: 30, backgroundColor: 'transparent' }}>{props.pressure}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.textLabel}>Wind Speed</Text>
                        <Text style={{ fontSize: 30, backgroundColor: 'transparent' }}>{props.windSpeed}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.textLabel}>Min Temp</Text>
                        <Text style={{ fontSize: 30, backgroundColor: 'transparent' }}>{props.minTemp}</Text>
                    </View>
                </View>
                : null}
        </View>
    );
}

export default Footer;

const styles = StyleSheet.create({
    footer: {
        flex: 3,
        width: '100%',
    },
})