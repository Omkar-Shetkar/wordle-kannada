export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['ಶಹಭಾಷ್!', 'ಅದ್ಭುತ', 'ಅತಿ ಉತ್ತಮ!']
export const GAME_COPIED_MESSAGE = 'ಆಟವನ್ನು ಕ್ಲಿಪ್‌ಬೋರ್ಡ್‌ಗೆ ನಕಲಿಸಲಾಗಿದೆ'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'ಸಾಕಷ್ಟು ಅಕ್ಷರಗಳಿಲ್ಲ'
export const WORD_NOT_FOUND_MESSAGE = 'ಪದ ಕಂಡುಬಂದಿಲ್ಲ'
export const HARD_MODE_ALERT_MESSAGE =
  'ಹಾರ್ಡ್ ಮೋಡ್ ಅನ್ನು ಪ್ರಾರಂಭದಲ್ಲಿ ಮಾತ್ರ ಸಕ್ರಿಯಗೊಳಿಸಬಹುದು!'
export const HARD_MODE_DESCRIPTION =
  'ಯಾವುದೇ ಬಹಿರಂಗ ಸುಳಿವುಗಳನ್ನು ನಂತರದ ಊಹೆಗಳಲ್ಲಿ ಬಳಸಬೇಕು'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'ಸುಧಾರಿತ ಬಣ್ಣ ದೃಷ್ಟಿಗಾಗಿ'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `${solution} ಎಂಬ ಪದವಾಗಿತ್ತು`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `${position} ನೇ ಸ್ಥಾನದಲ್ಲಿ ${guess} ಇರಬೇಕು `
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `ಊಹೆ ${letter} ಹೊಂದಿರಬೇಕು`
export const ENTER_TEXT = 'ನಮೂದಿಸಿ'
export const DELETE_TEXT = 'ಅಳಿಸಿ'
export const STATISTICS_TITLE = 'ಅಂಕಿಅಂಶಗಳು'
export const GUESS_DISTRIBUTION_TEXT = 'ಊಹಾ ವಿತರಣೆ'
export const NEW_WORD_TEXT = 'ಹೊಸ ಪದ'
export const SHARE_TEXT = 'ಹಂಚಿಕೊಳ್ಳಿ'
export const TOTAL_TRIES_TEXT = 'ಒಟ್ಟು ಪ್ರಯತ್ನಗಳು'
export const SUCCESS_RATE_TEXT = 'ಯಶಸ್ಸಿನ ಪ್ರಮಾಣ'
export const CURRENT_STREAK_TEXT = 'ಪ್ರಸ್ತುತ ಸರಣಿ'
export const BEST_STREAK_TEXT = 'ಅತ್ಯುತ್ತಮ ಸರಣಿ'
