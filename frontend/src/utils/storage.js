import { useState } from 'react'


class Storage {

  static get(key) {
    return JSON.parse(localStorage.getItem(key)) || {}
  }

  static set(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  static remove(key) {
    localStorage.removeItem(key)
  }
}

const useStorage = (key) => {
  const [state, setState] = useState(Storage.get(key))

  const setter = (value) => {
    return Storage.set(key, value)
  }

  const deleter = () => {
    Storage.remove(key)
    setter(Storage.get(key))
  }

  return [state, setter, deleter]
}

export default useStorage