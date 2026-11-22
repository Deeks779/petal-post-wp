
export interface Flower {
  id: string;
  name: string;
  scientificName?: string;
  color: string;
  meaning: string;
  description: string;
  price: number;
  image: string;
  category: FlowerCategory;
}

export type FlowerCategory =
  | "romantic"
  | "cheerful"
  | "elegant"
  | "classic";

export interface SelectedFlower {
  flowerId: string;
  quantity: number;
}
