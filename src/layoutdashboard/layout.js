import React from "react";
import { Layout, Menu } from "antd";
import { useNavigate } from 'react-router-dom';
import Booksold from "../component/booksold";
import '../index.css'
import Inventory from "../component/inventory";
import IndiaMapChart from "../component/Indiamapchart";
import Selltitles from "../component/selltitles";
import Titlesold from "../component/titlesold";
import Summary from "../component/summary";
import Sellauthors from "../component/sellauthors";

const { Header, Content } = Layout;

const Layoutdashboard = () => {
  const navigate = useNavigate();

  const items = new Array(4).fill(null).map((_, index) => ({
    key: index + 1,
    label: `Data ${index + 1}`,
  }));

  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center", background:"#fff", }}>
        <div>
            <img src= "/kenning-logo.webp" width={180} alt="Kenning Logo" />
        </div>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{ flex: 1, minWidth: 0, justifyContent:"end", }}
        />
        <button onClick={() => navigate('/uploaddata')} className="ant-btn ml-3">Upload Data File</button>
      </Header>
      <Content style={{ padding: "40px 48px 100px" }}>
        <div className="layoutrow">
          <div className="layoutsection"><h3 className="text-lg mb-4">Summary</h3>
          <Summary />
          </div>
          <div className="layoutsection"><h3 className="text-lg mb-4">Top Selling Titles</h3>
          <Selltitles />
          </div>
          <div className="layoutsection"><h3 className="text-lg mb-4">Top Selling Author</h3>
          <Sellauthors />
          </div>
        </div>
        <div class="flex gap-6">
          <div className="w-3/4">
            <div className="flex flex-col layoutrow gap-6">
              <div className="flex flex-row gap-6">
                <div className="flex w-1/2">
                  <div className="layoutsection"><h3 className="text-lg mb-4">Book Sold</h3>
                  <Booksold />
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="layoutsection"><h3 className="text-lg mb-4">Title Sold</h3>
                  <Titlesold />
                  </div>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="layoutsection"><h3 className="text-lg mb-4">Inventory</h3>
                <Inventory />
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/4">
            <div className="layoutrow">
              <div className="geolayoutsection"><h3 className="text-xl mb-4">Geographics</h3>
              <IndiaMapChart />
              </div>
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default Layoutdashboard;
