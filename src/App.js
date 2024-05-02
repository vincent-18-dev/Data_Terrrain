import "./App.css";
import { useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BarChart } from "@mui/x-charts/BarChart";
import Todolist from "../src/Images/index/to-do-list.png";
import GirlOne from "../src/Images/index/human-large.png";
import GirlTwo from "../src/Images/index/human-small.png";
function App() {
  let chartWidth;
  useEffect(() => {
    chartWidth = window.innerWidth > 1900 ? 1000 : 700;
  }, [window.innerWidth]);
  console.log(window.innerWidth);
  return (
    <>
      <Header />
      <div className="container">
        <div className="index-container">
          <div className="sidebar-componet">
            <Sidebar />
          </div>
          <div className="barchart-container">
            <div className="barchat-section">
              <h2>HR Employee</h2>
              <p>
                Enjoy your selecting potential candidates Tracking and
                Management System.
              </p>
              <div className="barchart-employe-detailes">
                <div className="barchat-heading-section">
                  <div className="barchat-heading-text">
                    <h5>Application’s Info</h5>
                    <div className="bar-data-section">
                      <div className="box-received-section">
                        <div className="box-received"></div>
                        <p>Received</p>
                      </div>
                      <div className="box-processed-section">
                        <div className="box-processed"></div>
                        <p>Processed</p>
                      </div>
                    </div>
                  </div>
                  <div className="select-month-section">
                    <select>
                      <option>Month</option>
                      <option>Day</option>
                    </select>
                  </div>
                </div>
                <BarChart
                  series={[
                    { data: [3, 4, 1, 6, 5] },
                    { data: [4, 3, 1, 5, 8] },
                  ]}
                  width={chartWidth}
                  height={350}
                />
              </div>
            </div>
            <div className="Assessment-section">
              <div className="btn-section">
                <button className="Task-btn">Task Details</button>
              </div>
              <div className="Assessment-section-box">
                <div className="Assessment-content-section">
                  <div className="white-box">
                    <img src={Todolist} width={58} height={79} alt="" />
                  </div>
                  <h3>0033</h3>
                  <p>New Assessment's</p>
                </div>
                <div className="Assessment-icon-section">
                  <img
                    className="women-pic-small"
                    src={GirlTwo}
                    width={132}
                    height={165}
                    alt="human"
                  />
                  <img
                    className="women-pic-large"
                    src={GirlOne}
                    width={277}
                    height={346}
                    alt="human"
                  />
                  <div className="view-details-btn">
                    <button>VIEW DETAILS</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
