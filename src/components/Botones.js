import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useState } from 'react'

export default function Inputs({ texto_boton, accion_boton }) {


    return (
        <>
            <TouchableOpacity
                style={styles.boton}
                onPress={accion_boton}
            >
                <Text style={{ textAlign: 'center' }}>{texto_boton}</Text>
            </TouchableOpacity>


        </>

    );

}

const styles = StyleSheet.create({


    boton: {
        backgroundColor: 'yellow',
        width: 150,
        padding: 10,
        margin: 5,
        marginTop: 20,
        borderRadius: 10
    },

});
