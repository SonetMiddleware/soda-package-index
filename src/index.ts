import { PlatwinAssetInit } from '@soda/soda-asset'
import imageKitInit from '@soda/soda-image-kit'

import ipfsKitInit from '@soda/soda-ipfs-kit'

import nashmarketInit from '@soda/soda-nashmarket'
import openseaInit from '@soda/soda-opensea'
export type AppConfig = {
  assetService: string[]
  storageService: string[]
  mpService: string[]
  mediaType: string[]
}

const APP_CONFIG: Record<number, AppConfig> = {
  4: {
    assetService: ['opensea'],
    storageService: ['ipfs'],
    mpService: ['opensea'],
    mediaType: ['image']
  },
  80001: {
    assetService: ['platwin'],
    storageService: ['ipfs'],
    mpService: ['nashmarket'],
    mediaType: ['image']
  }
}

const getAppConfig = (chainId: number): AppConfig => {
  if (!APP_CONFIG[chainId]) {
    throw new Error('ChainId ' + chainId + ' not supported')
  }
  return APP_CONFIG[chainId]
}
const init = () => {
  PlatwinAssetInit()

  imageKitInit()
  ipfsKitInit()
  nashmarketInit()
  openseaInit()
}

export default init
export { getAppConfig }
