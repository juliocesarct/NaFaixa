export interface Courtesy {
  id: BigInt, 
  name: string,
  desc: String,
  category: {
    id: BigInt,
    name: String
  },
  photo: string,
  link: string,
  createdAt: Date
}