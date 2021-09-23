import React, { Component } from "react";

import { map } from "underscore";
import { Link } from "react-router-dom";

import "./List.scss";

import Menu from "../Menu/Menu";
import Header from "../Header/Header";

const LIST_CITYES = [
  { title: "Москва", href: "/moscow", time: "21:35", temperature: "-13" },
  { title: "Париж", href: "/paris", time: "21:35", temperature: "-10" },
  { title: "Лондон", href: "/london", time: "21:35", temperature: "-27" },
  { title: "Нью-Йорк", href: "/newYork", time: "21:35", temperature: "20" },
  { title: "Пекин", href: "/beijing", time: "21:35", temperature: "30" },
  { title: "Токио", href: "/tokyo", time: "21:35", temperature: "15" },
];

export default class List extends Component {
  render() {
    return (
      <div className='List'>
        <div className='container'>
          <Header />
          <div className='container'>
            <div className='List-Body row'>
              {map(LIST_CITYES, ({ title, href, time, temperature }) => (
                <div className='List-item col-lg-4 mb-3 me-3 pt-2 pb-2'>
                  <Link
                    className='List-item-link d-flex justify-content-between align-items-center'
                    to={href}
                  >
                    <div className='d-flex flex-column'>
                      <span className='List-item-time'>{time}</span>
                      <span className='List-item-title'>{title}</span>
                    </div>
                    <span className='List-item-temp'>{temperature}&deg;</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Menu />
      </div>
    );
  }
}
