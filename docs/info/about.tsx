import { View, StyleSheet } from 'react-native';
import { Text } from '@/src/components/ui';
import { ModalPage } from '@/src/components/layout/ModalPage';
import { Section } from '@/src/components/ui/Section';
import { useTheme } from '@/src/contexts/ThemeContext';
import { useLanguageContext } from '@/src/contexts/LanguageContext';
import { getStrings } from '@/src/locales';
import * as Application from 'expo-application';
import { useSubscription } from '@/src/contexts/SubscriptionContext';

export default function AboutScreen() {
  const { theme, textSizeMultiplier } = useTheme();
  const { currentLanguage } = useLanguageContext();
  const strings = getStrings();
  const { isPremium } = useSubscription();

  // Tous les versets sont maintenant accessibles gratuitement
  const versesCount = 426;

  return (
    <ModalPage title={strings.about.title}>
      <View style={styles.container}>

        {/* Description */}
        <Text style={[
          styles.description,
          {
            color: theme.colors.textSecondary,
            fontSize: theme.typography.fontSize.md * textSizeMultiplier,
            lineHeight: (theme.typography.fontSize.md * textSizeMultiplier) * theme.typography.lineHeight.normal,
            marginBottom: theme.spacing.lg,
          }
        ]}>
          {strings.about.description}
        </Text>

        {/* Nombre de versets disponibles */}
        <Section title={strings.about.versesAvailable}>
          <Text
            style={{
              color: theme.colors.textSecondary,
              fontSize: theme.typography.fontSize.md * textSizeMultiplier,
            }}
          >
            {strings.about.versesCount.replace('{{count}}', versesCount.toString())}
          </Text>
        </Section>

        {/* Version de la Bible */}
        <Section title={strings.about.bibleVersion}>
          <Text
            style={{
              color: theme.colors.textSecondary,
              fontSize: theme.typography.fontSize.md * textSizeMultiplier,
            }}
          >
            {strings.about.bibleVersionName}
          </Text>
          <Text
            style={{
              color: theme.colors.textTertiary,
              fontSize: theme.typography.fontSize.sm * textSizeMultiplier,
              marginTop: theme.spacing.xs,
            }}
          >
            {strings.about.bibleVersionCopyright}
          </Text>
        </Section>

        {/* Version de l'application */}
        <Section title={strings.about.appVersion}>
          <Text
            style={{
              color: theme.colors.textSecondary,
              fontSize: theme.typography.fontSize.md * textSizeMultiplier,
            }}
          >
            {strings.about.versionInfo.replace(
              '{{version}}',
              Application.nativeApplicationVersion || '1.0.0'
            )}
          </Text>
        </Section>

        {/* Message de remerciement */}
        <View style={[styles.thankYouSection, { marginTop: theme.spacing.xl }]}>
          <Text
            style={{
              color: theme.colors.primary,
              fontSize: theme.typography.fontSize.lg * textSizeMultiplier,
              fontWeight: theme.typography.fontWeight.bold as any,
              textAlign: 'center',
              marginBottom: theme.spacing.sm,
            }}
          >
            {strings.about.thankYou}
          </Text>
          <Text
            style={{
              color: theme.colors.textSecondary,
              fontSize: theme.typography.fontSize.md * textSizeMultiplier,
              textAlign: 'center',
              fontStyle: 'italic',
            }}
          >
            {strings.about.developedWith}
          </Text>
        </View>

      </View>
    </ModalPage>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20, // Standard iOS/Android margin (16-24px)
  },
  description: {
    marginTop: 4,
  },
  thankYouSection: {
    paddingVertical: 16,
  },
});
