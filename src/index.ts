import { ImageInit } from '@soda/soda-media-sdk'
import { IpfsInit } from '@soda/soda-storage-sdk'

import { ChainInit, PlatwinAssetInit } from '@soda/soda-asset'

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
    assetService: ['platwin'],
    storageService: ['ipfs'],
    mpService: ['opensea'],
    mediaType: ['image']
  },
  80001: {
    assetService: ['platwin'],
    storageService: ['ipfs'],
    mpService: ['nash'],
    mediaType: ['image']
  },
  1: {
    assetService: ['platwin'],
    storageService: ['ipfs'],
    mpService: ['opensea'],
    mediaType: ['image']
  },
  137: {
    assetService: ['platwin'],
    storageService: ['ipfs'],
    mpService: ['opensea'],
    mediaType: ['image']
  }
}

export const getAppConfig = (chainId: number): AppConfig => {
  if (!APP_CONFIG[chainId]) {
    throw new Error('ChainId ' + chainId + ' not supported')
  }
  return APP_CONFIG[chainId]
}
const init = () => {
  ImageInit()
  IpfsInit()

  ChainInit()
  PlatwinAssetInit()

  nashmarketInit()
  openseaInit()
}

export default init

import { bgInit as utilBgInit } from '@soda/soda-util'
import { bgInit as platwinBgInit } from '@soda/soda-asset'

export const bgInit = () => {
  utilBgInit()
  platwinBgInit()
}
