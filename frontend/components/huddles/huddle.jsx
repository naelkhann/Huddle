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

  render(){
    const huddle = this.props.huddle ? this.props.huddle : {};
    const group = this.props.huddle.group ? this.props.huddle.group : {};
    const groupId = this.props.huddle.group ? this.props.huddle.group.id : "";
    const members = this.props.huddle.group ? this.props.huddle.group.members.length : "";
    const groupHuddles = this.props.huddle.group ? this.props.huddle.group.huddles_count : "";
    const groupOrganizerImage = this.props.huddle.group ? this.props.huddle.group.moderator.image : "";
    const groupOrganizerName = this.props.huddle.group ? this.props.huddle.group.moderator.name : "";

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
              <Link to={`/groups/${groupId}`} className="group-header-join-btn">Join us!</Link>
            </ul>
          </nav>
        </div>

        <div className="group-information-container">
          <div className="group-info">
            <div className="image">Group logo</div>
            <h3 className="location">Location</h3>
            <p className="num-huddles">Members: {members}</p>
            <p className="num-members">Upcoming Huddles: {groupHuddles}</p>
            <h3 className="organizer">Organizer:</h3>
            <div className="organizer-container">
              <img src={groupOrganizerImage}/>
              <h4>{groupOrganizerName}</h4>
            </div>

          </div>

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

            <h3 className="description">{huddle.description}</h3>
          </div>

          <div className="huddle-members-container">
            <h2>Are you going?</h2>
            <div className="huddle-members-btn-container">
              <a className="huddle-members-btn" href="#">Yes</a>
              <a className="huddle-members-btn" href="#">No</a>
            </div>
            <div className="huddle-members-inner">
              <h2>{huddle.num_members} going</h2>
            </div>
            {this.renderMembers()}
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
