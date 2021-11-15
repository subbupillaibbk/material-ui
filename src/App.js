import logo from "./logo.svg";
import "./App.css";

import Layout from "./Layout/Layout1";
import Table from "./components/CustomizedTable";
import MyCard from "./components/MyCard";
import MyForm from "./components/myform/MyDynamicForm";
import CheckBoxForm from "./components/checkBoxForm/CheckBoxForm";

function App() {
  const arr = [...Array(30).keys()];

  return (
    <div className="App">
      <Layout>
        {/* <Table />

        <div className="flex-container">
          {arr.map(n => <MyCard />)}

        </div> */}
        {/* <MyForm /> */}
        <CheckBoxForm />
      </Layout>
    </div>
  );
}

export default App;
