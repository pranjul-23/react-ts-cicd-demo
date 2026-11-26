import { useState, useRef, useCallback } from 'react';
import { useClickOutside } from '../hooks/useClickOutside';

interface AutoCompleteProps<T> {
  value: T | null;
  options: T[];
  onSelect: (value: T | null) => void;
  onSearchChange: (searchKey: string) => void;
  getOptionLabel: (value: T) => string;
  getOptionKey: (value: T) => string | number;
  placeholder?: string;
  disabled?: boolean;
}

export default function AutoComplete<T>({
  value,
  options,
  onSelect,
  onSearchChange,
  getOptionLabel,
  getOptionKey,
  placeholder = 'Search',
}: AutoCompleteProps<T>) {
  const [searchKey, setSearchKey] = useState<string>(value ? getOptionLabel(value) : '');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const closeDropdown = useCallback(() => {
    setIsOpen(false);
  }, []);

  useClickOutside(dropdownRef, closeDropdown);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKey(e.target.value);
    onSearchChange(e.target.value);
    if (!isOpen) setIsOpen(true);
  };

  const handleFocus = () => {
    setIsOpen(true);
  };

  const handleSelect = (post: T) => {
    onSelect(post);
    setSearchKey(getOptionLabel(post));
    setIsOpen(false);
  };

  const handleClear = () => {
    setSearchKey('');
    onSearchChange('');
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef}>
      <input
        type="text"
        placeholder={placeholder}
        value={searchKey}
        onChange={handleChange}
        onFocus={handleFocus}
      />
      <button onClick={handleClear}>Clear</button>

      {isOpen && (
        <ul>
          {options?.map((post) => (
            <li key={getOptionKey(post)} onClick={() => handleSelect(post)}>
              {getOptionLabel(post)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
