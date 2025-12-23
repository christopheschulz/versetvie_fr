import { View, StyleSheet } from 'react-native';
import { Text } from '@/src/components/ui';
import { ModalPage } from '@/src/components/layout/ModalPage';
import { Section } from '@/src/components/ui/Section';
import { useTheme } from '@/src/contexts/ThemeContext';
import { useLanguageContext } from '@/src/contexts/LanguageContext';
import { getStrings } from '@/src/locales';
import { useLineHeight } from '@/src/hooks/useLineHeight';

export default function PrivacyScreen() {
  const { theme, textSizeMultiplier } = useTheme();
  const { currentLanguage } = useLanguageContext();
  const strings = getStrings();
  const { getOptimalLineHeight } = useLineHeight();

  const Subsection = ({ title, text }: { title: string; text: string }) => (
    <View style={{ marginBottom: theme.spacing.md }}>
      <Text
        style={{
          color: theme.colors.text,
          fontSize: theme.typography.fontSize.md * 1.1 * textSizeMultiplier,
          fontWeight: '600',
          marginBottom: theme.spacing.xs,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          color: theme.colors.textSecondary,
          fontSize: theme.typography.fontSize.md * textSizeMultiplier,
          lineHeight: getOptimalLineHeight(theme.typography.fontSize.md),
        }}
      >
        {text}
      </Text>
    </View>
  );

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
    <ModalPage title={strings.privacy.title}>
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
          {strings.privacy.lastUpdated.replace('{{date}}', currentDate)}
        </Text>

        {/* Introduction */}
        <Text style={[
          styles.introduction,
          {
            color: theme.colors.textSecondary,
            fontSize: theme.typography.fontSize.md * textSizeMultiplier,
            lineHeight: (theme.typography.fontSize.md * textSizeMultiplier) * theme.typography.lineHeight.normal,
            marginBottom: theme.spacing.lg,
          }
        ]}>
          {strings.privacy.introduction}
        </Text>

        {/* Section 1 - Données collectées */}
        <Section title={strings.privacy.section1.title}>
          <Subsection
            title={strings.privacy.section1.profileDataTitle}
            text={strings.privacy.section1.profileData}
          />
          <Subsection
            title={strings.privacy.section1.analyticsDataTitle}
            text={strings.privacy.section1.analyticsData}
          />
          <Subsection
            title={strings.privacy.section1.attributionDataTitle}
            text={strings.privacy.section1.attributionData}
          />
        </Section>

        {/* Section 2 - Ce que nous NE collectons PAS */}
        <Section title={strings.privacy.section2.title}>
          <TextBlock>{strings.privacy.section2.content}</TextBlock>
        </Section>

        {/* Section 3 - Utilisation des données */}
        <Section title={strings.privacy.section3.title}>
          <Subsection
            title={strings.privacy.section3.profileUsageTitle}
            text={strings.privacy.section3.profileUsage}
          />
          <Subsection
            title={strings.privacy.section3.analyticsUsageTitle}
            text={strings.privacy.section3.analyticsUsage}
          />
          <Subsection
            title={strings.privacy.section3.attributionUsageTitle}
            text={strings.privacy.section3.attributionUsage}
          />
        </Section>

        {/* Section 4 - Partage des données */}
        <Section title={strings.privacy.section4.title}>
          <Subsection
            title={strings.privacy.section4.mixpanelTitle}
            text={strings.privacy.section4.mixpanelContent}
          />
          <Subsection
            title={strings.privacy.section4.tenjinTitle}
            text={strings.privacy.section4.tenjinContent}
          />
          <Subsection
            title={strings.privacy.section4.revenuecatTitle}
            text={strings.privacy.section4.revenuecatContent}
          />
          <Subsection
            title={strings.privacy.section4.supabaseTitle}
            text={strings.privacy.section4.supabaseContent}
          />
          <Subsection
            title={strings.privacy.section4.noOtherSharingTitle}
            text={strings.privacy.section4.noOtherSharing}
          />
        </Section>

        {/* Section 5 - Stockage et sécurité */}
        <Section title={strings.privacy.section5.title}>
          <Subsection
            title={strings.privacy.section5.localStorageTitle}
            text={strings.privacy.section5.localStorage}
          />
          <Subsection
            title={strings.privacy.section5.mixpanelStorageTitle}
            text={strings.privacy.section5.mixpanelStorage}
          />
          <Subsection
            title={strings.privacy.section5.tenjinStorageTitle}
            text={strings.privacy.section5.tenjinStorage}
          />
          <Subsection
            title={strings.privacy.section5.supabaseStorageTitle}
            text={strings.privacy.section5.supabaseStorage}
          />
          <Subsection
            title={strings.privacy.section5.retentionTitle}
            text={strings.privacy.section5.retention}
          />
        </Section>

        {/* Section 6 - Vos droits (RGPD) */}
        <Section title={strings.privacy.section6.title}>
          <TextBlock>{strings.privacy.section6.content}</TextBlock>
          <View style={styles.rightsList}>
            <Text style={[
              styles.rightItem,
              {
                color: theme.colors.textSecondary,
                fontSize: theme.typography.fontSize.md * textSizeMultiplier,
                lineHeight: (theme.typography.fontSize.md * textSizeMultiplier) * theme.typography.lineHeight.normal,
              }
            ]}>
              <Text style={{ fontWeight: '600' }}>{strings.privacy.section6.accessRight}</Text>
              {strings.privacy.section6.accessRightDesc}
            </Text>
            <Text style={[
              styles.rightItem,
              {
                color: theme.colors.textSecondary,
                fontSize: theme.typography.fontSize.md * textSizeMultiplier,
                lineHeight: (theme.typography.fontSize.md * textSizeMultiplier) * theme.typography.lineHeight.normal,
              }
            ]}>
              <Text style={{ fontWeight: '600' }}>{strings.privacy.section6.rectificationRight}</Text>
              {strings.privacy.section6.rectificationRightDesc}
            </Text>
            <Text style={[
              styles.rightItem,
              {
                color: theme.colors.textSecondary,
                fontSize: theme.typography.fontSize.md * textSizeMultiplier,
                lineHeight: (theme.typography.fontSize.md * textSizeMultiplier) * theme.typography.lineHeight.normal,
              }
            ]}>
              <Text style={{ fontWeight: '600' }}>{strings.privacy.section6.erasureRight}</Text>
              {strings.privacy.section6.erasureRightDesc}
            </Text>
            <Text style={[
              styles.rightItem,
              {
                color: theme.colors.textSecondary,
                fontSize: theme.typography.fontSize.md * textSizeMultiplier,
                lineHeight: (theme.typography.fontSize.md * textSizeMultiplier) * theme.typography.lineHeight.normal,
              }
            ]}>
              <Text style={{ fontWeight: '600' }}>{strings.privacy.section6.objectionRight}</Text>
              {strings.privacy.section6.objectionRightDesc}
            </Text>
            <Text style={[
              styles.rightItem,
              {
                color: theme.colors.textSecondary,
                fontSize: theme.typography.fontSize.md * textSizeMultiplier,
                lineHeight: (theme.typography.fontSize.md * textSizeMultiplier) * theme.typography.lineHeight.normal,
              }
            ]}>
              <Text style={{ fontWeight: '600' }}>{strings.privacy.section6.portabilityRight}</Text>
              {strings.privacy.section6.portabilityRightDesc}
            </Text>
          </View>
          <TextBlock>{strings.privacy.section6.exerciseRights}</TextBlock>
        </Section>

        {/* Section 7 - Cookies et tracking */}
        <Section title={strings.privacy.section7.title}>
          <TextBlock>{strings.privacy.section7.content}</TextBlock>
        </Section>

        {/* Section 8 - Modifications */}
        <Section title={strings.privacy.section8.title}>
          <TextBlock>{strings.privacy.section8.content}</TextBlock>
        </Section>

        {/* Section 9 - Contact */}
        <Section title={strings.privacy.section9.title}>
          <TextBlock>{strings.privacy.section9.content}</TextBlock>
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
  introduction: {
    marginTop: 4,
  },
  rightsList: {
    marginTop: 12,
  },
  rightItem: {
    marginTop: 8,
  },
});
