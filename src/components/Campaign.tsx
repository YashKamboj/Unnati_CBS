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
import { useState } from "react";
import Img from "./imgssss.jpg";
import Img2 from "./gems.jpeg";
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

export type CampaignProps = { projectNumber: number };


const percentage = 66;
// var percentage = () => ( ( fromWei(raisedAmount) / fromWei(goalAmount)) * 100) ;

function Campaign({ projectNumber }: CampaignProps) {
  DEBUG && console.log("projectNumber: ", projectNumber);

  const [value, setValue] = useState<string>("");

  const publishedProjsAddress = usePublishedProjs(projectNumber);
  const projTitle = useProjTitle(publishedProjsAddress || "");
  const projDescription = useProjDescription(publishedProjsAddress || "");
  const goalAmount = useGoalAmount(publishedProjsAddress || "");
  const raisedAmount = useRaisedAmount(publishedProjsAddress || "");
  // const x = fromWei(goalAmount);

  // function percentage(partialValue, totalValue) {
  //   return (100 * fromWei(raisedAmount)) / x;
  // } 

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

  const handleValue = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const inputValue = e.target.value;
    DEBUG && console.log("value: ", inputValue);

    // set value
    setValue(inputValue);
  };

  const handleDonate = async (e: MouseEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault();

      const valueToWei = toWei(value);
      DEBUG && console.log("valueToWei: ", valueToWei);

      const tx = await writeAsync({
        overrides: {
          value: valueToWei,
        },
      });
      console.log("tx >>> ", tx);

      addRecentTransaction({
        hash: tx.hash,
        description: `Donate ${value} MATIC`,
      });
    } catch (error) {
      console.log("errror >>> ", error);
    }
  };

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
  {/* <CircularProgressbar 
  value={percentage}
  text={`${percentage}%`}
  styles={buildStyles({
    rotation: 0.0,
    strokeLinecap: 'butt',
    textSize: '20px',
    pathTransitionDuration: 0.5,
    padding: "2rem 10rem",
    pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
    textColor: '#f88',
    trailColor: '#d6d6d6',
    backgroundColor: '#3e98c7',
  })}
/> */}

<CircularProgressbarWithChildren value={66}>
  {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
  <img style={{ width: 40, marginTop: -5 }} src="https://i.imgur.com/b9NyUGm.png" alt="doge" />
  <div style={{ fontSize: 12, marginTop: -5 }}>
    <strong>66%</strong>
  </div>
</CircularProgressbarWithChildren>
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
          {/* <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="number"
            placeholder="0.000"
            min={0}
            step="0.001"
            required
            onChange={handleValue}
          /> */}
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
