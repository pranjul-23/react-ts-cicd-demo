import { useMemo, useState } from 'react';

interface VirtualizedListProps {
  items: string[];
  height?: number;
  itemHeight?: number;
  buffer?: number;
}

export default function VirtualizedList({
  items,
  height = 500,
  itemHeight = 50,
  buffer = 5,
}: VirtualizedListProps) {
  const [scrollTop, setScrollTop] = useState<number>(0);
  const visibleCount: number = Math.ceil(height / itemHeight);
  const totalHeight: number = items.length * itemHeight;
  const rowStartIndex: number = Math.floor(scrollTop / itemHeight);
  const startIndex: number = Math.max(0, rowStartIndex - buffer);
  const endIndex: number = Math.min(items.length, rowStartIndex + visibleCount + buffer);

  const visibleList: string[] = useMemo(() => {
    return items.slice(startIndex, endIndex);
  }, [items, startIndex, endIndex]);

  return (
    <div
      style={{ height, overflow: 'auto' }}
      onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}
    >
      <div style={{ position: 'relative', height: totalHeight }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            transform: `translateY(${startIndex * itemHeight}px)`,
          }}
        >
          {visibleList.map((item, index) => (
            <div key={startIndex + index} style={{ height: itemHeight }}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
