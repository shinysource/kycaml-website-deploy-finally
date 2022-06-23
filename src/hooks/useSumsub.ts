import { useEffect, useState } from 'react'
import { User, AuthState, AuthResult, AccessToken } from '../types/types'
import api from '../service/api'

const useSumsub = (props: User) => {
  const [accessSDKToken, setAccessSDKToken] = useState<string>('')

  useEffect(() => {
    const createAccessToken = async () => {
      const token = await api.createToken({
        externalUserId: props.externalUserId,
      })
      setAccessSDKToken(token.data.token)
      console.log('AccessToken from backend: ' + token.data.token)
    }
    createAccessToken()
  }, [])

  return { accessSDKToken }
}

export default useSumsub
