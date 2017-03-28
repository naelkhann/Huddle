import React from 'react';
import { connect } from 'react-redux';
import { getHuddle, createHuddle, deleteHuddle } from '../../actions/huddles_actions';
import { arrayOfMembers } from '../../reducers/selectors';
import { Link } from 'react-router';

const mapStateToProps = (state, ownProps) => ({
  huddle: state.huddle,
  members: arrayOfMembers(state)
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

  renderMembers(){
    const members = this.props.members.map((member, idx) => (
      <div key={idx} className="member-container">
        <img src={member.image}/>
        <h4>{member.name}</h4>
      </div>
    ));

    return members;
  }

  renderRSVP(huddle){
    if(!huddle.past){
      return (
        <div>
          <h2>Are you going?</h2>
          <div className="huddle-members-btn-container">
            <a className="huddle-members-btn" href="#">Yes</a>
            <a className="huddle-members-btn" href="#">No</a>
          </div>
        </div>
      )
    }
  }

  render(){
    const huddle = this.props.huddle ? this.props.huddle : {};
    const group = this.props.huddle.group ? this.props.huddle.group : {};
    const groupId = this.props.huddle.group ? this.props.huddle.group.id : "";
    const members = this.props.huddle.group ? this.props.huddle.group.members.length : "";
    const groupHuddles = this.props.huddle.group ? this.props.huddle.group.huddles_count : "";
    const groupOrganizerImage = this.props.huddle.group ? this.props.huddle.group.moderator.image : "";
    const groupOrganizerName = this.props.huddle.group ? this.props.huddle.group.moderator.name : "";
    const locationForMap = this.props.huddle.location ? this.props.huddle.location.split(" ").join("+") : "";
    const huddlePast = this.props.huddle ? this.props.huddle.past : undefined;
    return(
      <div className="huddle-main-container">
        <div className="huddle-container">
          <h1 className="title">{huddle.title}</h1>
          <div className="day-time-container">
            <i className="fa fa-clock-o fa-lg"></i>
            <div className="day-time-inner">
              <h2 className="day">{huddle.day}</h2>
              <h3 className="time">{huddle.time}</h3>
            </div>
          </div>
          <div className="location-container">
            <i className="fa fa-map-marker fa-lg"></i>
            <div className="location-inner">
              <h2 className="location">{huddle.location}</h2>
            </div>
          </div>

          <div className="location-map">
            <iframe width="500px"
              height="200px" frameBorder="0"
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBHSs5p1AoablGxtk1aJxuT-XgtBXmovTM&q=${locationForMap}`}
              allowFullScreen>
            </iframe>
          </div>

          <h3 className="description">{huddle.description}</h3>
        </div>

        <div className="huddle-members-container">
          {this.renderRSVP(huddle)}
          <div className="huddle-members-inner">
            <h2>{huddle.num_members} {huddle.past ? "went" : "going"}</h2>
          </div>
          {this.renderMembers()}
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Huddle);
