
import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { flowers } from "../data/flowers";
import type { SelectedFlower } from "../types/flower";

interface BouquetContextType {
  selectedFlowers: SelectedFlower[];
  totalItems: number;
  totalPrice: number;
  getQuantity: (flowerId: string) => number;
  addFlower: (flowerId: string) => void;
  removeFlower: (flowerId: string) => void;
}

const BouquetContext = createContext<BouquetContextType | undefined>(
  undefined
);

interface BouquetProviderProps {
  children: ReactNode;
}

export function BouquetProvider({ children }: BouquetProviderProps) {
  const [selectedFlowers, setSelectedFlowers] = useState<SelectedFlower[]>(
    []
  );

  const getQuantity = (flowerId: string) => {
    return (
      selectedFlowers.find((item) => item.flowerId === flowerId)?.quantity ?? 0
    );
  };

  const addFlower = (flowerId: string) => {
    setSelectedFlowers((current) => {
      const existing = current.find((item) => item.flowerId === flowerId);

      if (existing) {
        return current.map((item) =>
          item.flowerId === flowerId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...current, { flowerId, quantity: 1 }];
    });
  };

  const removeFlower = (flowerId: string) => {
    setSelectedFlowers((current) =>
      current
        .map((item) =>
          item.flowerId === flowerId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const totalItems = useMemo(
    () =>
      selectedFlowers.reduce((total, item) => total + item.quantity, 0),
    [selectedFlowers]
  );

  const totalPrice = useMemo(
    () =>
      selectedFlowers.reduce((total, item) => {
        const flower = flowers.find((flower) => flower.id === item.flowerId);
        return total + (flower ? flower.price * item.quantity : 0);
      }, 0),
    [selectedFlowers]
  );

  const value: BouquetContextType = {
    selectedFlowers,
    totalItems,
    totalPrice,
    getQuantity,
    addFlower,
    removeFlower,
  };

  return (
    <BouquetContext.Provider value={value}>
      {children}
    </BouquetContext.Provider>
  );
}

export function useBouquet() {
  const context = useContext(BouquetContext);

  if (!context) {
    throw new Error("useBouquet must be used inside a BouquetProvider");
  }

  return context;
}
