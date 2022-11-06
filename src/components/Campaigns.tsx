import { DEBUG } from "../constants";
import { useTotalPublishedProjs } from "../read";
import Campaign from "./Campaign";
import CampainHeading from "./campainHeading"


function Campaigns() {
  // for testing no projects yet
  // const totalPublishedProjs = 0;

  const totalPublishedProjs = useTotalPublishedProjs();
  DEBUG &&
    console.log("totalPublishedProjs: ", totalPublishedProjs?.toString());

  // if totalPublishedProjs not present return nothing
  if (!totalPublishedProjs) {
    return <div className="font-bold text-xl mb-2">No Projects yet!</div>;
  }


  return (
    <>
      <div className="text-center font-bold text-xl mb-2">
        Crowdfunding Projects
      </div>
      <CampainHeading text="Most Successful" />
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {/* create an array starting from 0 index  */}
        
        {Array.from(Array(totalPublishedProjs).keys()).slice(0,3).map(
          (projectNumber: number, i) => {
            return (
              <div key={i}>
                <Campaign projectNumber={projectNumber} />
              </div>
            );
          }
        )}
      </div>
      <CampainHeading text="Gaining Momentum" />
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {/* create an array starting from 0 index  */}
        
        {Array.from(Array(totalPublishedProjs).keys()).slice(0, 3).map(
          (projectNumber: number, i) => {
            return (
              <div key={i}>
                <Campaign projectNumber={projectNumber} />
              </div>
            );
          }
        )}
      </div>
    <a id="Recent">  <CampainHeading text="Recent" /> </a>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {/* create an array starting from 0 index  */}
        
        {Array.from(Array(totalPublishedProjs).keys()).slice(-3).map(
          (projectNumber: number, i) => {
            return (
              <div key={i}>
                <Campaign projectNumber={projectNumber} />
              </div>
            );
          }
        )}
      </div>

      {/* <h1>All Campaings</h1>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        
        {Array.from(Array(totalPublishedProjs).keys()).map(
          (projectNumber: number, i) => {
            return (
              <div key={i}>
                <Campaign projectNumber={projectNumber} />
              </div>
            );
          }
        )}
      </div> */}
    </>
  );
}

export default Campaigns;