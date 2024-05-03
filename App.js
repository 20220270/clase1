import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useState } from 'react'
import Inputs from './src/components/Inputs'
import Botones from './src/components/Botones'

export default function App() {
    /*
    codigo js */
    const [numero1, setNumero1] = useState(0);
    const [numero2, setNumero2] = useState(0);
    const [resultado, setResultado] = useState(0);

    const sumar = () => {
        setResultado(parseFloat(numero1) + parseFloat(numero2));
    }

    const restar = () => {
        setResultado(parseFloat(numero1) - parseFloat(numero2));
    }

    const multiplicar = () => {
        setResultado(parseFloat(numero1) * parseFloat(numero2));
    }

    const dividir = () => {
        setResultado(parseFloat(numero1) / parseFloat(numero2));
    }


    /*
    codigo js */


    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Calcular dos numeros</Text>

            <Inputs
                texto_label='Numero 1'
                valor_numero={numero1}
                set_valor_numero={setNumero1}
            />

            <Inputs
                texto_label='Numero 2'
                valor_numero={numero2}
                set_valor_numero={setNumero2}
            />



            <Botones
                texto_boton='Sumar'
                accion_boton={sumar}
            />

            <Botones
                texto_boton='Restar'
                accion_boton={restar}
            />

            <Botones
                texto_boton='Multiplicar'
                accion_boton={multiplicar}
            />

            <Botones
                texto_boton='Dividir'
                accion_boton={dividir}
            />

            

            <Text>
                numero 1: {numero1}
            </Text>

            <Text>
                numero 2: {numero2}
            </Text>
            <Text>

                Resultado: {resultado}</Text>
        </View>

    );
}

const styles = StyleSheet.create({


    texto: {
        backgroundColor: 'blue',
        color: 'white',
        fontSize: 30,
        padding: 10,
        marginBottom: 20
    },

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },


});
