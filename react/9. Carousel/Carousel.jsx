import React from 'react';
import cn from 'classnames';
import uniqueId from 'lodash/uniqueId';

// BEGIN (write your solution here)
export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    const { images } = this.props;
    this.state = {
      activeIndex: 0,
      images: images.map((url) => ({ url, key: uniqueId() })),
    };
  }

  handlePrevClick = () => {
    const newIndex = this.state.activeIndex - 1 === -1 ? 2 : this.state.activeIndex - 1;
    this.setState(() => ({ activeIndex: newIndex }))
  };

  handleNextClick = () => {
    const newIndex = this.state.activeIndex + 1 === 3 ? 0 : this.state.activeIndex + 1;
    this.setState(() => ({ activeIndex: newIndex }))
  }

  renderItems() {
    const { activeIndex, images } = this.state;
    console.log('rendeerItems()', activeIndex)
    return images.map(( { url, key }, id) => {
      const classes = cn({
        'carousel-item': true,
        active: activeIndex === id,
      });

      return (
        <div key={key} className={classes}>
          <img alt="" className="d-block w-100" src={url} />
        </div>
        )
    })
  }

  render() {
    const { images } = this.props;
    console.log('_', images);

    return (
      <div id="carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {this.renderItems()}
        </div>
        <button onClick={this.handlePrevClick} className="carousel-control-prev" data-bs-target="#carousel" type="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button onClick={this.handleNextClick} className="carousel-control-next" data-bs-target="#carousel" type="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
}
// END

