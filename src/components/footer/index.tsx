import React from 'react';
import TwitterIcon from "../../../twitter.svg";
import GithubIcon from "../../../github.svg";
import FooterWrapper from "./footer.style";
import LOGO from "../../../logo.png"

const Footer = () => {
  return (
    <FooterWrapper> 
      <div className="container">
        <div className='footer-links community'> 
          <img src={LOGO} style={{width:"15rem", maxWidth:"300%"}}/>
          <ul className="section-categories">
            <li>
            <br/>
            </li>
            <li>
            <br/>
            </li>
            <li>
            <br/>
            </li>
            <li>
            <br/>
            </li>                  
            <li>
            <br/>
            </li>
            <li>
            <br/>
            </li>
          </ul>
        </div>
        <div className='footer-links getting-started'> 
          <h3 className="section-title">
              FUNDRAISE
          </h3>
          <ul className="section-categories">
            <li>
              <a
                className="category-link"
                href="/"
              >BROWSE FUNDRAISERS
              </a>
            </li>
            <li>
              <a
                className="category-link"
                href="/"
              >START A FUNDRAISER
              </a>
            </li>
            <li>
              <a
                className="category-link"
                href="/"
              >SUPPORT AN NGO
              </a>
            </li>
            <li>
              <a
                className="category-link"
                href="/"
              >DONATE IN KIND
              </a>
            </li>
            <li>
              <a
                className="category-link"
                href="/"
              >GENERAL DONATION
              </a>
            </li>
            <li>
              <a
                className="category-link"
                href="/"
              >EVENTS
              </a>
            </li>
          </ul>
        </div>
        <div className='footer-links resources'> 
          <h3 className="section-title">
            <a className="title-link" href='/'>
              ABOUT US
            </a>
          </h3>
          <ul className="section-categories">
            <li>
              <a
                className="category-link"
                href="/"
              >OUR STORY
              </a>
            </li>
            <li>
              <a
                className="category-link"
                href="/"
              >
                HOW IT WORKS
              </a>
            </li>
            <li>
              <a
                className="category-link"
                href="/"
              >
                FAQS
              </a>
            </li>
            <li>
              <a
                className="category-link"
                href="/"
              >
                CSR SUPPORT
              </a>
            </li>                  
            <li>
              <a
                className="category-link"
                href="/"
              >
               TOP NGOs IN INDIA
              </a>
            </li>
          </ul>
        </div>
        <div className='footer-links socials'> 
          <h3 className="section-title">
            <a className="title-link" href='/'>
              SOCIALS
            </a>
          </h3>
          <ul className="section-categories">
            <li>
              <a
                className="category-link"
                href="https://twitter.com/KambojYash"
              >
                <img src={TwitterIcon} alt="Twitter Icon"/>
                Twitter
              </a>
            </li>
            <li>
              <a
                className="category-link"
                href="https://github.com/YashKamboj/Unnati"
              >
                <img src={GithubIcon} alt="GitHub Icon" />
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container flex copyright">
        <div className="text">&copy; 2022|ALL RIGHTS RESERVED</div>
        <div className="text"><a href="/">POLICY</a></div>
        <div className="text"><a href="/">TERMS AND CONDITIONS</a></div>
      </div>
    </FooterWrapper> 
  )
}

export default Footer; 