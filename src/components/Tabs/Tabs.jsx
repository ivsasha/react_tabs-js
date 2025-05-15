export const Tabs = ({ tabs, activeTab }) => {
  return (
    <div className="block" data-cy="TabContent">
      {tabs.map(tab => (
        <div key={tab.id} data-cy="TabContent">
          {activeTab === tab.id && (
            <div className="content" data-cy="TabContent">
              {tab.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
