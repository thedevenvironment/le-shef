import { StyleSheet, Text, View } from 'react-native'
import Button from 'components/Button'

export default function HomePage() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Le Shef 👨🏻‍🍳</Text>
        <Text style={styles.subtitle}>The Best Way To Keep Track Of Your Cooking.</Text>
        <Button text="Create New Timer" href="/new-timer" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    maxWidth: 960,
    marginHorizontal: 'auto'
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 36,
    color: '#38434D'
  }
})
