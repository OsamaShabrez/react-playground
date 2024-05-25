import { useEffect, useState } from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

const App = () => {
  const JPH_API = "https://jsonplaceholder.typicode.com";
  const [tabItems, setTabItems] = useState({
    items: [
      {
        id: 1,
        name: "Users",
      },
      {
        id: 2,
        name: "Posts",
      },
      {
        id: 3,
        name: "Comments",
      },
    ],
    activeTab: "Users",
  });
  const [data, setData] = useState([]);

  const setActiveTab = (Name) => {
    setTabItems({ ...tabItems, activeTab: Name });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(JPH_API + `/${tabItems.activeTab}`);
        if (!response.ok) throw Error("Unable to fetch data");
        const data = await response.json();
        setData(data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, [tabItems]);

  return (
    <>
      <Header tabItems={tabItems} setActiveTab={setActiveTab} />
      <Content data={data} />
      <Footer />
    </>
  );
};

export default App;
