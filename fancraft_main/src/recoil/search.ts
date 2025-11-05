import { atom } from 'recoil';

export interface SearchState {
  query: string;
  category: 'all' | 'illust' | 'cartoon' | 'fiction';
  tags: string[];
  isSearching: boolean;
}

export const searchState = atom<SearchState>({
  key: 'searchState',
  default: {
    query: '',
    category: 'all',
    tags: [],
    isSearching: false
  }
}); 