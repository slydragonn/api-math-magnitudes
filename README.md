# API Mathematical Magnitudes

Convert **measures** of all kinds:

* Temperature
* Volume
* Time
* Weight
* Surface
* Length
* Liquids

## End Points

* */* => Home Page.

---

* */docs* => Documentation.

---

* */api/magnitudes/* => Returns an array of objects with all magnitude classes.

---

* */api/magnitudes/[magnitude-class]* => Returns an array with all the magnitudes of that class.

---

* */api/magnitudes/[class]/[magnitude]* => Returns an object with the magnitudes to which it can be converted and their respective values.

---

* */api/magnitudes/[class]/[magnitude-to-magnitude]* => Returns an object with the value of the converted magnitude and the magnitude passed as a parameter.

  * Ejm: */api/magnitudes/volumen/cubic-meters-to-cubic-inchs*

  ```json
  {
    "cubic-inchs": 732285,
    "cubic-meters": 12
  }
  ```
