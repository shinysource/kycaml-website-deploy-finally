import axios from 'axios'
import { User, AuthState, AuthResult, AccessToken } from '../types/types'

const instance = axios.create({
  baseURL: 'https://finallykycaml-backend.herokuapp.com/api/',
  timeout: 30000,
})

const apiService = {
  apply: (externalUserId: User) => instance.post('auth/apply', externalUserId),
  getStatus: () => instance.get('auth/getStatus'),
  createToken: (externalUserId: User) =>
    instance.post<AccessToken>('auth/createtoken', externalUserId),
}

export default apiService
