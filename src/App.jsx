
import{Routes, Route} from "react-router";
import HomePage from  "./components/Homepage";
import BlogList from  "./components/Bloglist";
import About from  "./components/About";
import NotFound from  "./components/NotFound";
// import Child from "./components/Child";

const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route  path="/BlogList" element={<BlogList/>}/>
             {/* <Route path="/child" element={<Child/>}/>
             </Route> */}
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>

    </div>
  );
};

export default App;
