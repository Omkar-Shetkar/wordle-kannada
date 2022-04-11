import { Status } from '../../lib/statuses'
import classnames from 'classnames'
import { REVEAL_TIME_MS } from '../../constants/settings'
import { getStoredIsHighContrastMode } from '../../lib/localStorage'

type Props = {
  value?: string
  status?: Status
  isRevealing?: boolean
  isCompleted?: boolean
  position?: number
}

export const Cell = ({
  value,
  status,
  isRevealing,
  isCompleted,
  position = 0,
}: Props) => {
  const isFilled = value && !isCompleted
  const shouldReveal = isRevealing && isCompleted
  const animationDelay = `${position * REVEAL_TIME_MS}ms`
  const isHighContrast = getStoredIsHighContrastMode()

  const classes = classnames(
    'w-20 h-20 border-solid border-2 flex items-center justify-center mx-0.5 text-4xl font-bold rounded dark:text-white',
    {
      'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-600':
        !status?.status,
      'border-black dark:border-slate-100': value && !status?.status,
      'absent shadowed bg-slate-400 dark:bg-slate-700 text-white border-slate-400 dark:border-slate-700':
        status?.status === 'absent',
      'correct shadowed bg-orange-500 text-white border-orange-500':
        status?.status === 'correct' && isHighContrast,
      'present shadowed bg-cyan-500 text-white border-cyan-500':
        status?.status === 'present' && isHighContrast,
      'correct shadowed bg-green-500 text-white border-green-500':
        status?.status === 'correct' && !isHighContrast,
      'present shadowed bg-yellow-500 text-white border-yellow-500':
        status?.status === 'present' && !isHighContrast,
      'cell-fill-animation': isFilled,
      'cell-reveal': shouldReveal,
    }
  )

  return (
    <div
      className={classes}
      style={{
        animationDelay,
        flexDirection: 'column',
      }}
    >
      <div
        className="letter-container"
        style={{
          animationDelay,
          color: status?.actual ? 'gray' : 'white',
        }}
      >
        {value}
      </div>
      <div
        style={{
          width: 30,
          height: 30,
          animationDelay,
          msAlignSelf: 'auto',
          fontSize: 20,
          alignSelf: 'start',
        }}
      >
        {status?.actual ? status.actual : ''}
      </div>
    </div>
  )
}
