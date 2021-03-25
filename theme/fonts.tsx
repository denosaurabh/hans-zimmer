import { Global } from '@emotion/react';

const CosiTimesFont = () => (
  <Global
    styles={`
      @font-face {
        font-family: "Cosi Times Light Condensed"; 
        font-display: swap;
        
        src: local('Playfair Display', serif), url("/assets/fonts/cosi-times-light-condensed.eot"); 
        src: url("/assets/fonts/cosi-times-light-condensed.eot?#iefix") format("embedded-opentype"), 
             url("/assets/fonts/cosi-times-light-condensed.woff2") format("woff2"),
             url("/assets/fonts/cosi-times-light-condensed.woff") format("woff"),
             url("/assets/fonts/cosi-times-light-condensed.svg#Cosi Times Light Condensed") format("svg"); 
        }
      `}
  />
);

export default CosiTimesFont;
