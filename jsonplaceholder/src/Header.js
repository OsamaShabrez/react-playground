const Header = ({ tabItems, setActiveTab }) => {
  return (
    <header>
      <nav>
        <ul>
          {tabItems.items.map((tabItem) => (
            <li
              key={tabItem.id}
              className={tabItem.name === tabItems.activeTab ? "active" : ""}
              onClick={() => setActiveTab(tabItem.name)}
            >
              {tabItem.name}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
