import "./styles.scss";
import Header from "@/features/header";
import Footer from "@/features/footer";

const sustainableLiving = () => {
  return (
    <div className="envissues">
      <Header />
      <img src="..." alt="Climate Justice Now!"></img>
      <h1>Living sustainably</h1>
      <div>
        <h3></h3>
        <p></p>
      </div>
      <div className="envissues_sustainability_cards">
        <div>
          <h4>Reduce, Reuse, Recycle:</h4>
          <p>
            Minimize waste by following the mantra: reduce what you use, reuse
            what you can, and recycle what's left. Opt for products with minimal
            packaging, choose reusable items over single-use ones, and properly
            recycle materials whenever possible.
          </p>
        </div>
        <div>
          <h4>Conserve Energy:</h4>
          <p>
            Save energy and reduce your carbon footprint by turning off lights
            and appliances when not in use, using energy-efficient LED bulbs,
            adjusting your thermostat to conserve heating and cooling, and
            investing in renewable energy sources such as solar panels.
          </p>
        </div>
        <div>
          <h4>Choose Sustainable Transportation:</h4>
          <p>
            Reduce emissions from transportation by walking, biking, carpooling,
            or using public transportation whenever possible. Consider investing
            in an electric or hybrid vehicle if feasible, and offset your travel
            carbon footprint through carbon offset programs.
          </p>
        </div>
        <div>
          <h4>Eat Sustainably:</h4>
          <p>
            Make environmentally conscious food choices by eating more
            plant-based meals, supporting local and organic farmers, reducing
            food waste, and choosing sustainably sourced seafood and animal
            products.
          </p>
        </div>
        <div>
          <h4>Conserve Water:</h4>
          <p>
            Save water by fixing leaks, installing water-saving fixtures, taking
            shorter showers, using efficient irrigation systems, and collecting
            rainwater for outdoor use.
          </p>
        </div>
        <div>
          <h4>Support Sustainable Brands and Practices:</h4>
          <p>
            Choose products and companies that prioritize sustainability and
            ethical practices. Look for eco-friendly certifications, such as
            Fair Trade, USDA Organic, and Forest Stewardship Council (FSC)
            certifications, when making purchasing decisions.
          </p>
        </div>
        <div>
          <h4>Practice Mindful Consumption:</h4>
          <p>
            Be mindful of your consumption habits and avoid unnecessary
            purchases. Consider the environmental and social impacts of the
            products you buy, opt for durable and repairable items, and borrow
            or share items with others when possible.
          </p>
        </div>
        <div>
          <h4>Get Involved in Community Initiatives:</h4>
          <p>
            Join local environmental organizations, participate in community
            clean-up events, support environmental education programs, and
            advocate for sustainable policies at the local, regional, and
            national levels.
          </p>
        </div>
        <div>
          <h4>Educate Yourself and Others:</h4>
          <p>
            Stay informed about environmental issues, learn about sustainable
            practices, and share your knowledge with others. Engage in
            discussions, attend workshops and events, and encourage others to
            join you on your sustainability journey.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default sustainableLiving;
