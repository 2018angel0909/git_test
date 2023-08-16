import classes from "./Input.module.css";
import React from "react";

//父组件要在input里绑定好，这里传过来父组件的ref
//通过父组件传来ref。通过React.forwardRef会生成新的react对象input，input就会和传来的ref进行绑定
//在return，input里，ref绑定这里的input，别的父组件就可以获取里面的值

const Input = React.forwardRef((props, ref) => {
  //单独写，别的组件可以复用
  //label行内标签
  //可以是input或者textarea
  //label加for属性绑定input控件后，可以提高鼠标用户的体验
  //label元素内点击文本，就会触发此这个控件，用户渲染改标签的时候，浏览器就会自动将焦点转到和标签有关的表单控件
  //input父组件也有一个id传过来。可以让label和input绑定在一起，这样点击label的时候，input框就会自动聚焦
  //js里for和class都是保留字所以用，htmlFor
  //拿到父组件input里设置的内容传来在这里的input的设置内容
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
