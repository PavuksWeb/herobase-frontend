import { createContext } from 'react';
import type { PaginationContextType } from '../types/paginationContextType.t';

export const PaginationContext = createContext<
  PaginationContextType | undefined
>(undefined);
