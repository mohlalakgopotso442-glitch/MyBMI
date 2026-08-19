import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [result, setResult] = useState<string>('');

  const calculateBMI = () => {
    const bmi = weight / (height * height);

    let status = '';

    if (bmi < 18.5) {
      status = 'Underweight';
    } else if (bmi < 25) {
      status = 'Healthy Weight';
    } else if (bmi < 30) {
      status = 'Overweight';
    } else {
      status = 'Obese';
    }

    setResult(
      `Name: ${name}\n` +
      `Age: ${age}\n` +
      `Height: ${height}\n` +
      `Weight: ${weight}\n` +
      `BMI: ${bmi.toFixed(2)}\n` +
      `Status: ${status}`
    );
  };

  const clearAll = () => {
    setName('');
    setAge(0);
    setHeight(0);
    setWeight(0);
    setResult('');
  };

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        value={age === 0 ? '' : String(age)}
        onChangeText={(text) => setAge(Number(text))}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your Height"
        value={height === 0 ? '' : String(height)}
        onChangeText={(text) => setHeight(Number(text))}
        keyboardType="decimal-pad"
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your weight"
        value={weight === 0 ? '' : String(weight)}
        onChangeText={(text) => setWeight(Number(text))}
        keyboardType="decimal-pad"
      />

      {/* Buttons back to the original layout */}
      <Button
        title="Clear"
        onPress={clearAll}
      />

      <Button
        title="Calculate"
        onPress={calculateBMI}
      />

      {/* Results */}
      <View style={styles.resultRow}>
        <Text style={styles.resultText}>{result}</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 100,
  },

  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 20,
  },

  resultRow: {
    marginTop: 25,
  },

  resultText: {
    fontSize: 16,
    lineHeight: 24,
  },
});