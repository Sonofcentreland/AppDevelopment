import { useNavigate } from 'react-router-dom';
import { ButtonBox, LinkBox, TextBox } from '../../Images/elements/Elements';
import './AboutUs.css';
import logo from "../../Images/Logo/png/logo-no-background.png";
import Navbar from '../../Layout/Navbar/Navbar';

function AboutUs() {
     const navigate = useNavigate();
  return (
    <div className="about border">
          <div className='about navbar'><Navbar/></div>
          <div className="about title">
               <h1>About Us</h1>
          </div>
          <div className="about header">               
               <div className="left">
                    <TextBox 
                         name="top" 
                         title={
                              <>
                                   <p>Here are three reasons I think you’ll love RecipeHub, whether you’re a seasoned chef or just starting out:</p>
                              </>
                         }
                    />
                    <div className="bottom">
                         <ButtonBox name="join" text="Get Started" onClick={()=>{navigate('/signup')}}/>
                         <ButtonBox name="about" text="Learn more >" onClick={()=>{navigate('/about-us')}}/>
                    </div>
               </div>
               <div className="right">
                    <img className="top" src={logo} alt=""/>
               </div>
          </div>
          <div className="about intro">
               <p>Welcome to RecipeHub, operated by Erigan Studios. By accessing or using our website, you agree to comply with and be bound by the following about and conditions of use. If you disagree with any part of these about, you may not access the website.</p>
          </div>
          <div className="about point">
               <div className="left">
                    <h1>Reason 1 : Great recipes</h1>
                    <p>It’s a Recipe Website, so naturally you’re going to find recipes here. But I only share the recipes I really, truly love. You won’t find anything here that I’ve never made before or would never make again. Every recipe I post has my stamp of approval—if I wouldn’t eat it or serve it, you won’t find it here.</p>
               </div>
               <div className="right">
                    <img className="top" src={logo} alt=""/>
               </div>
          </div>
          <div className="about point">
               <div className="right">
                    <img className="top" src={logo} alt=""/>
               </div>
               <div className="left">
                    <h1>Reason 2 : Step-by-step instructions with photos.</h1>
                    <p> When Beginners first started cooking, They will unsure about so many things: Like How big should I dice the onions? How thick should I cut the vegetables? What should this look like halfway through the recipe when it looks NOTHING like the final photo? When We created this Website, Our goal was to take away some of that uncertainty by including tons of photos to bring each step of the recipe to life.</p>
               </div>
          </div>
          <div className="about point">
               <div className="left">
                    <h1>Reason 3 : Helpful tips and techniques.</h1>
                    <p>Everyone loves learning any skill that helps them get the job done faster, easier or with a better result. That’s why We created a page of nothing but useful tips and techniques.</p>
               </div>
               <div className="right">
                    <img className="top" src={logo} alt=""/>
               </div>
          </div>
          <div className="about home footer">
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

export default AboutUs;
