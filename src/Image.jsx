var React = require('react');
var Image = React.createClass({

  getDefaultProps: function() {
    return {
      defautImgGrid: 'col col-3 px2 py2',
      defautImgClass: 'imageList__img'
    }
  },

  getInitialState: function() {
    return {
      imgGrid: this.props.imgGrid || this.props.defautImgGrid,
      imgClass: this.props.imgClass || this.props.defautImgClass
    }
  },

  handleClick: function() {
    this.props.handleClick(this.props.data);
  },

  render: function() {
    return (
      <div className={this.state.imgGrid}
            onClick={this.handleClick}>
        <div className={this.state.imgClass}>
          <img src={this.props.data.url}/>
        </div>
      </div>
    )
  }

});

module.exports = Image;