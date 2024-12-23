import React, { createContext, useContext, useReducer } from 'react';
import { CartState, CartItem } from '../types/cart';
import { Product } from '../types';
import { products } from '../data/products';

type CartAction =
  | { type: 'ADD_ITEM'; payload: string }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: string; quantity: number } }
  | { type: 'CLEAR_CART' };

interface CartContextType {
  state: CartState;
  addItem: (productId: string) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

const initialState: CartState = {
  items: [],
  total: 0,
};

const calculateTotal = (items: CartItem[]): number => {
  return items.reduce((total, item) => {
    const product = products.find(p => p.id === item.productId);
    return total + (product?.price ?? 0) * item.quantity;
  }, 0);
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.productId === action.payload);
      const items = existingItem
        ? state.items.map(item =>
            item.productId === action.payload
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...state.items, { productId: action.payload, quantity: 1 }];
      return { items, total: calculateTotal(items) };
    }
    case 'REMOVE_ITEM': {
      const items = state.items.filter(item => item.productId !== action.payload);
      return { items, total: calculateTotal(items) };
    }
    case 'UPDATE_QUANTITY': {
      const items = state.items.map(item =>
        item.productId === action.payload.productId
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      return { items, total: calculateTotal(items) };
    }
    case 'CLEAR_CART':
      return initialState;
    default:
      return state;
  }
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (productId: string) => {
    dispatch({ type: 'ADD_ITEM', payload: productId });
  };

  const removeItem = (productId: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: productId });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider
      value={{ state, addItem, removeItem, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}