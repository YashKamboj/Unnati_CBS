import { DEBUG } from "../constants";
import { useCrowdfundingProjectFunctionWriter } from "../hooks";
import {
  useGoalAmount,
  useProjDescription,
  useProjTitle,
  usePublishedProjs,
  useRaisedAmount,
} from "../read";
import { fromWei, toWei } from "../utils";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import type { ChangeEvent, MouseEvent } from "react";
import { useState, useEffect } from "react";
import Img from "./imgssss.jpg";
import Img2 from "./gems.jpeg";
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export type CampaignProps = { projectNumber: number };

// var percentage = () => ( ( fromWei(raisedAmount) / fromWei(goalAmount)) * 100) ;


function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number },
) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

function Campaign({ projectNumber }: CampaignProps) {
  DEBUG && console.log("projectNumber: ", projectNumber);

  const [percentage, setpercentage] = useState(0);
  
  const publishedProjsAddress = usePublishedProjs(projectNumber);
  const projTitle = useProjTitle(publishedProjsAddress || "");
  const projDescription = useProjDescription(publishedProjsAddress || "");
  const goalAmount = useGoalAmount(publishedProjsAddress || "");
  const raisedAmount = useRaisedAmount(publishedProjsAddress || "");
  // const x = fromWei(goalAmount);

  // function percentage(partialValue, totalValue) {
  //   return (100 * fromWei(raisedAmount)) / x;
  // } 
    useEffect(() => {
      setpercentage (100 * Number(fromWei(raisedAmount))/ Number(fromWei(goalAmount)));
  }, []);
  DEBUG &&
    console.log({
      publishedProjsAddress,
      projTitle,
      projDescription,
      goalAmount,
      raisedAmount,
    });

  // rainbow kit txn handler
  const addRecentTransaction = useAddRecentTransaction();

  // custom hook we made in hooks.ts for writing functions
  const { writeAsync, isError } = useCrowdfundingProjectFunctionWriter({
    contractAddress: publishedProjsAddress || "",
    functionName: "makeDonation",
  });

  if (
    !publishedProjsAddress ||
    !projTitle ||
    !projDescription ||
    !goalAmount ||
    !raisedAmount
  ) {
    return null;
  }
  
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={Img} />
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{projTitle}</div>
        <p className="text-gray-700 text-base">{projDescription}</p>
      </div>
      <div style={{width: "4.5rem", position: "absolute"}}>
<div style={{marginTop: "1.4rem", marginLeft: "1.3rem"}}>
  <CircularProgressWithLabel value={percentage} />
</div>

</div>
      <div className="px-20  pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 inline-block.">
          Goal Amount:
          <span className="text-purple-700">{fromWei(goalAmount)} MATIC</span>
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 inline-block">
          Raised Amount:
          <span className="text-purple-700">{fromWei(raisedAmount)} MATIC</span>
        </span> 



        <div className="flex justify-around items-center py-2">

          <a href= {`/Campaign?id=${projectNumber}`} >
          <button
            className="flex-shrink-0  text-lg text-white py-1 px-12 rounded-3xl"
            type="button"
            // onClick={handleDonate}
            style={{background: "#1FAF38"}}
          >
           &nbsp; &nbsp; &nbsp; Donate &nbsp; &nbsp; &nbsp;
          </button>
          </a>
        </div>

        {/* if error occures display text to try again */}
        {isError && (
          <p className="text-red-500 text-xs italic">
            Error occured! Please try again!.
          </p>
        )}
      </div>
    </div>
  );
}

export default Campaign;
