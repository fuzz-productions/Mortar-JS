"use strict";var React=require("react"),Row=React.createClass({displayName:"Row",propTypes:{classes:React.PropTypes.string,children:React.PropTypes.oneOfType([React.PropTypes.array,React.PropTypes.object])},determineComponentClasses:function(){return"undefined"!=typeof this.props.classes?this.props.classes:""},render:function(){return React.createElement("div",{className:"row "+this.determineComponentClasses()},this.props.children)}});module.exports=Row;