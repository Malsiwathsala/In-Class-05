import { Image, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme';

const SIZE = 150;

// Pass `source` (e.g. require('../../assets/avatar.png') or { uri }) to show a photo.
// Without it, a generic person icon is shown.
export default function Avatar({ source, verified = false }) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.circle}>
        {source ? (
          <Image source={source} style={styles.image} />
        ) : (
          <Ionicons name="person" size={SIZE * 0.55} color={colors.label} />
        )}
      </View>
      {verified && (
        <Ionicons
          name="checkmark"
          size={44}
          color={colors.badge}
          style={styles.badge}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: SIZE,
    height: SIZE,
  },
  circle: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: colors.avatarBg,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  badge: {
    position: 'absolute',
    right: 22,
    bottom: 8,
  },
});
