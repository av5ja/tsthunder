import CryptoJS from 'crypto-js'

export enum AlgorithmType {
  MD5 = 'MD5',
  SHA1 = 'SHA1',
  SHA256 = 'SHA256'
}

export const createHash = (alg: AlgorithmType, data: string): string => {
  switch (alg) {
    case AlgorithmType.MD5:
      return CryptoJS.MD5(data).toString(CryptoJS.enc.Hex)
    case AlgorithmType.SHA1:
      return CryptoJS.SHA1(data).toString(CryptoJS.enc.Hex)
    case AlgorithmType.SHA256:
      return CryptoJS.SHA256(data).toString(CryptoJS.enc.Hex)
  }
}
