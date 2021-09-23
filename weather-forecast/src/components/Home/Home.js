import React, { Component } from "react";

import { Form } from "reactstrap";
import { map } from "underscore";
import { Link } from "react-router-dom";

import "./Home.scss";

import Menu from "../Menu/Menu";
import Icons from "../Icons/Icons";
import Header from "../Header/Header";
import Search from "../Search/Search";

const SECTIONS = [
  { title: "Москва", href: "/moscow", temperature: "-13", icon: "tornado" },
  {
    title: "Париж",
    href: "/paris",
    temperature: "-10",
    icon: "big-rain-drops",
  },
  {
    title: "Лондон",
    href: "/london",
    temperature: "-27",
    icon: "mid-snow-fast-wind",
  },
  { title: "Нью-Йорк", href: "/newYork", temperature: "20", icon: "zaps" },
  { title: "Пекин", href: "/beijing", temperature: "30", icon: "big-snow" },
  {
    title: "Токио",
    href: "/tokyo",
    temperature: "15",
    icon: "moon-fast-wind",
  },
];

export default class Home extends Component {
  state = {
    filter: {
      cityName: "",
    },
  };

  onChangeFilterField = (name, value) => {
    const { filter } = this.state;

    this.setState({
      filter: { ...filter, ...{ [name]: value } },
    });
  };

  render() {
    const { cityName: cityName } = this.state.filter;

    return (
      <div className='Home'>
        <div className='container'>
          <Header />
          <Form className='Search-form'>
            <Search
              name='City'
              value={cityName}
              placeholder='Укажите город'
              className='Search-filter'
              onChange={this.onChangeFilterField}
            />
          </Form>
          <div className='Home-Body container'>
            <div className='SectionNavigation row'>
              {map(SECTIONS, ({ title, href, temperature, icon }) => (
                <div className='col-lg-4 col-6'>
                  <Link
                    className='SectionNavigation-Item Section d-flex flex-column
                    align-items-center mb-3 pt-2'
                    to={href}
                  >
                    <span className='Section-Title'>{title}</span>
                    <span className='Section-Temperature'>
                      {temperature}&deg;
                    </span>
                    <Icons class='Home-weather' name={icon} />
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
