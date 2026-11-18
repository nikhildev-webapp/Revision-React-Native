import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ExerciseHeader } from "../../components/exercise-header";
import { useAppTheme } from "../../components/theme-context";

export default function ThemeScreen() {
  const { colors, themeMode, toggleTheme } = useAppTheme();
  const isBlack = themeMode === "black";

  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      style={[styles.safeArea, { backgroundColor: colors.background }]}
    >
      <View style={styles.content}>
        <ExerciseHeader
          eyebrow="EXERCISE 04 / COLOR THEMES"
          title="Make it yours"
          description="Switch between a true black and a softer dark theme."
        />
        <View style={[styles.themeCard, { backgroundColor: colors.surface }]}>
          <View style={[styles.preview, { backgroundColor: colors.background }]}>
            <View style={[styles.previewDot, { backgroundColor: colors.accent }]} />
            <View style={styles.previewCopy}>
              <Text style={[styles.previewTitle, { color: colors.text }]}>
                {isBlack ? "Black mode" : "Dark mode"}
              </Text>
              <Text style={[styles.previewDescription, { color: colors.muted }]}>
                Applied across all exercises
              </Text>
            </View>
            <Text style={[styles.check, { color: colors.accent }]}>✓</Text>
          </View>
          <Text style={[styles.body, { color: colors.muted }]}>
            The shared theme also updates the tab bar. Your choice stays active while you move
            between exercises.
          </Text>
          <Pressable
            accessibilityRole="switch"
            accessibilityState={{ checked: !isBlack }}
            accessibilityLabel="Use dark theme"
            onPress={toggleTheme}
            style={[
              styles.toggle,
              { backgroundColor: isBlack ? colors.elevated : colors.accent },
            ]}
          >
            <View
              style={[
                styles.toggleThumb,
                isBlack ? styles.thumbLeft : styles.thumbRight,
                { backgroundColor: isBlack ? colors.muted : "#17200C" },
              ]}
            />
          </Pressable>
          <Text style={[styles.toggleCaption, { color: colors.text }]}>
            {isBlack ? "Switch to dark theme" : "Switch to black theme"}
          </Text>
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
  themeCard: {
    borderRadius: 22,
    padding: 18,
    marginTop: 14,
  },
  preview: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 16,
    padding: 15,
  },
  previewDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 12,
  },
  previewCopy: {
    flex: 1,
    gap: 4,
  },
  previewTitle: {
    fontSize: 14,
    fontWeight: "800",
  },
  previewDescription: {
    fontSize: 11,
  },
  check: {
    fontSize: 18,
    fontWeight: "800",
  },
  body: {
    fontSize: 13,
    lineHeight: 20,
    marginTop: 18,
  },
  toggle: {
    width: 58,
    height: 34,
    borderRadius: 18,
    justifyContent: "center",
    padding: 4,
    marginTop: 24,
    alignSelf: "center",
  },
  toggleThumb: {
    width: 26,
    height: 26,
    borderRadius: 13,
  },
  thumbLeft: {
    alignSelf: "flex-start",
  },
  thumbRight: {
    alignSelf: "flex-end",
  },
  toggleCaption: {
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 12,
  },
});
