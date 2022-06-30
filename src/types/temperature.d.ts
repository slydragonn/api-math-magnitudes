import { Formulas } from './types'

interface Celsius {
  celsius: Object<Formulas>
}

interface Farenheit {
  farenheit: Object<Formulas>
}

export default interface Temperature {
  temperature: Array<Celsius & Farenheit>
}
