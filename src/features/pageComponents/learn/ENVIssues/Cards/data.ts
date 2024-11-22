import ENVCardImage1 from "@app/assets/images/envIssImage1.webp";
import ENVCardImage2 from "@app/assets/images/envIssImage2.webp";
import ENVCardImage3 from "@app/assets/images/envIssImage3.webp";
import ENVCardImage4 from "@app/assets/images/envIssImage4.webp";
import ENVCardImage5 from "@app/assets/images/envIssImage5.webp";
import ENVCardImage6 from "@app/assets/images/envIssImage6.webp";

export interface ENVCardData {
  id: number;
  heading: string;
  text: string;
  path: string; // The path to the image for the card
}

export const ENV_ISSUES_CARD_DATA: ENVCardData[] = [
  {
    id: 1,
    heading: "1. Climate Change",
    text: `Issue: Climate change is one of the most urgent environmental
          crises we face, resulting in rising global temperatures,
          extreme weather events, and disruptions to ecosystems. Action:
          Reduce your carbon footprint by conserving energy at home,
          using public transportation or carpooling, supporting
          renewable energy sources, and advocating for climate-friendly
          policies in your community.`,
    path: ENVCardImage1,
  },
  {
    id: 2,
    heading: "2. Plastic Pollution",
    text: `Issue: Plastic pollution poses a significant threat to marine
          life, ecosystems, and human health, with millions of tons of
          plastic waste entering our oceans each year. Action: Reduce
          single-use plastic consumption by using reusable bags, bottles,
          and containers, recycling plastic waste properly, participating
          in beach cleanups, and supporting legislation to reduce plastic
          pollution.`,
    path: ENVCardImage2,
  },
  {
    id: 3,
    heading: "3. Deforestation",
    text: `Issue: Deforestation contributes to habitat loss, biodiversity
          decline, and climate change, with devastating consequences for
          wildlife and indigenous communities. Action: Choose sustainably
          sourced wood products, support organizations working to protect
          forests and wildlife habitats, and advocate for forest
          conservation and reforestation efforts.`,
    path: ENVCardImage3,
  },
  {
    id: 4,
    heading: "4. Biodiversity Lossc",
    text: `Issue: Biodiversity loss threatens the stability of ecosystems
          and the services they provide, including clean air, water, and
          food security. Action: Protect natural habitats, plant native
          species in your garden to support local wildlife, reduce
          pesticide and herbicide use, and support conservation efforts to
          preserve biodiversity.`,
    path: ENVCardImage4,
  },
  {
    id: 5,
    heading: "5. Water Pollution",
    text: `Issue: Water pollution from industrial runoff, agricultural
          runoff, and household waste threatens freshwater sources,
          aquatic ecosystems, and human health. Action: Conserve water at
          home, properly dispose of household chemicals and
          pharmaceuticals, support wastewater treatment initiatives, and
          participate in community clean-up efforts to reduce water
          pollution.`,
    path: ENVCardImage5,
  },
  {
    id: 6,
    heading: "6. Food Waste",
    text: `Issue: Food waste contributes to greenhouse gas emissions, waste
          of resources, and hunger, with billions of tons of food wasted
          globally each year. Action: Reduce food waste by planning meals,
          storing food properly, composting organic waste, supporting food
          recovery programs, and advocating for policies to address food
          waste at all levels.`,
    path: ENVCardImage6,
  },
];
