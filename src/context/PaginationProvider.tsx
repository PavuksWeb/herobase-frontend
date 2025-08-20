import { useState, type ReactNode } from 'react';
import { PaginationContext } from './PaginationContext';

interface ProviderProps {
  children: ReactNode;
}

export function PaginationProvider({ children }: ProviderProps) {
  const [curPage, setCurPage] = useState(1);

  return (
    <PaginationContext.Provider value={{ curPage, setCurPage }}>
      {children}
    </PaginationContext.Provider>
  );
}
