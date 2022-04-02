import { getStatuses } from '../../lib/statuses'
import { Key } from './Key'
import { useEffect, useState } from 'react'
import { ENTER_TEXT, DELETE_TEXT } from '../../constants/strings'
import { localeAwareUpperCase } from '../../lib/words'

type Props = {
  onChar: (value: string) => void
  onDelete: () => void
  onEnter: () => void
  guesses: string[]
  isRevealing?: boolean
}

export const Keyboard = ({
  onChar,
  onDelete,
  onEnter,
  guesses,
  isRevealing,
}: Props) => {
  const charStatuses = getStatuses(guesses)

  const onClick = (value: string) => {
    if (value === 'ENTER') {
      onEnter()
    } else if (value === 'DELETE') {
      onDelete()
    } else if (value === 'ಸ್ವರಗಳು') {
      setShowSwaras(true)
      setShowGunitakshara(false)
    } else if (value === 'ವ್ಯಂಜನಗಳು') {
      setShowSwaras(false)
      setShowGunitakshara(false)
    } else if (value === 'ಗುಣಿತಾಕ್ಷರ' && gunitakshara.length > 0) {
      // Only if gunitkshara contains data to display
      setShowGunitakshara(!showGunitakshara)
      setShowSwaras(false)
      onDelete()
    } else {
      if (vyanjana.includes(value)) {
        // If its vyanja, populate gunitakshara
        let temp = vowelSigns.map((v) => value + v)
        setGunitakshara(temp)
      } else {
        // As current selected letter is not vynjana, reset the keyboard
        setGunitakshara([])
        setShowSwaras(false)
        setShowGunitakshara(false)
      }
      onChar(value)
    }
  }

  const vyanjana = [
    'ಕ',
    'ಖ',
    'ಗ',
    'ಘ',
    'ಙ',
    'ಚ',
    'ಛ',
    'ಜ',
    'ಝ',
    'ಞ',
    'ಟ',
    'ಠ',
    'ಡ',
    'ಢ',
    'ಣ',
    'ತ',
    'ಥ',
    'ದ',
    'ಧ',
    'ನ',
    'ಪ',
    'ಫ',
    'ಬ',
    'ಭ',
    'ಮ',
    'ಯ',
    'ರ',
    'ಲ',
    'ವ',
    'ಶ',
    'ಷ',
    'ಸ',
    'ಹ',
    'ಳ',
    'ಕ್ಷ',
    'ಜ್',
  ]

  const vowelSigns = [
    '\u{CBE}',
    '\u{CBF}',
    '\u{CC0}',
    '\u{CC1}',
    '\u{CC2}',
    '\u{CC3}',
    '\u{CC4}',
    '\u{CC6}',
    '\u{CC7}',
    '\u{CC8}',
    '\u{CCA}',
    '\u{CCB}',
    '\u{CCC}',
    '\u{C82}',
    '\u{C83}',
  ]

  const [showSwaras, setShowSwaras] = useState(false)
  const [showGunitakshara, setShowGunitakshara] = useState(false)
  const [gunitakshara, setGunitakshara] = useState<string[]>([])

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        onEnter()
      } else if (e.code === 'Backspace') {
        onDelete()
      } else {
        const key = localeAwareUpperCase(e.key)
        // TODO: check this test if the range works with non-english letters
        if (key.length === 1 && key >= 'A' && key <= 'Z') {
          onChar(key)
        }
      }
    }
    window.addEventListener('keyup', listener)
    return () => {
      window.removeEventListener('keyup', listener)
    }
  }, [onEnter, onDelete, onChar])

  return (
    <div>
      {!showSwaras && !showGunitakshara && (
        <div>
          <div className="flex justify-center mb-1">
            {['ಕ', 'ಖ', 'ಗ', 'ಘ', 'ಙ', 'ಚ', 'ಛ', 'ಜ', 'ಝ', 'ಞ'].map((key) => (
              <Key
                value={key}
                key={key}
                onClick={onClick}
                status={charStatuses[key]}
                isRevealing={isRevealing}
              />
            ))}
          </div>
          <div className="flex justify-center mb-1">
            {['ಟ', 'ಠ', 'ಡ', 'ಢ', 'ಣ', 'ತ', 'ಥ', 'ದ', 'ಧ', 'ನ'].map((key) => (
              <Key
                value={key}
                key={key}
                onClick={onClick}
                status={charStatuses[key]}
                isRevealing={isRevealing}
              />
            ))}
          </div>
        </div>
      )}

      {showSwaras && (
        <div>
          <div className="flex justify-center mb-1">
            {['ಅ', 'ಆ', 'ಇ', 'ಈ', 'ಉ', 'ಊ', 'ಋ', 'ೠ', 'ಎ', 'ಏ'].map((key) => (
              <Key
                value={key}
                key={key}
                onClick={onClick}
                status={charStatuses[key]}
                isRevealing={isRevealing}
              />
            ))}
          </div>
          <div className="flex justify-center mb-1">
            {['ಐ', 'ಒ', 'ಓ', 'ಔ', 'ಅಂ', 'ಅಃ'].map((key) => (
              <Key
                value={key}
                key={key}
                onClick={onClick}
                status={charStatuses[key]}
                isRevealing={isRevealing}
              />
            ))}
          </div>
        </div>
      )}

      {showGunitakshara && (
        <div>
          <div className="flex justify-center mb-1">
            {gunitakshara.slice(0, 10).map((key) => (
              <Key
                value={key}
                key={key}
                onClick={onClick}
                status={charStatuses[key]}
                isRevealing={isRevealing}
              />
            ))}
          </div>
          <div className="flex justify-center mb-1">
            {gunitakshara.slice(11).map((key) => (
              <Key
                value={key}
                key={key}
                onClick={onClick}
                status={charStatuses[key]}
                isRevealing={isRevealing}
              />
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-center mb-1">
        <Key
          width={65.4}
          value={showSwaras ? 'ವ್ಯಂಜನಗಳು' : 'ಸ್ವರಗಳು'}
          onClick={onClick}
        >
          {showSwaras ? 'ವ್ಯಂಜನಗಳು' : 'ಸ್ವರಗಳು'}
        </Key>
        {['ಪ', 'ಫ', 'ಬ', 'ಭ', 'ಮ', 'ಯ', 'ರ', 'ಲ', 'ವ'].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
            isRevealing={isRevealing}
          />
        ))}
        <Key width={65.4} value="ಗುಣಿತಾಕ್ಷರ" onClick={onClick}>
          {'ಗುಣಿತಾಕ್ಷರ'}
        </Key>
      </div>
      <div className="flex justify-center">
        <Key width={65.4} value="ENTER" onClick={onClick}>
          {ENTER_TEXT}
        </Key>
        {['ಶ', 'ಷ', 'ಸ', 'ಹ', 'ಳ', 'ಕ್ಷ', 'ಜ್'].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
            isRevealing={isRevealing}
          />
        ))}
        <Key width={65.4} value="DELETE" onClick={onClick}>
          {DELETE_TEXT}
        </Key>
      </div>
    </div>
  )
}
