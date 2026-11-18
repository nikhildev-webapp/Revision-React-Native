import { useMemo, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ExerciseHeader } from "../../components/exercise-header";
import { useAppTheme } from "../../components/theme-context";

type Contact = {
  id: string;
  name: string;
  email: string;
  color: string;
};

const firstNames = [
  "Ava",
  "Noah",
  "Mia",
  "Ethan",
  "Sofia",
  "Leo",
  "Isla",
  "Oliver",
  "Amara",
  "Lucas",
  "Zoe",
  "Kai",
];
const lastNames = ["Martinez", "Williams", "Chen", "Brooks", "Patel"];
const avatarColors = ["#D98C78", "#718DB9", "#BA8CA8", "#6E9C8D", "#C49A65", "#7786A7"];

const contacts: Contact[] = Array.from({ length: 60 }, (_, index) => {
  const firstName = firstNames[index % firstNames.length];
  const lastName = lastNames[Math.floor(index / firstNames.length)];

  return {
    id: String(index + 1),
    name: `${firstName} ${lastName}`,
    email: `${firstName}.${lastName}@example.com`.toLowerCase(),
    color: avatarColors[index % avatarColors.length],
  };
});

export default function ContactsScreen() {
  const { colors } = useAppTheme();
  const [search, setSearch] = useState("");

  const filteredContacts = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return contacts;
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(query) ||
        contact.email.toLowerCase().includes(query),
    );
  }, [search]);

  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      style={[styles.safeArea, { backgroundColor: colors.background }]}
    >
      <FlatList
        data={filteredContacts}
        keyExtractor={(item) => item.id}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.content}
        ListHeaderComponent={
          <View>
            <ExerciseHeader
              eyebrow="EXERCISE 03 / FLATLIST"
              title="Your people"
              description={`${filteredContacts.length} contacts · searchable and scrollable.`}
            />
            <TextInput
              accessibilityLabel="Search contacts"
              value={search}
              onChangeText={setSearch}
              placeholder="Search by name or email"
              placeholderTextColor={colors.muted}
              returnKeyType="search"
              style={[
                styles.search,
                { backgroundColor: colors.surface, color: colors.text },
              ]}
            />
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.contactRow}>
            <View style={[styles.avatar, { backgroundColor: item.color }]}>
              <Text style={styles.initials}>
                {item.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </Text>
            </View>
            <View style={styles.contactCopy}>
              <Text style={[styles.contactName, { color: colors.text }]}>{item.name}</Text>
              <Text style={[styles.contactEmail, { color: colors.muted }]}>{item.email}</Text>
            </View>
          </View>
        )}
        ItemSeparatorComponent={() => (
          <View style={[styles.separator, { backgroundColor: colors.line }]} />
        )}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={[styles.emptyTitle, { color: colors.text }]}>No matches yet</Text>
            <Text style={[styles.emptyDescription, { color: colors.muted }]}>
              Try a different name or email.
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 24,
    flexGrow: 1,
  },
  search: {
    height: 48,
    borderRadius: 14,
    paddingHorizontal: 14,
    fontSize: 13,
    marginTop: 20,
    marginBottom: 8,
  },
  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 70,
    paddingVertical: 10,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  initials: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "800",
  },
  contactCopy: {
    flex: 1,
    gap: 4,
  },
  contactName: {
    fontSize: 13,
    fontWeight: "700",
  },
  contactEmail: {
    fontSize: 11,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    marginLeft: 54,
  },
  empty: {
    alignItems: "center",
    paddingVertical: 30,
  },
  emptyTitle: {
    fontSize: 14,
    fontWeight: "700",
  },
  emptyDescription: {
    fontSize: 12,
    marginTop: 7,
  },
});
