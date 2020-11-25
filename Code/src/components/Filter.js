import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <div className="filter-result">{this.props.count} Products</div>
                <div className="filter-sort">Order{" "}<select className="but" value={this.props.sort} onChange={this.props.sortProducts}>
                    <option>All</option>
                    <option value="lowest">lowest</option>
                    <option value="highest">highest</option>
                </select></div>
                <div className="type">Type{" "}<select className="but" value={this.props.type} onChange={this.props.typeFilter}>
                    <option value="">All</option>
                    <option value="Bug ">Bug</option>
                    <option value="Dark ">Dark</option>
                    <option value="Dragon ">Dragon</option>
                    <option value="Electric ">Electric</option>
                    <option value="Fire ">Fire</option>
                    <option value="Fairy ">Fairy</option>
                    <option value="Flying ">Flying</option>
                    <option value="Grass ">Grass</option>
                    <option value="Ice ">Ice</option>
                    <option value="Poison ">Poison</option>
                    <option value="Psychic ">Psychic</option>
                    <option value="Water ">Water</option>
                </select></div>
                <div className="evolution">Evolution{" "}<select className="but"value={this.props.evolution} onChange={this.props.evolutionFilter}>
                    <option value="">All</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select></div>
            </div>
        );
    }
}
