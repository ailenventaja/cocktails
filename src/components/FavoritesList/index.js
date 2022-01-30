import React from "react";

import NavLinks from "./components/navLink";

export default class FavoriteList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { favorites } = this.props;
    return (
      <div>
        <NavLinks />
        <ul>
          {favorites.map((drink) => {
            return (
              <li key={drink.strDrink}>
                <div>
                  <img className="thumb" alt="" src={drink.strDrinkThumb} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
