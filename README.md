# 732-Tech_Demo_test Topic: Scrolling / parallax animation libraries

# React Scroll Parallax:  
## Usage:
1.insatll repository by npm: npm install react-scroll-parallax  
2. Remember import { ParallaxProvider } from 'react-scroll-parallax'; on the top   
-when we need to use {useParallax or Parallax}, we need to make sure ParallaxProvider is outside  

## Create effects:  
Parallax Props -> useParallax() Parallax ParallaxBanner --> make our web looks has layer  
**1.*(Basic)* Parallax: the main component for applying scroll effects**   
-->control speed,translate  

**2.ParallaxBanner:**  
Component that sets up layer of useParallax elements to achieve parallaxing banner, images or custom markup with scroll effects in a container that hides overflow.

## How it works:
as the element scroll past the viewport a css translate effect is applied based on the original element's
position relative to the viewport. Using the different speed which it will have comparation,
so it looks like different elements have different layers.

## Scroll Effects
1.Around z/y-axis(z-axis is default):  
**const parallax = useParallax({rotate:[0,360]/rotateY:[0,360]})**   
use **rotate** props to rotate an element around z/y

2.Scale: 
scale an element up or down along any axis  
**const mage = useParallax({scale: [x, y, 'easeInQuad']}**  
x represents the starting value of scaling and y represents the ending value of scaling.  
for example, x=1.5 y=1 means when we scroll the elements will reduce to original size.

## Parallax Banners, Advanced Banners  
for example: 2 layers, we set it background and one foreground. The order of the defined layer 
determines the stacking of each image, first in the array will appear at the back and be 
coverd by subsequent layers.   
The image prop defines the layer image. The speed prop is used to make the layer move at it's own pace  
The foreground speed is defined so that it will move faster than the background.

## Easing Animation 
We found at the part of scale, we use "easeInQuad" there. It represents the slow motion function used, which
 is the rate of change function of the animation effect.  
 **const parallax = useParallax({  
    easing: 'easeOutQuad',  
    translateX: [0, 100], });**  
translateX represent starting from the current position of the element, move it horizontally
by 100 units, adn then at the end of the animation, the element stays in its new position.
    


# Atropos：  
1.install repository by npm: npm i atropos   
2.the when we use this repository, we import Atropos from 'atropos/react'; on the top   


   
