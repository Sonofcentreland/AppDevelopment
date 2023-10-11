import React from 'react';
import './Privacy.css';
import Navbar from '../../Layout/Navbar/Navbar';
import { LinkBox, TextBox } from '../../Images/elements/Elements';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
    const navigate = useNavigate();
  return (
    <><><><><>
    <div className="home navbar"><Navbar/></div>
    <div className="privacy-policy">
          <h1>Privacy Policy</h1>
          <p>
              This Privacy Policy describes how we collect, use, and protect your personal information
              when you use our Recipe Hub application.
          </p>
      </div>
          <div className="pesonal data">
              <h2>Personal data</h2>
              <p>
                  All the data you enter about yourself during subscription, commenting, registering or any other mode for form is safe with us and it will not be shared with any other third parties. The purpose of collecting your details is to improve your experience on the website and to alert you about daily updates, new initiatives or news related to the website using your email Ids through newsletters. Also, if you see ads on the website, it is done by Google using cookies. You can disable them using Google ad policies.
              </p>
          </div></>
          <div className="Production">
              <h3>Production</h3>
              <p>
                  Users are provided with secure browsing on the website. The use of secure socket layer improves the security and all your data's are encrypted and stored for not more than 60 days
              </p>
          </div></>
          <div className="Cookies">
              <h4>Cookies</h4>
              <p>
                  We use cookies to improve the user experience on the website. We track and analyze the data to understand user preferences and optimize the website accordingly. We will not share this information with any third parties. If you don't want to get tracked by cookies, you can turn them off through your browser settings.
              </p>
          </div></>
          <div className="Information Disclosure">
              <h5>Information Disclosure</h5>
              <p>
                  We will not give access to use your personal information by any third parties unless if they are our trusted partners and agreed parties in the business. We may use the information only when it complies with the law strategies. You may find third parties links in our websites promoting products at it is at our sole discretion. Also, we don't take responsibility for the provided contents or links of these third parties sites.
              </p>
          </div></>
          <div className="Changes in Policies">
              <h6>Changes in Policies</h6>
              <p>
              Our policies statement will be changed at any time with or without notice. It's your responsibility to check for updates whenever you visit our site.         
              </p>
          </div>
          <div className="home footer">
               <div className="top">
                    <div className="left">
                         <TextBox 
                              name="textbox" 
                              title={
                                   <>
                                        <p>RecipeHub</p>
                                   </>
                              }
                              text={
                                   <>
                                        <p>RecipeHub offers a variety of recipes catering to different dietary needs and skill levels. 
                                             It helps plan meals, reduce waste, save time and money, and inspire new ideas through 
                                             recipe collections and recommendations.
                                        </p>
                                   </>
                              }
                         />
                    </div>
                    <div className="center">
                         <p>About</p>
                         <LinkBox name="box" text="About Us" onClick={()=>{navigate('/about-us')}}/>
                         <LinkBox name="box" text="Contact Us" onClick={()=>{navigate('/contact-us')}}/>
                    </div>
                    <div className="right">
                         <p>Support</p>
                         <LinkBox name="box" text="Product Support"/>
                         <LinkBox name="box" text="Community"/>
                         <LinkBox name="box" text="FAQ" onClick={()=>{navigate('/faq')}}/>
                    </div>
               </div>   
               <div className="bottom">
                    <div className="left">
                         <p>Copyright © 2023 RecipeHub</p>
                    </div>
                    <div className="right">
                         <LinkBox name="box" text="Privacy Policy" onClick={()=>{navigate('/privacy')}}/>
                         <LinkBox name="box" text="Terms of Use" onClick={()=>{navigate('/terms')}}/>
                         <LinkBox name="box" text="GDPR"/>
                    </div>
               </div>
          </div>
          </>
  );
};

export default PrivacyPolicy;
