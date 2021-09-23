import React, { Component } from "react";

import "./Information.scss";

import Menu from "../Menu/Menu";
import Header from "../Header/Header";

export default class Information extends Component {
  render() {
    return (
      <div className='Info'>
        <div className='container Info-Body'>
          <Header />
          <p className='Info-text'>
            Это красивое и функциональное приложение отображает прогноз погоды.
            Вы можете узнавать текущую температуру, почасовой прогноз на
            следующие 24 часа и прогноз на 10 дней в разных точках мира.
          </p>
          <p className='Info-title'>Возможности:</p>
          <p className='Info-subtitle d-flex'>
            <span className='Info-point'>&bull;</span>
            <span>
              Текущие погодные условия отображаются в виде анимации в фоновом
              режиме.
            </span>
          </p>
          <p className='Info-subtitle d-flex'>
            <span className='Info-point'>&bull;</span>
            <span>
              Просматривайте прогноз на следующие 24 часа или 10 дней, в том
              числе вероятность осадков.
            </span>
          </p>
          <p className='Info-subtitle d-flex'>
            <span className='Info-point'>&bull;</span>
            <span>
              Вероятность и прогнозируемая интенсивность осадков в ближайший час
              отображаются в поминутной таблице.*
            </span>
          </p>
          <p className='Info-subtitle d-flex'>
            <span className='Info-point'>&bull;</span>
            <span>
              Получайте официальные оповещения об экстремальных погодных
              условиях, таких как ураганы, снежные бури или наводнения.*
            </span>
          </p>
          <p className='Info-subtitle d-flex'>
            <span className='Info-point'>&bull;</span>
            <span>
              Для крупных городов можно отображать цветовую шкалу, показывающую
              индекс качества воздуха.*
            </span>
          </p>
          <p className='Info-subtitle d-flex'>
            <span className='Info-point'>&bull;</span>
            <span>
              Сохраняйте места в своем списке, а затем переключайтесь между ними
              смахиванием или сведите пальцы для просмотра всего списка.
            </span>
          </p>
        </div>
        <Menu />
      </div>
    );
  }
}
