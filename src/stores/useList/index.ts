import { Book } from 'services/books/types';
import { Genre } from 'services/genres/types';
import create, { SetState } from 'zustand';

export type State = {
  list: Genre[] | Book[];
  setList: (list: Genre[] | Book[]) => void;
};

const useList = create<State>((set: SetState<State>) => {
  function setList(list: Genre[] | Book[]) {
    set((state) => ({
      ...state,
      list,
    }));
  }

  return {
    list: [],
    setList,
  };
});

export default useList;
