import { useState } from 'react';
import {
    Alert,
    Button,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

export default function App() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [result, setResult] = useState('');

    const calculateBMI = () => {
        const heightNumber = Number(height);
        const weightNumber = Number(weight);

        if (!name || !age || !height || !weight) {
            Alert.alert('Missing Information', 'Please enter all your details.');
            return;
        }

        if (heightNumber <= 0 || weightNumber <= 0) {
            Alert.alert('Invalid Information', 'Please enter valid height and weight.');
            return;
        }

        const heightInMetres = heightNumber / 100;
        const bmi = weightNumber / (heightInMetres * heightInMetres);

        let category = '';

        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi < 25) {
            category = 'Normal weight';
        } else if (bmi < 30) {
            category = 'Overweight';
        } else {
            category = 'Obese';
        }

        setResult(`Your BMI is ${bmi.toFixed(1)} - ${category}`);
    };

    const clearAll = () => {
        setName('');
        setAge('');
        setHeight('');
        setWeight('');
        setResult('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>MyBMI</Text>

            <Text style={styles.subtitle}>
                Calculate your Body Mass Index
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Enter your name"
                value={name}
                onChangeText={setName}
            />

            <TextInput
                style={styles.input}
                placeholder="Enter your age"
                value={age}
                onChangeText={setAge}
                keyboardType="numeric"
            />

            <TextInput
                style={styles.input}
                placeholder="Enter your height in cm"
                value={height}
                onChangeText={setHeight}
                keyboardType="decimal-pad"
            />

            <TextInput
                style={styles.input}
                placeholder="Enter your weight in kg"
                value={weight}
                onChangeText={setWeight}
                keyboardType="decimal-pad"
            />

            <View style={styles.button}>
                <Button title="CALCULATE" onPress={calculateBMI} />
            </View>

            <View style={styles.button}>
                <Button title="CLEAR" onPress={clearAll} />
            </View>

            {result !== '' && (
                <Text style={styles.result}>{result}</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },

    title: {
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },

    subtitle: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 25,
    },

    input: {
        height: 50,
        borderWidth: 1,
        borderColor: '#999999',
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
    },

    button: {
        marginTop: 8,
        marginBottom: 8,
    },

    result: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 25,
    },
});