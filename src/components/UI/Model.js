import classes from "./Module.module.css";
import { Fragment } from "react";
import ReactDom from "react-dom";

//遮罩层
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

//模态框样式
const ModelOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}> {props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById("overlays");

const Model = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop onClick={props.onClose} />,
        portalElement
      )}
      {ReactDom.createPortal(
        <ModelOverlay>{props.children}</ModelOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Model;
