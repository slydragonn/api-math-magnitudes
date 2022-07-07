import { Magnitudes } from '../types/types'
import magtData from './magnitudes.json'

const data = magtData as Magnitudes

export function getMagnitudes (): Magnitudes {
  return data
}
