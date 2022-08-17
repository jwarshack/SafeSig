export interface Transaction {
  id: string
  to: string
  data: string
  status: string
}

export interface Wallet {
  id: string
  transactions: Transaction[]
  __
}