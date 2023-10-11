import { useNavigate } from 'react-router-dom';
import { ButtonBox, LinkBox, TextBox } from '../../Images/elements/Elements';
import './Faq.css';
import logo from "../../Images/Logo/png/logo-no-background.png";

function Faq() {
     const navigate = useNavigate();
  return (
    <div className="faq border">
          <div className="faq title">
               <h1>FAQ's</h1>
               <p>View the frequently asked questions below</p>
          </div>
          <div className="faq header">               
               <div className="left">
                    <TextBox 
                         name="top" 
                         title={
                              <>
                                   <p>Here are some frequently asked questions (FAQ) that you can take a look at</p>
                              </>
                         }
                    />
                    <div className="bottom">
                         <ButtonBox name="join" text="Get Started" onClick={()=>{navigate('/signup')}}/>
                         <ButtonBox name="faq" text="Learn more >" onClick={()=>{navigate('/faq-us')}}/>
                    </div>
               </div>
               <div className="right">
                    <img className="top" src={logo} alt=""/>
               </div>
          </div>
          <div className="faq intro">
               <p>Welcome to RecipeHub, operated by Erigan Studios. By accessing or using our website, you agree to comply with and be bound by the following faq and conditions of use. If you disagree with any part of these faq, you may not access the website.</p>
          </div>
          <div className="faq point">
               <ButtonBox name="right" text="+"/>
               <div className="left">
                    <div className="top">
                         <h1>What is Recipe Hub?</h1>
                    </div>
                    <div className="bottom">
                         <p> Recipe Hub is a digital platform that offers a wide variety of recipes, cooking tips, and culinary inspiration.</p>
                    </div>
               </div>
          </div>
          <div className="faq point">
               <ButtonBox name="right" text="+"/>
               <div className="left">
                    <div className="top">
                         <h1>How can I search for recipes on Recipe Hub?</h1>
                    </div>
                    <div className="bottom">
                         <p>You can search for recipes on Recipe Hub by using keywords, ingredients, cuisine types, or dietary preferences in the search bar.</p>
                    </div>
               </div>
          </div>
          <div className="faq point">
               <ButtonBox name="right" text="+"/>
               <div className="left">
                    <div className="top">
                         <h1>Can I submit my own recipes to Recipe Hub?</h1>
                    </div>
                    <div className="bottom">
                         <p>Many recipe websites allow users to submit their own recipes. Check the "Submit a Recipe" or similar section on the website to find out if Recipe Hub offers this feature.</p>
                    </div>
               </div>
          </div>
          <div className="faq point">
               <ButtonBox name="right" text="+"/>
               <div className="left">
                    <div className="top">
                         <h1>Is Recipe Hub free to use?</h1>
                    </div>
                    <div className="bottom">
                         <p>Yes, Recipe Hub is free to use. You can access and explore recipes without any cost.</p>     
                    </div>
               </div>
          </div>
          <div className="faq point">
               <ButtonBox name="right" text="+"/>
               <div className="left">
                    <div className="top">
                         <h1>Are the recipes on Recipe Hub rated or reviewed by users?</h1>
                    </div>
                    <div className="bottom">
                         <p>Some recipe websites include user ratings and reviews. You can often find this information on each recipe's page to gauge its popularity and user feedback.</p>
                    </div>
               </div>
          </div>
          <div className="faq point">
               <ButtonBox name="right" text="+"/>
               <div className="left">
                    <div className="top">
                         <h1>Do I need to create an account to use Recipe Hub?</h1>
                    </div>
                    <div className="bottom">
                         <p>Some websites require users to create an account to access certain features, while others allow browsing without an account. Check Recipe Hub's specific policy regarding user accounts.</p>
                    </div>
               </div>
          </div>
          <div className="faq point">
               <ButtonBox name="right" text="+"/>
               <div className="left">
                    <div className="top">
                         <h1>Are nutritional facts provided for the recipes on Recipe Hub?</h1>
                    </div>
                    <div className="bottom">
                         <p>Nutritional information is often available for recipes, helping users make informed choices about their meals. Look for a "Nutritional Information" section or a link to a nutrition calculator.</p>
                    </div>
               </div>
          </div>
          <div className="faq point">
               <ButtonBox name="right" text="+"/>
               <div className="left">
                    <div className="top">
                         <h1>Can I save my favorite recipes on Recipe Hub?</h1>
                    </div>
                    <div className="bottom">
                         <p>Many recipe websites offer a "Save" or "Bookmark" feature that allows users to save their favorite recipes for easy access later.</p>
                    </div>
               </div>
          </div>
          <div className="faq point">
               <ButtonBox name="right" text="+"/>
               <div className="left">
                    <div className="top">
                         <h1>How can I contact Recipe Hub's support team for questions or issues?</h1>
                    </div>
                    <div className="bottom">
                         <p>Look for a "Contact Us" or "Support" link on the website to get in touch with the Recipe Hub team for any inquiries or problems.</p>
                    </div>
               </div>
          </div>
          <div className="faq point">
               <ButtonBox name="right" text="+"/>
               <div className="left">
                    <div className="top">
                         <h1>Is Recipe Hub available as a mobile app?</h1>
                    </div>
                    <div className="bottom">
                         <p>Some recipe platforms offer mobile apps for convenient access on smartphones and tablets. Check your app store for the availability of a Recipe Hub app if one exists.</p>
                    </div>
               </div>
          </div>
          <div className="faq home footer">
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
                         <LinkBox name="box" text="About Us"/>
                         <LinkBox name="box" text="Contact Us"/>
                    </div>
                    <div className="right">
                         <p>Support</p>
                         <LinkBox name="box" text="Product Support"/>
                         <LinkBox name="box" text="Community"/>
                         <LinkBox name="box" text="FAQ"/>
                    </div>
               </div>   
               <div className="bottom">
                    <div className="left">
                         <p>Copyright © 2023 RecipeHub</p>
                    </div>
                    <div className="right">
                         <LinkBox name="box" text="Privacy Policy"/>
                         <LinkBox name="box" text="Terms of Use" onClick={()=>{navigate('/terms')}}/>
                         <LinkBox name="box" text="GDPR"/>
                    </div>
               </div>
          </div>
    </div>
  );
}

export default Faq;
