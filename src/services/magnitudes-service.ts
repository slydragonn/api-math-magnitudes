import Temperature from '../types/temperature'
import magtData from './magnitudes.json'

const data = magtData as Temperature[]

export function getMagnitudes (): Temperature[] {
  return data
}
