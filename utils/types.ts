export type ProjectItem = {
  slug: string
  nym: string
  content?: string
  title: string
  summary: string
  coverImage: string
  git: string
  twitter?: string
  website: string
  personalTwitter?: string
  personalWebsite: string
  goal: number
  isFunded?: boolean
  numdonationsxmr?: number
  totaldonationsinfiatxmr?: number
  totaldonationsxmr?: number
  numdonationsbtc?: number
  totaldonationsinfiatbtc?: number
  totaldonationsbtc?: number
  fiatnumdonations?: number
  fiattotaldonationsinfiat?: number
  fiattotaldonations?: number
}

export type PayReq = {
  amount: number
  project_slug: string
  project_name: string
  email?: string
  name?: string
}

export type Stats = any
