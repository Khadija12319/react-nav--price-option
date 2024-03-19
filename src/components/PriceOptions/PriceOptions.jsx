import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions= [
        {
          "id": 1,
          "membership": "Basic",
          "price": 50,
          "description": "Access to cardio and weight machines",
          "features": ["Cardio machines", "Weight machines"]
        },
        {
          "id": 2,
          "membership": "Standard",
          "price": 75,
          "description": "Access to cardio, weight machines, and group classes",
          "features": ["Cardio machines", "Weight machines", "Group classes"]
        },
        {
          "id": 3,
          "membership": "Premium",
          "price": 100,
          "description": "Access to all facilities including sauna and swimming pool",
          "features": ["Cardio machines", "Weight machines", "Group classes", "Sauna", "Swimming pool"]
        }
      ];
      
    return (
        <div>
            <h2 className="text-5xl"></h2>
            <div className=" grid md:grid-cols-3 m-28 gap-6">
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;