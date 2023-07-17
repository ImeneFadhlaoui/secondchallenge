import "./App.css";
import Header from "./Header";
import Post from "./Post";
import SideMenu from "./SideMenu";
function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* POST & SIDE MENU CONTAINER */}
        <div style={{ display: "flex" }}>
          {/* POSTS CONNTAINER */}
          <div style={{ width: "70%" }}>
            <Post postName="PinguCoder" postBody="platform e-learning" />
            <Post postName="Learn React" postBody="With PinguCoder" />
            <Post postName="Learn Angular" postBody="With PinguCoder" />
            <Post postName="Learn VueJs" postBody="With PinguCoder" />
            <Post postName="Learn ExpressJs" postBody="With PinguCoder" />
            <Post postName="Learn Javascript" postBody="With PinguCoder" />
          </div>
          {/* == POSTS CONNTAINER ==*/}
          {/* SIDE MENU CONTAINER */}
          <div style={{ width: "30%" }}>
            <SideMenu />
          </div>
          {/* == SIDE MENU CONTAINER ==*/}
        </div>

        {/* == POST & SIDE MENU CONTAINER == */}
      </div>
    </div>
  );
}

export default App;
