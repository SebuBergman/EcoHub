import SustainableCardImage1 from "@app/assets/images/Sustainable1.webp";
import SustainableCardImage2 from "@app/assets/images/Sustainable2.webp";
import SustainableCardImage3 from "@app/assets/images/Sustainable3.webp";
import SustainableCardImage4 from "@app/assets/images/Sustainable4.webp";
import SustainableCardImage5 from "@app/assets/images/Sustainable5.webp";
import SustainableCardImage6 from "@app/assets/images/Sustainable6.webp";
import SustainableCardImage7 from "@app/assets/images/Sustainable7.webp";
import SustainableCardImage8 from "@app/assets/images/Sustainable8.webp";
import SustainableCardImage9 from "@app/assets/images/Sustainable9.webp";
import SustainableCardImage10 from "@app/assets/images/Sustainable10.webp";
import SustainableCardImage11 from "@app/assets/images/Sustainable11.webp";
import SustainableCardImage12 from "@app/assets/images/Sustainable12.webp";

export interface SustainableCardData {
  id: number;
  heading: string;
  text: string;
  path: string; // The path to the image for the card
}

export const SUSTAINABLE_CARD_DATA: SustainableCardData[] = [
  {
    id: 1,
    heading: "Reduce consumption of single-use plastics",
    text: `Reduce single-use plastic by using reusable bags, 
          bottles and containers. Choose products with as little 
          packaging as possible or go for environmentally friendly 
          alternatives.`,
    path: SustainableCardImage1,
  },
  {
    id: 2,
    heading: "Save energy at home",
    text: `Save energy by turning off lights and appliances when not in use, 
          using energy-efficient appliances and lighting, 
          and insulating to reduce home heating and cooling needs.`,
    path: SustainableCardImage2,
  },
  {
    id: 3,
    heading: "Save water in practice",
    text: `Save water by fixing leaks, taking shorter showers, 
          installing water-efficient fixtures and collecting 
          rainwater for outdoor use.`,
    path: SustainableCardImage3,
  },
  {
    id: 4,
    heading: "Eat locally and seasonally",
    text: `Support local farmers and reduce your carbon footprint by eating locally 
          grown and seasonal food. Visit farmers' markets, join the Community Supported 
          Agriculture (CSA) program and favour organic and sustainable options.`,
    path: SustainableCardImage4,
  },
  {
    id: 5,
    heading: "Choose sustainable transport",
    text: `Choose walking, biking, carpooling or public transit whenever possible to reduce 
          transportation emissions. Consider investing in an electric or hybrid car where possible, 
          and offset your carbon footprint of travel through carbon offset schemes.`,
    path: SustainableCardImage5,
  },
  {
    id: 6,
    heading: "Minimum food waste",
    text: `Reduce food waste by planning meals, storing food properly, composting organic waste 
          and donating excess food to local food banks or shelters. Use leftover ingredients creatively 
          to minimise waste.`,
    path: SustainableCardImage6,
  },
  {
    id: 7,
    heading: "Support sustainable brands",
    text: `Choose products and companies prioritising sustainability, ethical working practices and 
          environmental protection. Look for eco-friendly certifications and labels when making 
          purchasing decisions.`,
    path: SustainableCardImage7,
  },
  {
    id: 8,
    heading: "Reduce meat consumption",
    text: `Reduce meat consumption and include more plant-based meals in your diet. Eating less 
          meat can reduce greenhouse gas emissions, save water and protect habitats.`,
    path: SustainableCardImage8,
  },
  {
    id: 9,
    heading: "Choose energy efficient appliances",
    text: `Switch to energy-efficient appliances such as ENERGY STAR-rated refrigerators, washing 
          machines and dishwashers to save energy and reduce electricity bills.`,
    path: SustainableCardImage9,
  },
  {
    id: 10,
    heading: "Practice conscious consumption",
    text: `Be mindful of your spending habits and avoid impulse purchases. Consider the 
          environmental and social impact of your products and choose quality over quantity.`,
    path: SustainableCardImage10,
  },
  {
    id: 11,
    heading: "Support renewable energy",
    text: `Invest in renewable energy sources, such as solar panels or wind turbines, to 
          power your home or business. Consider participating in community solar energy programs 
          or purchasing renewable energy credits to support clean energy initiatives.`,
    path: SustainableCardImage11,
  },
  {
    id: 12,
    heading: "Participate in community activities",
    text: `Join local environmental organisations, participate in community clean-up events 
          and advocate for sustainable policies at local, regional and national levels. Take 
          part in debates, and participatory workshops and collaborate with others to create 
          a positive change in your community.`,
    path: SustainableCardImage12,
  },
];
