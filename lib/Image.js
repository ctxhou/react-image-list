'use strict';

var React = require('react');
var Image = React.createClass({
  displayName: 'Image',

  getDefaultProps: function getDefaultProps() {
    return {
      defautImgGrid: 'col col-4 px2 py2',
      defautImgClass: 'imageList__img'
    };
  },

  getInitialState: function getInitialState() {
    return {
      imgGrid: this.props.gridClass || this.props.defautImgGrid,
      imgClass: this.props.imgClass || this.props.defautImgClass,
      data: this.props.data
    };
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.state.data) {
      this.setState({ data: nextProps.data });
    }
  },

  handleClick: function handleClick() {
    this.props.handleClick(this.state.data);
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: this.state.imgGrid,
        onClick: this.handleClick },
      React.createElement(
        'div',
        { className: this.state.imgClass },
        React.createElement('img', { src: this.state.data.url })
      )
    );
  }

});

module.exports = Image;