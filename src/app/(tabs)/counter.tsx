import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ExerciseHeader } from "../../components/exercise-header";
import { useAppTheme } from "../../components/theme-context";

export default function CounterScreen() {
  const { colors } = useAppTheme();
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      style={[styles.safeArea, { backgroundColor: colors.background }]}
    >
      <View style={styles.content}>
        <ExerciseHeader
          eyebrow="EXERCISE 02 / PRESSABLE"
          title="Little counter"
          description="Use custom pressable buttons to change the count."
        />
        <View style={[styles.counterCard, { backgroundColor: colors.surface }]}>
          <Text style={[styles.countLabel, { color: colors.muted }]}>CURRENT COUNT</Text>
          <Text
            accessibilityLiveRegion="polite"
            style={[styles.count, { color: colors.text }]}
          >
            {count}
          </Text>
          <View style={styles.buttons}>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Decrease count"
              onPress={() => setCount((value) => Math.max(0, value - 1))}
              style={({ pressed }) => [
                styles.button,
                { backgroundColor: colors.elevated, opacity: pressed ? 0.75 : 1 },
              ]}
            >
              <Text style={[styles.buttonText, { color: colors.text }]}>- Decrease</Text>
            </Pressable>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Increase count"
              onPress={() => setCount((value) => value + 1)}
              style={({ pressed }) => [
                styles.button,
                { backgroundColor: colors.accent, opacity: pressed ? 0.8 : 1 },
              ]}
            >
              <Text style={[styles.buttonText, styles.increaseText]}>+ Increase</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  counterCard: {
    alignItems: "center",
    borderRadius: 22,
    padding: 22,
    marginTop: 14,
  },
  countLabel: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.5,
  },
  count: {
    fontSize: 72,
    fontWeight: "800",
    letterSpacing: -2,
    marginVertical: 20,
  },
  buttons: {
    width: "100%",
    gap: 10,
  },
  button: {
    minHeight: 50,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "800",
  },
  increaseText: {
    color: "#17200C",
  },
});
