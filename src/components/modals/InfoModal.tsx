import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="ಆಟದ ನಿಯಮಗಳು" isOpen={isOpen} handleClose={handleClose}>
      <a href="https://youtu.be/08XuE_kq2L0" className="underline font-bold">
        👉 ಹೇಗೆ ಆಡುವುದು? ▶️ 👈
      </a>
      <br />
      <br />
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
          status={{ status: 'correct', actual: '' }}
        />
        <Cell value="ದ" />
        <Cell value="ನೆ" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        ವಂ ಅಕ್ಷರವು ಪದದಲ್ಲಿ ಇದೆ ಮತ್ತು ಸರಿಯಾದ ಸ್ಥಳದಲ್ಲಿದೆ.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="ಭಾ" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="ರ"
          status={{ status: 'present', actual: 'ರೂ' }}
        />
        <Cell value="ತ" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        ರ ಅಕ್ಷರವು ಪದದಲ್ಲಿದೆ ಆದರೆ ತಪ್ಪಾದ ಸ್ಥಳದಲ್ಲಿದೆ. ಊಹಿಸಿದ ಅಕ್ಷರ ಒತ್ತಕ್ಷರ
        ಸಹಿತವಾಗಬೇಕಾದ್ದಲ್ಲಿ, ಅದನ್ನು ಚೌಕದ ತಳ ಎಡ ತುದಿಯಲ್ಲಿ ತಿಳಿಸಲಾಗುವುದು. ಇಲ್ಲಿ ರೂ
        ಬೇಕಾದ ಅಕ್ಷರ.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="ಗೆ" />
        <Cell value="ಳೆ" />
        <Cell
          value="ಯ"
          isRevealing={true}
          isCompleted={true}
          status={{ status: 'absent', actual: '' }}
        />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        ಯ ಅಕ್ಷರವು ಪದದಲ್ಲಿಲ್ಲ.
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
      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ಸಂಪರ್ಕಿಸಿ:
        <a
          href="https://twitter.com/OmkarShetkar"
          className="underline font-bold"
        >
          @OmkarShetkar
        </a>
        <br />
        Email: kannada.wordle@gmail.com
      </p>
    </BaseModal>
  )
}
