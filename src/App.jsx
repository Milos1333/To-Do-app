import "./App.css";
import Navigation from "./features/Navigation/Navigation";
import Home from "./features/HomePage/Home";
import CreateTask from "./features/CreateTask/CreateTask";
import ListOfTasks from "./features/ListOfTasks/ListOfTasks";
import About from "./features/About/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notification from "./components/Notification/Notification";
import useNotificationStore from "./stores/notification/notification.store";

const App = () => {
  const isOpen = useNotificationStore();
  return (
    <>
      <BrowserRouter>
        {isOpen && <Notification />}
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="createtask" element={<CreateTask />} />
          <Route path="listoftasks" element={<ListOfTasks />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
