import { solution, unicodeSplit } from './words'

export type CharStatus = 'absent' | 'present' | 'correct'

export type Status = {
  status: CharStatus
  actual: string
}

export const getStatuses = (
  guesses: string[]
): { [key: string]: CharStatus } => {
  const charObj: { [key: string]: CharStatus } = {}
  const splitSolution = unicodeSplit(solution)

  guesses.forEach((word) => {
    unicodeSplit(word).forEach((letter, i) => {
      if (!splitSolution.includes(letter)) {
        // make status absent
        return (charObj[letter] = 'absent')
      }

      if (letter === splitSolution[i]) {
        //make status correct
        return (charObj[letter] = 'correct')
      }

      if (charObj[letter] !== 'correct') {
        //make status present
        return (charObj[letter] = 'present')
      }
    })
  })

  return charObj
}

export const getGuessStatuses = (guess: string): Status[] => {
  const splitSolution = unicodeSplit(solution)
  const splitGuess = unicodeSplit(guess)

  const solutionCharsTaken = splitSolution.map((_) => false)

  const statuses: Status[] = Array.from(Array(guess.length))

  // handle all correct cases first
  splitGuess.forEach((letter, i) => {
    if (letter === splitSolution[i]) {
      statuses[i] = { status: 'correct', actual: '' }
      solutionCharsTaken[i] = true
      return
    } else if (letter.charCodeAt(0) === splitSolution[i].charCodeAt(0)) {
      statuses[i] = { status: 'correct', actual: splitSolution[i] }
      solutionCharsTaken[i] = true
    }
  })

  splitGuess.forEach((letter, i) => {
    if (statuses[i]?.status) return

    // Check if guess character exists in the solution at any position
    const index = splitSolution.findIndex(
      (x, index) => x === letter || x.charCodeAt(0) === letter.charCodeAt(0)
    )

    if (index === -1) {
      // handles the absent case
      statuses[i] = { status: 'absent', actual: '' }
      return
    }

    // now we are left with "present"s
    const indexOfPresentChar = splitSolution.findIndex(
      (x, index) =>
        (x === letter || x.charCodeAt(0) === letter.charCodeAt(0)) &&
        !solutionCharsTaken[index]
    )

    if (indexOfPresentChar > -1) {
      statuses[i] = {
        status: 'present',
        actual:
          splitSolution[indexOfPresentChar] === letter
            ? ''
            : splitSolution[indexOfPresentChar],
      }
      solutionCharsTaken[indexOfPresentChar] = true
      return
    } else {
      statuses[i] = { status: 'absent', actual: '' }
      return
    }
  })

  return statuses
}
