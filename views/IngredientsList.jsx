var React = require('react');
import React, { Component } from 'react';

class IngredientsList extends React.Component {
  render() {
    return (
      <div>
          <ul>
              -{this.props.list.name}<span> </span>
              {this.props.list.amount}<span> </span>
              {this.props.list.notes}<span> </span>
          </ul>
      </div>
    );
  }
}

module.exports = IngredientsList;