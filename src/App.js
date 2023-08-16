import Header from "./components/Layout/Header";
import React, { useState } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

//cart购物车是在所有的组件上面，所以写在这里最上面，这样不会被别的组件影响层叠
//因为购物车在这里，所以购物车的可见在这里设置，点击消失状态也在这里设置
function App() {
  const [cardIsShown, setCardIsShown] = useState(false);

  const showCartHandler = () => {
    setCardIsShown(true);
  };

  const hideCartHandler = () => {
    setCardIsShown(false);
  };
  //一开始的状态是false，所以cardIsShown是false，那么&&都是false，就不会显示

  //CartProvider里面的cart组件需要CartProvider组件里的添加数据，删除数据
  //header组件里，button的badge需要 CartProvide里的商品总数数量
  //Meals组件需要CartProvider里数据items。并且点击时，还需要用到添加数组，
  //所以把CartProvider写在这里,因为这里组件都需要用CartProvider里的数据
  return (
    <CartProvider>
      {cardIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
