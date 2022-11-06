import React from 'react'
import CreateCampaign from "../components/CreateCampaign";

function CreateCampaignsPage() {
  return (
    <div className="flex justify-center gap-6 mt-8">
            <div className="flex flex-col justify-center">
              <CreateCampaign />
            </div>
          </div>
  )
}

export default CreateCampaignsPage