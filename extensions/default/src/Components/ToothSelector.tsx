import React, { useEffect, useRef, useState } from 'react';

const fdiTeeth = [
  18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27, 28, 38, 37, 36, 35, 34, 33, 32, 31,
  41, 42, 43, 44, 45, 46, 47, 48,
];

const universalTeeth = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
  28, 29, 30, 31, 32,
];
const ToothSelector = () => {
  const [open, setOpen] = useState(false);
  const [system, setSystem] = useState('FDI');
  const [selected, setSelected] = useState<number[]>([]);
  const ref = useRef<HTMLDivElement>(null);

  const teeth = system === 'FDI' ? fdiTeeth : universalTeeth;

  const toggleTooth = (tooth: number) => {
    setSelected(prev => (prev.includes(tooth) ? prev.filter(t => t !== tooth) : [...prev, tooth]));
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div
      className="relative"
      ref={ref}
    >
      <button
        onClick={() => setOpen(!open)}
        className="rounded-md bg-gray-800 px-3 py-1 text-sm text-white hover:bg-gray-700"
      >
        Tooth Selector
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-[360px] rounded-xl border border-gray-700 bg-gray-900 p-4 shadow-xl">
          <div className="mb-3 flex items-center justify-between">
            <span className="font-semibold text-white">Tooth Selector</span>

            <select
              value={system}
              onChange={e => setSystem(e.target.value)}
              className="rounded border border-gray-600 bg-gray-800 px-2 py-1 text-sm"
            >
              <option value="FDI">FDI</option>
              <option value="Universal">Universal</option>
            </select>
          </div>

          <div className="grid grid-cols-8 gap-2">
            {teeth.map(tooth => {
              const active = selected.includes(tooth);

              return (
                <button
                  key={tooth}
                  onClick={() => toggleTooth(tooth)}
                  className={`flex h-9 w-9 items-center justify-center rounded-md border text-xs font-semibold transition ${
                    active
                      ? 'border-blue-400 bg-blue-500'
                      : 'border-gray-600 bg-gray-800 hover:bg-gray-700'
                  } `}
                >
                  {tooth}
                </button>
              );
            })}
          </div>

          {/* Selected */}
          <div className="mt-3 text-xs text-gray-300">
            Selected: {selected.length ? selected.join(', ') : 'None'}
          </div>
        </div>
      )}
    </div>
  );
};

export default ToothSelector;
