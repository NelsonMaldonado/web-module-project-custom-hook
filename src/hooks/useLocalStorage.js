import { useState } from "react"

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredvalue] = useState(() => {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key))
    } else {
      localStorage.setItem(key, initialValue)
      return initialValue
    }
  })
  const setValue = (value) => {
    window.localStorage.setItem(key, value)
    setStoredvalue(value)
  }

  return [storedValue, setValue]
}
