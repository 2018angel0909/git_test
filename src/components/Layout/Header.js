import { Fragment } from "react";
import classes from "./Header.module.css";
import ImagesFood from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
//import CartProvider from "../../store/CartProvider";

//import转变将图包含在完成的应用程序中，生成指向图像的链接，在动态插入
//src必须要写alt替代文本，也要动态插入{},引入格式jpg
//如果本地网址上URl的图 src='https://some-url.com/to-some-image.jpg'

const Header = (props) => {
  //const ctx = useContext(CartProvider);
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={ImagesFood} alt="Yammy food" />
      </div>
    </Fragment>
  );
};

export default Header;
