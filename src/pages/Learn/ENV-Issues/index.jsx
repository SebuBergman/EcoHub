import Navbar from "components/Header/";
import Footer from "components/Footer/";

import "./styles.scss";

const EnvIssuesPage = () => {
  return (
    <div className="envissues">
      <Navbar />
      <img src="..." alt="Climate Justice Now!"></img>
      <h3>What you can do</h3>
      <h1>Addressing environmental issues</h1>
      <div className="envissues_Heading">
        <h2>Understanding Environmental Issues and Taking Action</h2>
        <p>
          At EcoHub, we're committed to raising awareness about pressing
          environmental issues and empowering individuals to take meaningful
          action in their daily lives. Here are some key environmental
          challenges we face today, along with practical steps you can take to
          make a positive impact:
        </p>
      </div>
      <div className="envissues_issues">
        <div>
          <h3>Climate Change</h3>
          <p>
            Issue: Climate change is one of the most urgent environmental crises
            we face, resulting in rising global temperatures, extreme weather
            events, and disruptions to ecosystems. Action: Reduce your carbon
            footprint by conserving energy at home, using public transportation
            or carpooling, supporting renewable energy sources, and advocating
            for climate-friendly policies in your community.
          </p>
        </div>
        <div>
          <h3>Plastic Pollution</h3>
          <p>
            Issue: Plastic pollution poses a significant threat to marine life,
            ecosystems, and human health, with millions of tons of plastic waste
            entering our oceans each year. Action: Reduce single-use plastic
            consumption by using reusable bags, bottles, and containers,
            recycling plastic waste properly, participating in beach cleanups,
            and supporting legislation to reduce plastic pollution.
          </p>
        </div>
        <div>
          <h3>Deforestation</h3>
          <p>
            Issue: Deforestation contributes to habitat loss, biodiversity
            decline, and climate change, with devastating consequences for
            wildlife and indigenous communities. Action: Choose sustainably
            sourced wood products, support organizations working to protect
            forests and wildlife habitats, and advocate for forest conservation
            and reforestation efforts.
          </p>
        </div>
        <div>
          <h3>Biodiversity Loss</h3>
          <p>
            Issue: Biodiversity loss threatens the stability of ecosystems and
            the services they provide, including clean air, water, and food
            security. Action: Protect natural habitats, plant native species in
            your garden to support local wildlife, reduce pesticide and
            herbicide use, and support conservation efforts to preserve
            biodiversity.
          </p>
        </div>
        <div>
          <h3>Water Pollution</h3>
          <p>
            Issue: Water pollution from industrial runoff, agricultural runoff,
            and household waste threatens freshwater sources, aquatic
            ecosystems, and human health. Action: Conserve water at home,
            properly dispose of household chemicals and pharmaceuticals, support
            wastewater treatment initiatives, and participate in community
            clean-up efforts to reduce water pollution.
          </p>
        </div>
        <div>
          <h3>Food Waste</h3>
          <p>
            Issue: Food waste contributes to greenhouse gas emissions, waste of
            resources, and hunger, with billions of tons of food wasted globally
            each year. Action: Reduce food waste by planning meals, storing food
            properly, composting organic waste, supporting food recovery
            programs, and advocating for policies to address food waste at all
            levels.
          </p>
        </div>
        <p>
          By understanding these environmental issues and taking proactive steps
          in your everyday life, you can contribute to a more sustainable and
          resilient future for our planet and future generations.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default EnvIssuesPage;
