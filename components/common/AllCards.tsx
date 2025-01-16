import { PROPERTYLISTINGSAMPLE } from "@/constants";
import Card from "./Card";
const AllCards = ({ allProducts }) => {
  return (
    <div className="mt-6 w-full">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-10 justify-between items-stretch">
        {allProducts.map((property) => (
          <Card
            id={property.id}
            name={property.name}
            address={property.address}
            rating={property.rating}
            category={property.category}
            price={property.price}
            offers={property.offers}
            image={property.image}
            discount={property.discount}
            key={property.id}
          />
        ))}
      </section>
    </div>
  );
};

export default AllCards;
