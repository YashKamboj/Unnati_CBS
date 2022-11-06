import CampaignsPage from "./pages/CampaignsPage";
import CreateCampaignsPage from "./pages/CreateCampaindPage";
import Home from "./pages/Home";
import SingleCampaignPage from "./pages/SingleCampaignPage";
import TransactionPage from "./pages/TransactionPage"
import Layout from "./components/layout";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const params = new URLSearchParams(window.location.search)
  const xyzaq = params.get('id')
  
  
  return (
    <Layout>
      <div className="flex flex-col items mt-18 p-18">
        
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Campaigns" element={<CampaignsPage />} />
            <Route path="/Campaigns/new" element={<CreateCampaignsPage />} />
            <Route path="/Transactions" element={<TransactionPage />} />
            <Route path= "/Campaign" element={
            <SingleCampaignPage projectNumber = {Number(xyzaq)}/>
             } />
          </Routes>
        </BrowserRouter>
      </div>
    </Layout>
  );
}

export default App;
