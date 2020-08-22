import React, { Component } from "react";

export default class Result extends Component {
  render() {
    return (
      <div>
        <table>
          <tr>
            <th>Q.no</th>
            <th>Correct</th>
            <th>Your Answer</th>
          </tr>
          <tr>
            <td>2.</td>
            <td>a</td>
            <td>b</td>
          </tr>
          <tr>
            <td>3.</td>
            <td>b</td>
            <td>c</td>
          </tr>
          <tr>
            <td>4.</td>
            <td>e</td>
            <td>d</td>
          </tr>
          <tr>
            <td>5.</td>
            <td>c</td>
            <td>b</td>
          </tr>
          <tr>
            <td>7.</td>
            <td>d</td>
            <td>a</td>
          </tr>
        </table>
      </div>
    );
  }
}
