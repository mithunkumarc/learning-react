#### index.html

      <div id="root"></div>

#### index.js
          import React, { Component } from 'react';
          import { render } from 'react-dom';

          class ShoppingList extends React.Component {
            render() {
              return (
                <div>
                shopping at {this.props.shop}
                <ul>
                <li>ice</li>
                <li>sugar</li>
                <li>toast</li>
                </ul>
                </div>
              )
            }
          }


          render(<ShoppingList shop="dMart"/>, document.getElementById('root'));
