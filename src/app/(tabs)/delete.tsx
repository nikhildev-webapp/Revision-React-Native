import { useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ExerciseHeader } from "../../components/exercise-header";
import { useAppTheme } from "../../components/theme-context";

export default function DeleteScreen() {
  const { colors } = useAppTheme();
  const [isDialogVisible, setDialogVisible] = useState(false);
  const [deleteConfirmed, setDeleteConfirmed] = useState(false);

  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      style={[styles.safeArea, { backgroundColor: colors.background }]}
    >
      <View style={styles.content}>
        <ExerciseHeader
          eyebrow="EXERCISE 05 / MODAL"
          title="Danger zone"
          description="Practice a confirmation dialog before a destructive action."
        />
        <View style={[styles.card, { backgroundColor: colors.surface }]}>
          <View style={[styles.icon, { backgroundColor: colors.elevated }]}>
            <Text style={[styles.iconText, { color: colors.danger }]}>!</Text>
          </View>
          <Text style={[styles.cardTitle, { color: colors.text }]}>Delete account</Text>
          <Text style={[styles.cardDescription, { color: colors.muted }]}>
            Ask for confirmation before continuing with an irreversible action.
          </Text>
          <Pressable
            accessibilityRole="button"
            onPress={() => {
              setDeleteConfirmed(false);
              setDialogVisible(true);
            }}
            style={({ pressed }) => [
              styles.deleteButton,
              { borderColor: colors.danger, opacity: pressed ? 0.75 : 1 },
            ]}
          >
            <Text style={[styles.deleteButtonText, { color: colors.danger }]}>
              Delete account
            </Text>
          </Pressable>
          {deleteConfirmed && (
            <Text style={[styles.confirmation, { color: colors.muted }]}>
              Demo confirmation complete. No account was deleted.
            </Text>
          )}
        </View>
      </View>

      <Modal
        transparent
        animationType="fade"
        visible={isDialogVisible}
        onRequestClose={() => setDialogVisible(false)}
      >
        <View style={styles.backdrop}>
          <View style={[styles.dialog, { backgroundColor: colors.surface }]}>
            <View style={[styles.icon, { backgroundColor: colors.elevated }]}>
              <Text style={[styles.iconText, { color: colors.danger }]}>!</Text>
            </View>
            <Text style={[styles.dialogTitle, { color: colors.text }]}>
              Delete your account?
            </Text>
            <Text style={[styles.dialogDescription, { color: colors.muted }]}>
              This action can&apos;t be undone. This exercise won&apos;t delete a real account.
            </Text>
            <View style={styles.dialogButtons}>
              <Pressable
                accessibilityRole="button"
                onPress={() => setDialogVisible(false)}
                style={[styles.dialogButton, { backgroundColor: colors.elevated }]}
              >
                <Text style={[styles.cancelText, { color: colors.text }]}>Cancel</Text>
              </Pressable>
              <Pressable
                accessibilityRole="button"
                onPress={() => {
                  setDialogVisible(false);
                  setDeleteConfirmed(true);
                }}
                style={[styles.dialogButton, { backgroundColor: colors.danger }]}
              >
                <Text style={styles.confirmText}>Confirm</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
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
  card: {
    alignItems: "center",
    borderRadius: 22,
    padding: 22,
    marginTop: 14,
  },
  icon: {
    width: 46,
    height: 46,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },
  iconText: {
    fontSize: 23,
    fontWeight: "800",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "800",
  },
  cardDescription: {
    fontSize: 12,
    lineHeight: 18,
    textAlign: "center",
    marginTop: 8,
    marginBottom: 18,
  },
  deleteButton: {
    width: "100%",
    minHeight: 48,
    borderWidth: 1,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  deleteButtonText: {
    fontSize: 13,
    fontWeight: "800",
  },
  confirmation: {
    fontSize: 11,
    textAlign: "center",
    lineHeight: 16,
    marginTop: 12,
  },
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.68)",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  dialog: {
    width: "100%",
    maxWidth: 360,
    borderRadius: 24,
    padding: 22,
    alignItems: "center",
  },
  dialogTitle: {
    fontSize: 19,
    fontWeight: "800",
    textAlign: "center",
  },
  dialogDescription: {
    fontSize: 13,
    lineHeight: 19,
    textAlign: "center",
    marginTop: 9,
    marginBottom: 21,
  },
  dialogButtons: {
    flexDirection: "row",
    width: "100%",
    gap: 10,
  },
  dialogButton: {
    flex: 1,
    minHeight: 46,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
  },
  cancelText: {
    fontSize: 13,
    fontWeight: "700",
  },
  confirmText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "800",
  },
});
