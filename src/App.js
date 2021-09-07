import { useState } from "react";
import Color from "./components/Color";
import Header from "./components/Header";

const component_list = [
  { title: "Colors", key: "color", Component: Color },
  { title: "Size", key: "size" },
  { title: "Chat Notification", key: "chat" },
];

const App = () => {
  const [activeComponent, setActiveComponent] = useState(component_list[0]);
  const hanldeKeyChange = (key) => {
    const selectedComponent = component_list.find((comp) => comp.key === key);
    setActiveComponent(selectedComponent);
  };

  const { key, Component } = activeComponent;
  return (
    <div className="container mx-auto bg-gray-50 min-h-screen h-full">
      <Header
        menuList={component_list.map((comp) => ({
          title: comp.title,
          key: comp.key,
        }))}
        activeKey={key}
        changeKey={(key) => hanldeKeyChange(key)}
      />
      {Component ? <Component /> : null}
      {key === "chat" && (
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
          <div className="flex-shrink-0">
            <img
              className="h-12 w-12"
              src="assets/img/chat.svg"
              alt="ChitChat Logo"
            />
          </div>
          <div>
            <div className="text-xl font-medium text-black">ChitChat</div>
            <p className="text-gray-500">You have a new message!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
