import classes from "./Card.module.css";

const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};
//在card开始和结束标签之间，必须要写，里面可以传递所有孩子的内容，在card内部

export default Card;
