import { useEffect, useState } from "react";
import server from "../Const";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const d1 = await fetch(`${server}/api/v1/mainCategory/all/Category`);
    const res = await d1.json();
    setData(res);
  };

  return (
    <div className="col-sm-2 shadow-lg scrollDiv ">
      <div className="Slider  slid-cl">
        <br></br>
        <br></br>
        <br></br>
        <div className="sidebar">
          <h3>Services</h3>
          <ul>
            {data.map((val) => {
              return (
                <li>
                  <Link to={`/mainsubservices/${val.category_id}`}>
                    {val.category_name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
