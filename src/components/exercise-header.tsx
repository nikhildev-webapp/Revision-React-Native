import { StyleSheet, Text, View } from "react-native";
import { useAppTheme } from "./theme-context";

type ExerciseHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function ExerciseHeader({ eyebrow, title, description }: ExerciseHeaderProps) {
  const { colors } = useAppTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.eyebrow, { color: colors.accent }]}>{eyebrow}</Text>
      <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
      <Text style={[styles.description, { color: colors.muted }]}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  eyebrow: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.6,
  },
  title: {
    fontSize: 27,
    fontWeight: "800",
    letterSpacing: -0.8,
    marginTop: 5,
  },
  description: {
    fontSize: 12,
    lineHeight: 18,
    marginTop: 6,
  },
});
