import { IpfsInit } from '@soda/soda-storage-sdk'

import { ImageInit } from '@soda/soda-media-sdk'
import { M3DInit } from '@soda/m4m-3d-gltf'

import { ChainInit, PlatwinAssetInit } from '@soda/soda-asset'

import nashmarketInit from '@soda/soda-nashmarket'
import openseaInit from '@soda/soda-opensea'
import ongaiaInit from '@soda/soda-ongaia'

export type AppConfig = {
  assetService: string[]
  storageService: string[]
  mpService: string[]
  mediaType: string[]
}

const APP_CONFIG: Record<number | string, AppConfig> = {
  4: {
    assetService: ['platwin'],
    storageService: ['ipfs'],
    mpService: ['opensea'],
    mediaType: ['image', 'm3d']
  },
  80001: {
    assetService: ['platwin'],
    storageService: ['ipfs'],
    mpService: ['nash'],
    mediaType: ['image', 'm3d']
  },
  1: {
    assetService: ['platwin'],
    storageService: ['ipfs'],
    mpService: ['opensea'],
    mediaType: ['image', 'm3d']
  },
  137: {
    assetService: ['platwin'],
    storageService: ['ipfs'],
    mpService: ['opensea'],
    mediaType: ['image', 'm3d']
  },
  flowmain: {
    assetService: ['platwin'],
    storageService: ['ipfs'],
    mpService: ['ongaia'],
    mediaType: ['image', 'm3d']
  },
  flowtest: {
    assetService: ['platwin'],
    storageService: ['ipfs'],
    mpService: ['ongaia'],
    mediaType: ['image', 'm3d']
  }
}

export const getAppConfig = (chainId: number): AppConfig => {
  if (!APP_CONFIG[chainId]) {
    throw new Error('ChainId ' + chainId + ' not supported')
  }
  return APP_CONFIG[chainId]
}
const init = () => {
  IpfsInit()

  ImageInit()
  M3DInit()

  ChainInit()
  PlatwinAssetInit()

  nashmarketInit()
  openseaInit()
  ongaiaInit()
}

export default init

import { bgInit as utilBgInit } from '@soda/soda-util'
import { bgInit as platwinBgInit } from '@soda/soda-asset'

export const bgInit = () => {
  utilBgInit()
  platwinBgInit()
}
