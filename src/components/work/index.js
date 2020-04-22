import React from "react";

import mediaone from "../../images/man.png"
import mediatwo from "../../images/woman.png"
import mediacirlce from "../../images/yellow_circle.png"
import "./assets/css/styles.scss"

import { fadeInRight,fadeIn,fadeInUp,
    fadeOut,fadeInDown, fadeOutDown,
    slideOutRight,
    slideInRight
  } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
  
    fadeIn: {
        animation: ' 2s 0s linear forward  ',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
      },
      fadeOut: {
        animation: ' 2s 3s   linear   both',
        animationName: Radium.keyframes(fadeOut, 'fadeIn')
      },
      fadeInUp: {
      animation: '2s 7s  linear   both ',
      animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
    },
    fadeOutDown: {
        animation: '2s 12s  linear   both ',
        animationName: Radium.keyframes(fadeOutDown, 'fadeOutDown')
      },
      fadeOutDown: {
        animation: '2s 12s  linear   both ',
        animationName: Radium.keyframes(fadeOutDown, 'fadeOutDown')
      },
      slideOutRight: {
        animation: '2s 12s  linear  forwards  ',
        animationName: Radium.keyframes( slideOutRight, ' slideOutRight')
      },
      fadeOuttext: {
        animation: ' 2s 12s   linear   both',
        animationName: Radium.keyframes(fadeOut, 'fadeIn')
      },
     
    fadeInRight: {
        animation: '2s 8s     backwards ',
        animationName: Radium.keyframes(fadeInRight, 'fadeInRight')
      },

      girlswipefromright: {
        animation: '2s 12s     backwards ',
        animationName: Radium.keyframes(slideInRight, 'slideInRight')
      }
  }
export default function Work () {
 
   
        return (
            <div className="Work"> 
          
         
  
                <div className="work-img-one" >

                <StyleRoot>
                    <div className="first-animation" style={styles.fadeIn} >
                    <div className="first-slideup" style={styles.fadeOut}>
                        We're the B2B digital marketing agency you want to work with
                        </div>
                        </div>
                </StyleRoot>

                
                    <div class="media-section second-animation" >
                    
                         <StyleRoot className="abs-circle" >
                        <div style={styles.slideOutRight}>
                        <img className="img-responsive" style={styles.fadeInUp} src={mediacirlce}  />
                         </div>
                        </StyleRoot>
                        <StyleRoot>
                         <div style={styles.fadeOutDown}>
                        <img src={mediaone} className="img-responsive" style={styles.fadeInUp} />
                        </div>
                        </StyleRoot>
                        <StyleRoot>
                            <div style={styles.fadeOuttext}>
                            <div style={styles.fadeInRight} className=" second-animation text-section">
                                    You're already an expert in your industry...
                            </div>
                            </div>
                        </StyleRoot>
                        <StyleRoot>
                        <div class="media-section" >
                
                   <img src={mediatwo} className="img-responsive" style={styles.girlswipefromright} />
                   
                   </div>
                            </StyleRoot>

                     
                         
                        </div>
                      
               

            
                
           </div>
                       
              
           
          
           
       
         
          </div>
        );
        }
      


