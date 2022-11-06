import React, {useState} from 'react'
import type { ChangeEvent, MouseEvent } from "react";
import Image from "./Donate.png"
import { DEBUG } from "../constants";
import { useCrowdfundingProjectFunctionWriter } from "../hooks";
import {
    useGoalAmount,
    useProjDescription,
    useProjTitle,
    usePublishedProjs,
    useRaisedAmount,
  } from "../read";
  import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
  import { fromWei, toWei } from "../utils"; 
  import Img from "../components/imgssss.jpg";
  import { Field, Formik, Form } from "formik";
  import SignupFormWrapper from "./CampainForm"

import {CampaignProps} from "../components/Campaign"; 

function SingleCampaignPage({ projectNumber }: CampaignProps) {
    DEBUG && console.log("projectNumber: ", projectNumber);

    const [value, setValue] = useState<string>("");
  
    const publishedProjsAddress = usePublishedProjs(projectNumber);
    const projTitle = useProjTitle(publishedProjsAddress || "");
    const projDescription = useProjDescription(publishedProjsAddress || "");
    const goalAmount = useGoalAmount(publishedProjsAddress || "");
    const raisedAmount = useRaisedAmount(publishedProjsAddress || "");

    const [formSubmitted, setSubmit] = useState(false);

    const [email, setEmail] = useState("");
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [amount, setAmount] = useState("");
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
      location.replace("/#Recent")
    };
  
    // if (
    //   !publishedProjsAddress ||
    //   !projTitle ||
    //   !projDescription ||
    //   !goalAmount ||
    //   !raisedAmount
    // ) {
    //   return null;
    // }

  return (
    <div style={{padding: "5rem 12rem", gap: "3rem"}} className="flex">
       <div style={{width: "100%"}} className='max-w-3xl'> <img src={Image} />
        <div className='m-4 text-4xl font-bold text-[#2284B4]' ><h1>ABOUT THE FUNDRAISER</h1></div>
        <div className='m-4  text-2xl  font-medium'><p>{projTitle} </p></div>
        <div className='m-4  max-w-2xl'><img src={Img}  /></div>
        <div className='m-4  text-2xl'>
            {projDescription}       </div>
        <div className='flex flex-col'>
        <span style={{maxWidth:"13rem"}} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Goal Amount:
          <span className="text-purple-700">{fromWei(goalAmount)} MATIC</span>
        </span>
        <span style={{maxWidth:"13rem"}}      className="inline-block bg-gray-200  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Raised Amount:
          <span className="text-purple-700">{fromWei(raisedAmount)}  MATIC</span>
          
        </span>
        </div>
        </div>
        <SignupFormWrapper>
        <div className="form-container">
          <Formik
            initialValues={{
              firstname: firstname,
              lastname: lastname,
              email: email,
              amount: amount,
              form: "play",
            }}
            onSubmit={values => {
                setFirstName(values.firstname);
                setEmail(values.email);
                setLastName(values.lastname);
                setAmount(values.amount);
                handleDonate
            } }
          >
            <Form className="form1" method="post">
              <div className="form-group">
                <label htmlFor="firstname" className="form-field">First Name <span className="required-sign">*</span></label>
                <Field type="text" className="text-field" id="firstname" name="firstname" maxLength="32"  pattern="[A-Za-z]{1,32}" required />
              </div>
              <div className="form-group">
                <label htmlFor="lastname" className="form-field">Last Name <span className="required-sign">*</span></label>
                <Field type="text" className="text-field" id="lastname" name="lastname" maxLength="32"  pattern="[A-Za-z]{1,32}" required />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-field">Email Address <span className="required-sign">*</span></label>
                <Field type="email" className="text-field" id="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
              </div>
                <div className="form-group">
                <label htmlFor="org" className="form-field">Donation Amount <span className="required-sign">*</span></label>
                {/* <Field type="number" min={0}
            step="0.001" onChange={handleValue} className="text-field" id="amount" name="amount" /> */}
            <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="number"
            placeholder="0.000"
            min={0}
            step="0.001"
            required
            onChange={handleValue}
          />
              </div>
              <button type="submit" onClick={handleDonate} className="submit-btn">Donate</button>
            </Form>
          </Formik>
        </div>
        </SignupFormWrapper>
      </div> 
  )
}

export default SingleCampaignPage