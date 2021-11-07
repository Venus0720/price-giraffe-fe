import { useState } from 'react';
import { classNames } from 'helpers';

export default function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div>
      <div className="bg-white">
        <div className="container">
          <div className="flex">
            {tabs.map((tab, idx) => (
              <div
                key={idx}
                className={classNames(
                  'border-b-2 px-6 py-4 font-normal text-sm cursor-pointer select-none',
                  tab === activeTab
                    ? 'border-primary text-primary'
                    : 'border-transparent'
                )}
                onClick={() => setActiveTab(tab)}
              >
                {tab.name}
              </div>
            ))}
          </div>
        </div>
      </div>
      {activeTab.content}
    </div>
  );
}
