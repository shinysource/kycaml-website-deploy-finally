import { useState } from 'react'

export interface User {
  id: number
  firstname: string
  lastname: string
  email: string
  password: string
}

const useCurrentUser = () => {
  const [user, setUser] = useState<User | undefined>()
  const [isLogged, setIsLogged] = useState<boolean>(false)

  const logIn = () => {
    setIsLogged(!isLogged)
  }

  return {
    user,
    isLogged,
    logIn,
  }
}

export default useCurrentUser
