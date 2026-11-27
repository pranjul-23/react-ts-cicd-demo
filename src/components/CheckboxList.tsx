import { useMemo, type ChangeEvent, type ReactNode } from 'react';

export interface Item {
  id: string;
  title: string;
}

interface CheckboxListProps<T> {
  items: T[];
  selectedItems: T[];
  onSelectItem: (item: T) => void;
  onSelectAll: (checked: boolean) => void;
  renderItem: (item: T) => ReactNode;
  getItemKey: (item: T) => string;
}

export default function CheckboxList<T>({
  items,
  selectedItems,
  onSelectItem,
  onSelectAll,
  renderItem,
  getItemKey,
}: CheckboxListProps<T>) {
  const isAllSelected = items.length > 0 && items.length === selectedItems.length;

  const selectedItemKeys = useMemo(() => {
    return new Set(selectedItems.map(getItemKey));
  }, [selectedItems, getItemKey]);
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <input
          type="checkbox"
          checked={isAllSelected}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onSelectAll(e.target.checked)}
        />
        <span>Select All</span>
      </div>
      {items.map((item) => (
        <div
          key={getItemKey(item)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginLeft: '10px',
          }}
        >
          <input
            type="checkbox"
            checked={selectedItemKeys.has(getItemKey(item))}
            onChange={() => onSelectItem(item)}
          />
          <span>{renderItem(item)}</span>
        </div>
      ))}
    </div>
  );
}
