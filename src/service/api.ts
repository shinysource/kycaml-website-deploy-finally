import axios from 'axios'
import { User, AccessToken } from '../types/types'

const instance = axios.create({
  baseURL: 'https://finallykycaml-server.herokuapp.com/api/',
  timeout: 30000,
})

const apiService = {
  apply: (externalUserId: User) => instance.post('auth/apply', externalUserId),
  getStatus: (externalUserId: User) =>
    instance.post('auth/getStatus', externalUserId),
  getApplicantId: (externalUserId: User) =>
    instance.post('auth/getapplicantid', externalUserId),
  createToken: (externalUserId: User) =>
    instance.post<AccessToken>('auth/createtoken', externalUserId),
}

export default apiService
