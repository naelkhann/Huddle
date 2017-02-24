import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router';
import { getCategories, getCategory } from '../../actions/categories_actions';
import { arrayOfCategories } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  categories: arrayOfCategories(state),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getCategories: () => dispatch(getCategories())
});

class CategoriesIndex extends React.Component {
  componentDidMount(){
    this.props.getCategories();
  }

  renderSignUpOnCover(){
    if(!this.props.currentUser){
      return(
        <Link to="/register" className="categories-video-cover-btn">Sign Up</Link>
      );
    }
  }

  render(){
    const categoriesNames = this.props.categories.map((cat, idx) => (
      <div key={idx} className="category-container">
        <Link to={`/categories/${cat.id}`} className="categories-link">
        <div className="category-image-container">
          <img className="image" src={cat.thumb} />
        </div>
        </Link>
        <h3 className="categories-names">
            {cat.name}
        </h3>
      </div>
    ));
    return (
      <div>
        <div className="categories-video-cover">
          <h1>Find others who love what you love.</h1>
          {this.renderSignUpOnCover()}
        </div>
        <div className="categories-video-container">
          <video autoPlay loop muted width="100%" poster="https://s3.amazonaws.com/huddle-application-dev/static_video/videoposter.png">
            <source src="https://s3.amazonaws.com/huddle-application-dev/static_video/video.mp4"
              type="video/mp4" />
            Your browser does not support the video embedded here
          </video>
        </div>
        <div className="main-container-categories">
          <h1 className="categories-heading">Explore</h1>
          <div className="categories-container">
          {categoriesNames}
          </div>
        </div>
      </div>
    );
  }
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesIndex);
