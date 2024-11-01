import React from "react";
import MainView from "./components/View/MainView";
import { SelectionProvider } from "./components/Context/SelectionContext";

const App: React.FC = () => {
  return (
    <>
      <SelectionProvider>
        <MainView />
      </SelectionProvider>
    </>
  );
};

export default App;
