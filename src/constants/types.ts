export type playerListInfoTypes = {
  acwr: number
  user: {
    id: number
    pictureUrl?: string | null
    name: string
    position: string
  }
}

export type pageInfoTypes = {
  limit: number
  hasNext: boolean
  hasPrev: boolean
  pageNum: number
  acwr: number
}

export type filterTypes = {
  [key: string]: any
  acwr: number
  limit: number
}
