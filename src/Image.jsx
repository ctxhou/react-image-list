var React = require('react');
var Image = React.createClass({

  getDefaultProps: function() {
    return {
      defautImgGrid: 'col col-4 px2 py2',
      defautImgClass: 'imageList__img'
    }
  },

  getInitialState: function() {
    return {
      imgGrid: this.props.imgGrid || this.props.defautImgGrid,
      imgClass: this.props.imgClass || this.props.defautImgClass,
      data: this.props.data
    }
  },

  componentWillReceiveProps: function(nextProps) {
    if (nextProps.data !== this.state.data) {
      this.setState({data: nextProps.data })
    }
  },

  handleClick: function() {
    this.props.handleClick(this.state.data);
  },

  render: function() {
    return (
      <div className={this.state.imgGrid}
            onClick={this.handleClick}>
        <div className={this.state.imgClass}>
          <img src={this.state.data.url}/>
        </div>
      </div>
    )
  }

});

module.exports = Image;