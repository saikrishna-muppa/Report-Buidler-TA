import { DndProvider,DndContext } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Home from "./components/home/Home";
import MakingPdf from "./components/pdf/MakingPdf";
// import { DragDropContext as dragDropContext } from "react-dnd";
function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
    <Home/>
      </div>
    </DndProvider>
  );
}

export default App;
