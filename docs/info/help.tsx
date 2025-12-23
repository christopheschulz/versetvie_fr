import { View, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Text } from '@/src/components/ui';
import { ModalPage } from '@/src/components/layout/ModalPage';
import { Section } from '@/src/components/ui/Section';
import { useTheme } from '@/src/contexts/ThemeContext';
import { useLanguageContext } from '@/src/contexts/LanguageContext';
import { getStrings } from '@/src/locales';
import { useLineHeight } from '@/src/hooks/useLineHeight';

export default function HelpScreen() {
  const { theme, textSizeMultiplier } = useTheme();
  const { currentLanguage } = useLanguageContext();
  const strings = getStrings();
  const { getOptimalLineHeight } = useLineHeight();

  const FAQItem = ({ question, answer }: { question: string; answer: string }) => (
    <View style={{ marginBottom: theme.spacing.md }}>
      <Text
        style={{
          color: theme.colors.text,
          fontSize: theme.typography.fontSize.md * 1.1 * textSizeMultiplier,
          fontWeight: '600',
          marginBottom: theme.spacing.xs,
        }}
      >
        {question}
      </Text>
      <Text
        style={{
          color: theme.colors.textSecondary,
          fontSize: theme.typography.fontSize.md * textSizeMultiplier,
          lineHeight: getOptimalLineHeight(theme.typography.fontSize.md),
        }}
      >
        {answer}
      </Text>
    </View>
  );

  const handleContactPress = () => {
    Linking.openURL('mailto:krisskoolbycode@etik.com');
  };

  return (
    <ModalPage title={strings.help.title}>
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
          {strings.help.description}
        </Text>

        {/* FAQ */}
        <Section title={strings.help.faqTitle}>
          <FAQItem
            question={strings.help.faq.howItWorks.question}
            answer={strings.help.faq.howItWorks.answer}
          />
          <FAQItem
            question={strings.help.faq.oncePerDay.question}
            answer={strings.help.faq.oncePerDay.answer}
          />
          <FAQItem
            question={strings.help.faq.changeInfo.question}
            answer={strings.help.faq.changeInfo.answer}
          />
          <FAQItem
            question={strings.help.faq.bug.question}
            answer={strings.help.faq.bug.answer}
          />
        </Section>

        {/* Contact */}
        <Section title={strings.help.contactTitle}>
          <Text style={[
            styles.description,
            {
              color: theme.colors.textSecondary,
              fontSize: theme.typography.fontSize.md * textSizeMultiplier,
              lineHeight: (theme.typography.fontSize.md * textSizeMultiplier) * theme.typography.lineHeight.normal,
              marginBottom: theme.spacing.md,
            }
          ]}>
            {strings.help.contactDescription}
          </Text>
          <TouchableOpacity
            onPress={handleContactPress}
            style={[
              styles.contactButton,
              {
                backgroundColor: theme.colors.primary,
                borderRadius: theme.spacing.sm,
                padding: theme.spacing.md,
              }
            ]}
          >
            <Text
              style={{
                color: theme.colors.background,
                fontSize: theme.typography.fontSize.md * textSizeMultiplier,
                fontWeight: theme.typography.fontWeight.semibold as any,
                textAlign: 'center',
              }}
            >
              {strings.help.contactUs}
            </Text>
          </TouchableOpacity>
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
  description: {
    marginTop: 4,
  },
  contactButton: {
    marginTop: 8,
  },
});
