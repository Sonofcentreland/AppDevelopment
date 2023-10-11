import { useNavigate } from "react-router-dom";
import { ButtonBox, LinkBox, TextBox } from "../../Images/elements/Elements";
import Navbar from "../../Layout/Navbar/Navbar";
import './Home.css';
import { DashboardIcon } from "../../Images/svg/Svg";

function Home() {
     const navigate = useNavigate();
  return (
     <div className="home border">
          <div className="home navbar"><Navbar/></div>
          <div className="home header">               
               <div className="left">
                    <TextBox 
                         name="top" 
                         title={
                              <>
                                   <p>A Recipe has no soul,</p>
                                   <p>We bring soul to the Recipe</p>
                              </>
                         }
                         text={
                              <>
                                   <p>Discover a world of delightful flavors and culinary adventures. 
                                        From mouth-watering appetizers to indulgent desserts, we have recipes for every occasion. 
                                        Let's turn your kitchen into a gourmet haven!
                                   </p>
                              </>
                         }
                    />
                    <div className="bottom">
                         <ButtonBox name="join" text="Get Started" onClick={()=>{navigate('/signup')}}/>
                         <ButtonBox name="about" text="Learn more >" onClick={()=>{navigate('/about-us')}}/>
                    </div>
               </div>
               <div className="right">
                    <img className="top" src="https://i3.wp.com/www.thetalentedindian.com/wp-content/uploads/2023/05/Indian-food.jpeg" alt=""/>
               </div>
          </div>
          <div className="home latest">
               <div className="top">
                    <h1>Latest Recipes</h1>
               </div>
          </div>
          <div className="home reason">
                    <TextBox 
                         name="top" 
                         title={
                              <>
                                   <p>The reasons to choose recipes</p>
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
                    <div className="bottom">
                         <TextBox name="box" icon={<DashboardIcon/>} title="350+" text="Recipes"/>
                         <TextBox name="box" icon={<DashboardIcon/>} title="1250+" text="Cooking Tips"/>
                         <TextBox name="box" icon={<DashboardIcon/>} title="33,150+" text="Daily visitors"/>
                    </div>
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
     </div>
  );
}

export default Home;
