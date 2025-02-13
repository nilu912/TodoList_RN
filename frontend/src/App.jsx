import { useEffect, useState } from "react";
import Header from "./Components/Header";
import AddTask from "./Components/AddTask";
import Tasks from "./Components/AllTasksData/Tasks";

function App() {
  const [dataList, setDataList] = useState([]);
  const getData = async () => {
    let endpoint = "http://localhost:5000/api/getTasks";
    const request = await fetch(endpoint);
    const response = await request.json();
    setDataList(response);
    console.log(response);
  };
  useEffect(()=>{
    getData();
  },[]);
  return (
    <>
      <div className="w-full h-full bg-[#30362F] border-1">
        <Header />
        <AddTask />
        <Tasks dataList={dataList}/>
      </div>
    </>
  );
}

export default App;
