import { useNavigate } from 'react-router-dom';
import { LinkBox, TextBox } from '../../Images/elements/Elements';
import './Terms.css';

function Terms() {
     const navigate = useNavigate();
  return (
    <div className="terms border">
          <div className="terms header">
               <h1>Terms and Conditions</h1>
          </div>
          <div className="terms intro">
               <p>Welcome to RecipeHub, operated by Erigan Studios. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions of use. If you disagree with any part of these terms, you may not access the website.</p>
          </div>
          <div className="terms point">
               <h1>1. Website Usage</h1>
               <p>1.1. The content of this website is for informational and personal use only.</p>
               <p>1.2. You must be at least 18 years old to use this website or have permission from a legal guardian.</p>
          </div>
          <div className="terms point">
               <h1>2. Intellectual Property</h1>
               <p>2.1. All content, trademarks, logos, and intellectual property displayed on this website are owned by RecipeHub or licensed to us. Any unauthorized use is strictly prohibited.</p>
               <p>2.2. You may print or download content for personal, non-commercial use only. Reproduction of any content for commercial purposes is strictly prohibited.</p>
          </div>
          <div className="terms point">
               <h1>3. User-Generated Content</h1>
               <p>3.1. Users may contribute content to the website, such as recipes, comments, or reviews.</p>
               <p>3.2. By submitting content, you grant [Your Company Name] a worldwide, non-exclusive, royalty-free license to use, modify, reproduce, display, and distribute the content.</p>
               <p>3.3. You are solely responsible for the content you submit and must ensure it complies with our content guidelines and does not infringe upon any third-party rights.</p>
          </div>
          <div className="terms point">
               <h1>4. Privacy Policy</h1>
               <p>Please review our Privacy Policy to understand how we collect, use, and protect your personal information.</p>
          </div>
          <div className="terms point">
               <h1>5. Limitation of Liability</h1>
               <p>5.1. RecipeHub does not guarantee the accuracy, completeness, or suitability of the information and materials found on this website. Use the information at your own risk.</p>
               <p>5.2. RecipeHub is not liable for any damages arising from the use or inability to use this website.</p>
          </div>
          <div className="terms point">
               <h1>6. Modifications</h1>
               <p>RecipeHub reserves the right to modify these terms and conditions at any time. Continued use of the website after changes constitutes acceptance of the updated terms.</p>
          </div>
          <div className="terms point">
               <h1>7. Governing Law</h1>
               <p>These terms and conditions shall be governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of [Your Jurisdiction].</p>
          </div>
          <div className="terms point">
               <h1>8. User Conduct</h1>
               <p>8.1. You agree to use this website for lawful and proper purposes and not to engage in any conduct that restricts or inhibits anyone's use or enjoyment of the site.</p>
               <p>8.2. You shall not use any automated means or form of scraping or data extraction to access, query, or otherwise collect information or content from this website.</p>
               <p>8.3. You are prohibited from transmitting any viruses, worms, defects, Trojan horses, or any items of a destructive nature.</p>
               <p>8.4. Engaging in activities that disrupt or interfere with the security of the website or its services is strictly prohibited.</p>
          </div>
          <div className="terms point">
               <h1>9. Indemnification</h1>
               <p>9.1. You agree to indemnify, defend, and hold harmless Erigan Studios, its affiliates, and their respective officers, directors, employees, agents, and representatives from and against any claims, liabilities, losses, costs, damages, or expenses arising out of or related to your use of this website.</p>
          </div>
          <div className="terms point">
               <h1>10. Links to Other Websites</h1>
               <p>10.1. Our website may contain links to third-party websites that are not owned or controlled by [Your Company Name]. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites.</p>
               <p>10.2. You acknowledge and agree that [Your Company Name] shall not be responsible or liable for any damage or loss caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any third-party websites.</p>
          </div>
          <div className="terms point">
               <h1>11. Termination</h1>
               <p>11.1. We reserve the right to terminate or suspend access to our website immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these terms and conditions.</p>
               <p>11.2. All provisions of the terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.</p>
          </div>
          <div className="terms point">
               <h1>12. Entire Agreement</h1>
               <p>12.1. These terms and conditions constitute the entire agreement between Erigan Studios and you concerning the subject matter herein and supersedes all prior and contemporaneous understandings, agreements, representations, and warranties.</p>
          </div>
          <div className="terms point">
               <h1>13. Contact Us</h1>
               <p>If you have any questions about these terms and conditions, please Contact Us.</p>
          </div>
          <div className="terms home footer">
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

export default Terms;
