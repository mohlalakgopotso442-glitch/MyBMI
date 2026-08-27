import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

export default function LearnScreen() {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>Healthy Living</Text>

      <Text style={styles.intro}>
        Living a healthy lifestyle means taking care of your
        body and mind. Healthy eating, regular exercise,
        enough water and good sleep can help you stay healthy.
      </Text>

      {/* Healthy Eating */}
      <View style={styles.card}>

        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061',
          }}
          style={styles.image}
        />

        <Text style={styles.heading}>
          Healthy Eating
        </Text>

        <Text style={styles.text}>
          Eating healthy foods gives your body the nutrients
          it needs. Try to eat fruits, vegetables, whole grains
          and healthy sources of protein. Limit foods that are
          high in sugar, salt and unhealthy fats.
        </Text>

      </View>

      {/* Exercise */}
      <View style={styles.card}>

        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438',
          }}
          style={styles.image}
        />

        <Text style={styles.heading}>
          Stay Active
        </Text>

        <Text style={styles.text}>
          Regular physical activity helps keep your body
          strong and healthy. Walking, running, dancing,
          cycling and exercising are good ways to stay active.
        </Text>

      </View>

      {/* Water */}
      <View style={styles.card}>

        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d',
          }}
          style={styles.image}
        />

        <Text style={styles.heading}>
          Drink Enough Water
        </Text>

        <Text style={styles.text}>
          Water helps your body function properly and keeps
          you hydrated. Drink water regularly throughout the
          day, especially when you are exercising or when it
          is hot.
        </Text>

      </View>

      {/* Sleep */}
      <View style={styles.card}>

        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1511295742362-92c96b1cf484',
          }}
          style={styles.image}
        />

        <Text style={styles.heading}>
          Get Enough Sleep
        </Text>

        <Text style={styles.text}>
          Good sleep helps your body and mind rest and recover.
          Try to follow a regular sleeping routine and get
          enough sleep each night.
        </Text>

      </View>

      {/* Mental Health */}
      <View style={styles.card}>

        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773',
          }}
          style={styles.image}
        />

        <Text style={styles.heading}>
          Take Care of Your Mental Health
        </Text>

        <Text style={styles.text}>
          Mental health is an important part of healthy living.
          Take time to relax, do activities that you enjoy and
          spend time with people who make you feel supported.
        </Text>

      </View>

      {/* BMI Information */}
      <View style={styles.infoBox}>

        <Text style={styles.heading}>
          Understanding BMI
        </Text>

        <Text style={styles.text}>
          BMI stands for Body Mass Index. It uses a person's
          height and weight to calculate a number that can help
          indicate their weight category. Use the MyBMI page
          to calculate your BMI.
        </Text>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },

  intro: {
    fontSize: 17,
    lineHeight: 25,
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#f5f5f5',
    borderRadius: 15,
    padding: 12,
    marginBottom: 20,
  },

  image: {
    width: '100%',
    height: 180,
    borderRadius: 12,
  },

  heading: {
    fontSize: 21,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 8,
  },

  text: {
    fontSize: 16,
    lineHeight: 24,
  },

  infoBox: {
    backgroundColor: '#e8f5e9',
    borderRadius: 15,
    padding: 15,
    marginBottom: 30,
  },
});