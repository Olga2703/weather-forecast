import React, { Component } from "react";

import "./City.scss";

import Menu from "../Menu/Menu";
import Icons from "../Icons/Icons";

export default class City extends Component {
  render() {
    return (
      <div className='City'>
        <div className='container pt-3'>
          <button className='btn '>
            <Icons name='vector-left' />
          </button>

          <div className='City-Body d-flex flex-column justify-content-center align-items-center pt-4'>
            <span className='City-Title mb-2'>Москва</span>
            <span className='City-SubTitle'>Облачно с прояснениями</span>
            <span className='City-Temperature'>-13&deg;</span>
            <Icons name='moon-сloud-fast-wind' class='City-weather' />
            <div className='d-flex align-items-center mb-5'>
              <Icons name='barometer' class='City-barometr' />
              <span className='City-Pressure'>756 мм рт. ст.</span>
            </div>
            <span className='City-Sunset'>Закат в 18:00</span>
          </div>
        </div>
        <Menu />
      </div>
    );
  }
}
