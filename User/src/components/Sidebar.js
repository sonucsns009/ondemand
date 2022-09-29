import { useEffect, useState } from "react";
import server from "../Server";

const Sidebar = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const d1 = await fetch(`${server}api/v1/mainCategory/all/Category`);
    const res = await d1.json();
    setData(res);
  };

  return (
    <div className="col-sm-2 shadow-lg scrollDiv ">
      <div className="Slider  slid-cl">
        <div class="sidebar">
          <br />
          <br />
          <ul>
            {data.map((val) => {
              return (
                <li>
                  <a href="#services">{val.category_name}</a>
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
