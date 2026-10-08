import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Avatar from '../components/Avatar';
import InfoField from '../components/InfoField';
import { colors } from '../theme';

const user = {
  name: 'Diluka',
  email: 'diluka.w@nsbm.ac.lk',
  points: 0,
};

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.screen}>
      <View style={[styles.header, { paddingTop: insets.top + 12 }]}>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.avatarSection}>
          <Avatar source={require('../../assets/avatar.jpg')} />
        </View>
        <View style={styles.divider} />

        <InfoField label="Name" value={user.name} />
        <InfoField label="Email" value={user.email} icon="mail" />
        <InfoField label="Points" value={String(user.points)} icon="star" />
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.fab,
          { bottom: insets.bottom + 24 },
          pressed && styles.fabPressed,
        ]}
        onPress={() => {}}
        accessibilityLabel="Add"
      >
        <Ionicons name="add" size={24} color={colors.fabIcon} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.headerBg,
    paddingBottom: 16,
    alignItems: 'center',
  },
  headerTitle: {
    color: colors.headerText,
    fontSize: 18,
    fontWeight: '700',
  },
  body: {
    flex: 1,
    paddingHorizontal: 24,
  },
  avatarSection: {
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 12,
  },
  divider: {
    height: 2,
    backgroundColor: colors.divider,
    marginBottom: 24,
  },
  fab: {
    position: 'absolute',
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.fab,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  fabPressed: {
    opacity: 0.8,
  },
});
