import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useState } from 'react'

export default function Inputs({texto_label, valor_numero, set_valor_numero}) {


    return (
        <>
            <View>
                <Text>{texto_label}</Text>
                <TextInput
                    style={styles.input}
                    keyboardType='number-pad'
                    placeholder={texto_label}
                    value={valor_numero}
                    onChangeText={set_valor_numero}
                />
            </View>
        </>

        

    );

    
}

const styles = StyleSheet.create({


    input: {
        backgroundColor: 'grey',
        width: 150,
        padding: 10,
        margin: 5,
        fontSize: 20,
        fontWeight: '900',
        borderRadius: 10
    },



});
