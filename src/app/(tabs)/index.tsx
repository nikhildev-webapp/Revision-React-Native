import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ExerciseHeader } from "../../components/exercise-header";
import { useAppTheme } from "../../components/theme-context";
import { ProfileStat } from "../../components/profile-stat";

export default function ProfileScreen() {
  const { colors } = useAppTheme();

  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      style={[styles.safeArea, { backgroundColor: colors.background }]}
    >
      <ScrollView contentContainerStyle={styles.content}>
        <ExerciseHeader
          eyebrow="EXERCISE 01 / FLEXBOX"
          title="Profile card"
          description="A centered profile built with flexible rows and columns."
        />
        <View style={[styles.card, { backgroundColor: colors.surface }]}>
          <View style={[styles.avatarBorder, { borderColor: colors.accent }]}>
            <Image
              accessibilityLabel="Profile avatar"
              source={{
                uri: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=320&h=320&fit=crop&crop=faces",
              }}
              style={styles.avatar}
            />
          </View>
          <Text style={[styles.name, { color: colors.text }]}>Jordan Lee</Text>
          <Text style={[styles.handle, { color: colors.muted }]}>@jordanlee</Text>
          <Text style={[styles.bio, { color: colors.muted }]}>
            Design-minded developer building little things that make life better.
          </Text>
          <View style={[styles.statsRow, { borderTopColor: colors.line }]}>
            <ProfileStat
              value="128"
              label="Posts"
              textColor={colors.text}
              mutedColor={colors.muted}
            />
            <View style={[styles.statDivider, { backgroundColor: colors.line }]} />
            <ProfileStat
              value="8.4k"
              label="Followers"
              textColor={colors.text}
              mutedColor={colors.muted}
            />
            <View style={[styles.statDivider, { backgroundColor: colors.line }]} />
            <ProfileStat
              value="612"
              label="Following"
              textColor={colors.text}
              mutedColor={colors.muted}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  content: {
    padding: 20,
    flexGrow: 1,
  },
  card: {
    alignItems: "center",
    borderRadius: 22,
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 22,
    marginTop: 14,
  },
  avatarBorder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    padding: 4,
    marginBottom: 15,
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 46,
    backgroundColor: "#303442",
  },
  name: {
    fontSize: 22,
    fontWeight: "800",
    letterSpacing: -0.5,
  },
  handle: {
    fontSize: 13,
    marginTop: 3,
  },
  bio: {
    maxWidth: 280,
    fontSize: 13,
    lineHeight: 19,
    textAlign: "center",
    marginTop: 13,
  },
  statsRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    marginTop: 23,
    paddingTop: 18,
  },
  statDivider: {
    width: 1,
    height: 28,
  },
});
