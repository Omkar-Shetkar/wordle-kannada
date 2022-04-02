import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="ಆಟದ ನಿಯಮಗಳು" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        ಆರು ಪ್ರಯತ್ನಗಳಲ್ಲಿ ಪದವನ್ನು ಊಹಿಸಿ. ಪ್ರತಿ ಊಹೆಯ ನಂತರ, ಚೌಕದ ಬಣ್ಣವು
        ಬದಲಾಯಿಸುತ್ತದೆ. ಚೌಕದ ಬಣ್ಣ, ಪದಕ್ಕೆ ನಿಮ್ಮ ಊಹೆ ಎಷ್ಟು ಹತ್ತಿರವಾಗಿತ್ತು
        ಎಂಬುದನ್ನು ತೋರಿಸಲು ಸಹಾಯಕ.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="ವಂ"
          status="correct"
        />
        <Cell value="ದ" />
        <Cell value="ನೆ" />
        <Cell value="ಗ" />
        <Cell value="ಳು" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        ವಂ ಅಕ್ಷರವು ಪದದಲ್ಲಿ ಇದೆ ಮತ್ತು ಸರಿಯಾದ ಸ್ಥಳದಲ್ಲಿದೆ.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="ಮ" />
        <Cell value="ಹಾ" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="ಭಾ"
          status="present"
        />
        <Cell value="ರ" />
        <Cell value="ತ" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        ಭಾ ಅಕ್ಷರವು ಪದದಲ್ಲಿದೆ ಆದರೆ ತಪ್ಪಾದ ಸ್ಥಳದಲ್ಲಿದೆ.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="ಚ" />
        <Cell value="ಟು" />
        <Cell value="ವ" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="ಟಿ"
          status="absent"
        />
        <Cell value="ಕೆ" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        ಟಿ ಅಕ್ಷರವು ಯಾವುದೇ ಸ್ಥಳದಲ್ಲಿ ಪದದಲ್ಲಿಲ್ಲ.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        ಇದು ನಮ್ಮೆಲರ ಪ್ರೀತಿಯ ಪದ ಊಹಿಸುವ ಆಟದ ಮುಕ್ತ ಮೂಲ ಆವೃತ್ತಿಯ ಕನ್ನಡ ಅವತರಣಿಕೆ -{' '}
        <a
          href="https://github.com/Omkar-Shetkar/wordle-kannada"
          className="underline font-bold"
        >
          ಇಲ್ಲಿ ಕೋಡ್ ಪರಿಶೀಲಿಸಿ
        </a>{' '}
      </p>
    </BaseModal>
  )
}
