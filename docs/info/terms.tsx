import { View, StyleSheet } from 'react-native';
import { Text } from '@/src/components/ui';
import { ModalPage } from '@/src/components/layout/ModalPage';
import { Section } from '@/src/components/ui/Section';
import { useTheme } from '@/src/contexts/ThemeContext';
import { useLanguageContext } from '@/src/contexts/LanguageContext';
import { getStrings } from '@/src/locales';
import { useLineHeight } from '@/src/hooks/useLineHeight';

export default function TermsScreen() {
  const { theme, textSizeMultiplier } = useTheme();
  const { currentLanguage } = useLanguageContext();
  const strings = getStrings();
  const { getOptimalLineHeight } = useLineHeight();

  const TextBlock = ({ children }: { children: string }) => (
    <Text
      style={{
        color: theme.colors.textSecondary,
        fontSize: theme.typography.fontSize.md * textSizeMultiplier,
        lineHeight: getOptimalLineHeight(theme.typography.fontSize.md),
        marginBottom: theme.spacing.sm,
      }}
    >
      {children}
    </Text>
  );

  // Obtenir la date actuelle selon la langue
  const dateLocale = currentLanguage === 'de' ? 'de-DE' : currentLanguage === 'en' ? 'en-US' : 'fr-FR';
  const currentDate = new Date().toLocaleDateString(dateLocale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <ModalPage title={strings.terms.title}>
      <View style={styles.container}>

        {/* En-tête */}
        <Text style={[
          styles.headerText,
          {
            color: theme.colors.textSecondary,
            fontSize: theme.typography.fontSize.md * 0.9 * textSizeMultiplier,
            marginBottom: theme.spacing.md,
          }
        ]}>
          {strings.terms.lastUpdated} {currentDate}
        </Text>

        {/* Message de bienvenue */}
        <Text style={[
          styles.welcome,
          {
            color: theme.colors.textSecondary,
            fontSize: theme.typography.fontSize.md * textSizeMultiplier,
            lineHeight: (theme.typography.fontSize.md * textSizeMultiplier) * theme.typography.lineHeight.normal,
            marginBottom: theme.spacing.lg,
          }
        ]}>
          {strings.terms.welcome}
        </Text>

        {/* 1. Acceptation des conditions */}
        <Section title={strings.terms.section1Title}>
          <TextBlock>{strings.terms.section1Text}</TextBlock>
        </Section>

        {/* 2. Utilisation du service */}
        <Section title={strings.terms.section2Title}>
          <TextBlock>{strings.terms.section2Text}</TextBlock>
        </Section>

        {/* 3. Compte utilisateur */}
        <Section title={strings.terms.section3Title}>
          <TextBlock>{strings.terms.section3Text}</TextBlock>
        </Section>

        {/* 4. Modifications des conditions */}
        <Section title={strings.terms.section4Title}>
          <TextBlock>{strings.terms.section4Text}</TextBlock>
        </Section>

        {/* 5. Contact */}
        <Section title={strings.terms.section5Title}>
          <TextBlock>{strings.terms.section5Text}</TextBlock>
        </Section>

      </View>
    </ModalPage>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20, // Standard iOS/Android margin (16-24px)
  },
  headerText: {
    fontStyle: 'italic',
    marginTop: 4,
  },
  welcome: {
    marginTop: 4,
  },
});
