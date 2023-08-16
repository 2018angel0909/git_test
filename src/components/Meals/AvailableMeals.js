import classes from "./AvailableMeals.module.css";
import MealItem from "../Meals/MealItem/MealItem";
import Card from "../UI/Card";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const MealList = DUMMY_MEALS.map((item) => (
    <MealItem
      key={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
      id={item.id}
    />
    //这里面用的是item的组件 item={item}，如果传这个，拿的时候props.item.想要的数据。比如props.item.id
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{MealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
