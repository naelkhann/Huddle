import React from 'react';
import { connect } from 'react-redux';
import { getHuddle, createHuddle, deleteHuddle } from '../../actions/huddles_actions';

const mapStateToProps = (state, ownProps) => ({
  huddle: state.huddle,
  group: state.huddle.group
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getHuddle: (id) => dispatch(getHuddle(id)),
  getGroup: (group) => dispatch(getGroup(group))
});

class Huddle extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getHuddle(this.props.params.huddleId);
  }

  render(){
    const huddle = this.props.huddle ? this.props.huddle : {};
    const group = this.props.group ? this.props.group : {};
    return(
      <div>
        <div className="group-header">
          <div className="group-header-name-container">
            <h1 className="group-header-name">{group.name}</h1>
          </div>
          <nav className="group-header-nav">
            <ul>
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#">Huddles</a></li>
              <li><a href="#">Members</a></li>
              <li><a href="#">Photos</a></li>
              <li><a href="#">More</a></li>
            </ul>
            <ul>
              <a className="group-header-join-btn" href="#">Join us!</a>
            </ul>
          </nav>
        </div>

        <div className="group-information-container">
          <div className="group-info">
            <div className="image">Group logo</div>
            <h3 className="location">Location</h3>
            <p className="num-huddles">Num of Members</p>
            <p className="num-members">Upcoming Huddles:</p>
            <h3 className="organizer">Organizer:</h3>
            <div className="organizer-container">
              <img/>
              <h4></h4>
            </div>

          </div>

          <div className="huddle-description-container">
            <h1 className="title">{huddle.title}</h1>
            <h4 className="description">{huddle.description}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Huddle);
