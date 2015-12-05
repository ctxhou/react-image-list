'use strict';

var React = require('react');
var Image = require('./Image');
var style = require('./style');
var ImageList = React.createClass({
  displayName: 'ImageList',

  getDefaultProps: function getDefaultProps() {
    return {
      defautImgWrapper: 'clearfix'
    };
  },

  getInitialState: function getInitialState() {
    return {
      imgWrapper: this.props.imgWrapper || this.props.defautImgWrapper,
      imageData: this.props.imageData
    };
  },

  handleClick: function handleClick(data) {
    if (this.props.handleClickImage) {
      this.props.handleClickImage(data);
    }
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.imageData !== this.state.imageData) {
      this.setState({ imageData: nextProps.imageData });
    }
  },

  render: function render() {
    var that = this;
    var imageList = [];
    this.state.imageData.forEach(function (data) {
      imageList.push(React.createElement(Image, { data: data,
        imgClass: that.props.imgClass,
        imgGrid: that.props.imgGrid,
        handleClick: that.handleClick }));
    });

    return React.createElement(
      'div',
      { className: this.state.imgWrapper },
      imageList
    );
  }

});

module.exports = ImageList;