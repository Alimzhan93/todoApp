import React from "react";
import style from './Loader.module.css'

export const Loader = () => {
  return (
    <div class={style['lds-roller']}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
export default Loader