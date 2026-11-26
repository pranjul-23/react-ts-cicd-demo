// import EditProfile from "./EditProfile";
// import { useState, useMemo } from 'react';
// import { useFetch } from "../hooks/useFetch";
// import { useDebounce } from "../hooks/useDebounce";
// import type { Post } from "../hooks/useFetch";
// import AutoComplete from "./AutoComplete";
// import { getOptionLabel, getOptionKey } from "../utils/helper";
// import FlatFormGridLayout from "./FlatFormGridLayout";
// import FlexFluid from "./FlexFluid";
// import TicTacToe from "./TicTacToe/TicTacToe";
// import VirtualizedList from "./VirtualizedList";
// import CheckboxList from './CheckboxList';
// import type { Item } from './CheckboxList';
import { BookList } from './BookStore';

// const items = Array.from({ length: 100 }, (_, index) => `Item ${index + 1}`);

// const items: Item[] = [
//   {
//     id: '1',
//     title: 'Item 1',
//   },
//   {
//     id: '2',
//     title: 'Item 2',
//   },
//   {
//     id: '3',
//     title: 'Item 3',
//   },
//   {
//     id: '4',
//     title: 'Item 4',
//   },
//   {
//     id: '5',
//     title: 'Item 5',
//   },
// ];

// const getItemKey = (item: Item) => {
//   return item.id;
// };
// const renderItem = (item: Item) => {
//   return <div>{item.title}</div>;
// };

function Test() {
  // const [inputSearch, setInputSearch] = useState<string>("");
  // const [selectedOption, setSelectedOption] = useState<Post | null>(null);
  // const { data, loading, error } = useFetch<Post[]>(
  //   "https://jsonplaceholder.typicode.com/posts",
  // );

  // const [selectedItems, setSelectedItems] = useState<Item[]>([]);

  // const debouncedQuery = useDebounce(inputSearch, 500);
  // const posts = useMemo(() => data ?? [], [data]);

  // const handleSearch = (value: string) => {
  //   setInputSearch(value);
  // };

  // const handleSelect = (option: Post | null) => {
  //   setSelectedOption(option);
  // };

  // const filteredPosts = useMemo(() => {
  //   if (!debouncedQuery.trim()) return posts;
  //   return posts.filter((post) =>
  //     post.title?.toLowerCase().includes(debouncedQuery.toLowerCase()?.trim()),
  //   );
  // }, [debouncedQuery, posts]);

  // const handleSelectAll = (checked: boolean) => {
  //   setSelectedItems(checked ? items : []);
  // };
  // const handleSelectItem = (item: Item) => {
  //   setSelectedItems((prev) => {
  //     let exist = prev.some((selected) => selected.id === item.id);
  //     if (exist) {
  //       return prev.filter((selected) => selected.id !== item.id);
  //     }
  //     return [...prev, item];
  //   });
  // };

  return (
    <>
      {/* <EditProfile /> */}
      {/* {loading && <div>Loading...</div>}
      {error && <div>{error?.message}</div>}
      <div>{error?.message}</div>;
      <AutoComplete
        value={selectedOption}
        options={filteredPosts}
        onSelect={handleSelect}
        onSearchChange={handleSearch}
        getOptionLabel={getOptionLabel}
        getOptionKey={getOptionKey}
      /> */}
      {/* <FlatFormGridLayout />
      <div className="mt-10">
        <FlexFluid />
      </div> */}
      {/* <TicTacToe /> */}

      {/* <VirtualizedList items={items} /> */}

      {/* <CheckboxList
        items={items}
        selectedItems={selectedItems}
        onSelectAll={handleSelectAll}
        onSelectItem={handleSelectItem}
        renderItem={renderItem}
        getItemKey={getItemKey}
      /> */}

      <BookList />
    </>
  );
}

export default Test;
