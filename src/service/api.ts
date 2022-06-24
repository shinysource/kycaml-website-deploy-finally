import axios from 'axios'
import { User, AccessToken } from '../types/types'

const instance = axios.create({
  baseURL: 'https://finallykycaml-server.herokuapp.com/api/',
  timeout: 30000,
})

const apiService = {
  apply: (externalUserId: User) => instance.post('auth/apply', externalUserId),
  getStatus: () => instance.get('auth/getStatus'),
  createToken: (externalUserId: User) =>
    instance.post<AccessToken>('auth/createtoken', externalUserId),
}

export default apiService
