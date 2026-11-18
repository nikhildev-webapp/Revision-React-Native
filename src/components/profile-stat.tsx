import { StyleSheet, Text, View } from "react-native";

type ProfileStatProps = {
  value: string;
  label: string;
  textColor: string;
  mutedColor: string;
};

export function ProfileStat({ value, label, textColor, mutedColor }: ProfileStatProps) {
  return (
    <View style={styles.stat}>
      <Text style={[styles.value, { color: textColor }]}>{value}</Text>
      <Text style={[styles.label, { color: mutedColor }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  stat: {
    flex: 1,
    alignItems: "center",
    gap: 4,
  },
  value: {
    fontSize: 16,
    fontWeight: "800",
  },
  label: {
    fontSize: 11,
    fontWeight: "500",
  },
});
