import { StyleSheet } from 'react-native';

export const CreateKelpWalletStyles = StyleSheet.create({
  cardContainer: {
    height: '100%',
  },
  mainContentContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  imageContainer: {
    alignItems: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: 48,
  },
  title: {
    fontSize: 25,
  },
  descriptionContainer: {
    maxWidth: '100%',
    marginTop: 25,
    paddingHorizontal: 32,
    fontSize: 14,
    lineHeight: 24,
    color: '#7a7b7d',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: '#7a7b7d',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    paddingBottom: 25,
    paddingHorizontal: 25,
  },
  button: {
    width: '100%',
    marginTop: 16,
  },
});

export const AgreementStyles = StyleSheet.create({
  cardContainer: {
    height: '100%',
  },
  titleContainer: {
    alignItems: 'center',
    paddingHorizontal: 53,
  },
  mainContentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
  },
  subtitleContainer: {
    maxWidth: '100%',
    marginTop: 49,
    paddingHorizontal: 25,
    fontSize: 14,
    lineHeight: 24,
    alignItems: 'center',
  },
  agreementContainer: { paddingHorizontal: 25, marginTop: 40 },
  agreementWrapper: {
    height: 44,
    justifyContent: 'center',
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: '#7a7b7d',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    paddingBottom: 25,
    paddingHorizontal: 25,
  },
  button: {
    width: '100%',
  },
});

export const PhraseShowStyles = StyleSheet.create({
  cardContainer: {
    height: '100%',
  },
  titleContainer: {
    alignItems: 'center',
    paddingHorizontal: 53,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
  },
  subtitleContainer: {
    maxWidth: '100%',
    marginTop: 16,
    paddingHorizontal: 25,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#7a7b7d',
    paddingHorizontal: 6,
  },
  phraseContainer: {
    marginTop: 30,
    paddingHorizontal: 25,
    flexWrap: 'wrap',
    height: 359,
  },
  rightPhraseWrapper: { width: '50%', alignItems: 'flex-end' },
  leftPhraseWrapper: { width: '50%', alignItems: 'flex-start' },

  phrase: {
    width: 110,
    flexDirection: 'row',
  },
  word: {
    fontSize: 20,
    lineHeight: 24,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    paddingBottom: 25,
    paddingHorizontal: 25,
  },
  button: {
    width: '100%',
  },
  mainContentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export const PhraseVerifyStyles = StyleSheet.create({
  cardContainer: {
    height: '100%',
  },
  mainContentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    paddingHorizontal: 53,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
  },
  subtitleContainer: {
    maxWidth: '100%',
    marginTop: 25,
    paddingHorizontal: 25,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: '#7a7b7d',
    paddingHorizontal: 6,
  },
  phraseContainer: {
    marginTop: 56,
    paddingHorizontal: 25,
  },
  phraseWrapper: { flexDirection: 'row', justifyContent: 'space-between' },
  phrase: {
    width: 92,
    height: 28,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  phraseIndex: {
    color: '#ffffff',
    fontSize: 16,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    paddingBottom: 25,
    paddingHorizontal: 25,
  },
  button: {
    width: '100%',
  },
});

export const PhraseRecoveryStyles = StyleSheet.create({
  cardContainer: {
    height: '100%',
  },
  mainContentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    paddingHorizontal: 53,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
  },
  subtitleContainer: {
    maxWidth: '100%',
    marginTop: 25,
    paddingHorizontal: 25,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: '#7a7b7d',
    paddingHorizontal: 6,
  },
  phraseContainer: {
    marginTop: 56,
    paddingHorizontal: 25,
    paddingBottom: 36,
  },
  phraseWrapper: { flexDirection: 'row', justifyContent: 'space-between' },
  phrase: {
    width: 92,
    height: 28,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
    borderWidth: 1,
    borderStyle: 'dashed',
  },
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingBottom: 25,
    paddingHorizontal: 25,
  },
});
