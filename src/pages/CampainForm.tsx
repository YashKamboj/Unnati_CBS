import styled from "styled-components";

const SignupFormWrapper = styled.section`
  width: 100%;
	.required-sign {
		color: #b30000;
	}
	.accounts{
	  margin-top: 1rem;
    p {
			font-size: 0.8rem;
			line-height: 0.9rem;
			color: #aaa;
    }
    .accounts_group{
      margin: 0 1rem 0 1rem;
    }
  }
  select {
    /* for Firefox */
    -moz-appearance: none;
    /* for Chrome */
    -webkit-appearance: none;
  }
  
  /* For IE10 */
  select::-ms-expand {
    display: none;
  }
  .form-container{
	  margin: 1rem;
       
	  @media only screen and (max-width: 1024px){
			margin: 2rem 0 ;
		}
		.form-title {
			padding: 1rem;
			text-align: center;
			background-color: #00b39f;
			color: white;
		}
		.form1 {
			font-size: .8725rem;
			padding: 1rem;
			display: flex;
			flex-flow: column wrap;
			align-content: flex-start;
			justify-content: flex-start;
			label {
				display: block;
			}
			
			.form-name {
				font-weight: 600;
				margin: 20px 0px 5px 3px;
				display: block;
			}
			.text-field {
				border: 1px solid #2284B4;
				border-radius: 10px;
				padding: 1rem .5rem;
				font-size: .85rem;
				margin-top: 0.5rem;
				margin-right: 0.5rem;
                width: 200%;
				
				&:focus {
					border: 2px solid #00B39F;
				}
			}
			.form-field{
				margin-top: 1rem;
				font-size: 1.2rem;
                width: 200%;
			}
			.form-select {
				margin-right: 0.5rem;
			}
			select {
				padding: 1rem 0.5rem;
				margin: 0.5rem 0;
				background: none repeat scroll 0 0 #FFFFFF;
				border: 1px solid black;
				border-radius: 10px;
				height: 50px;
				font-size: .85rem;
			}
			.custom-arrow {
				background-color: white;
				width: 2rem;
				height: 2.65rem;
				position: absolute;
				right: 2.75rem;
				bottom: 12.35rem;
				pointer-events: none;
				.down-arrow {
					position: relative;
					top: 0.5rem;
					left: 0.5rem;
					border: solid black;
					border-width: 0 3px 3px 0;
					display: inline-block;
					padding: 5px;
					transform: rotate(45deg);
					pointer-events: none;
				}
				@media screen and (max-width: 1024px) {
					bottom: 11.35rem;
					right: 1.75rem;
				}
			}
			
			.submit-btn {
				margin: 3rem auto;
				padding: 1rem 1.5rem;
				font-size: 1.35rem;
				display: block;
				border: 0;
				border-radius: 0.5rem;
				background: #00B39F;
				color: #FFF;
				&:hover {
					cursor: pointer;
					box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
				}
				@media only screen and (max-width: 600px) {
						width: 50%;
				}
			}
			@media only screen and (max-width: 300px) {
				margin-left: 0;
				margin-right: 0;
			}
		}
	}
`;

export default SignupFormWrapper;