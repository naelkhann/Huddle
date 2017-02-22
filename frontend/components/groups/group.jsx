import React from 'react';
import { connect } from 'react-redux';
import { getGroup } from '../../actions/groups_actions';
import { createGroupsUser, deleteGroupsUser } from '../../actions/groups_users_actions';
import { arrayOfHuddles } from '../../reducers/selectors';
import { Link, withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  let isMember;
  let userId;
  const group = state.group;
  const huddles = arrayOfHuddles(state);
  if(state.session.currentUser){
    userId = state.session.currentUser.id;
    isMember = group.is_user_a_member;
  } else {
    userId = null;
    isMember = null;
  }
  return {
    group,
    huddles,
    userId,
    isMember
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getGroup: (group) => dispatch(getGroup(group)),
  createGroupsUser: (groups_user) => dispatch(createGroupsUser(groups_user)),
  deleteGroupsUser: (id) => dispatch(deleteGroupsUser(id))
});

class Group extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      active_li: "Upcoming"
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.joinGroupToggle = this.joinGroupToggle.bind(this);
  }

  componentDidMount(){
    this.props.getGroup(this.props.params.groupId);
  }

  toggleNav(e) {
    this.setState({active_li: e.target.innerHTML});
  }

  joinGroupToggle(e){
    e.preventDefault();
    if(this.props.userId){
      if(this.props.isMember){
        this.props.deleteGroupsUser(this.props.group.id).then(res => console.log(res));
      } else {
        const membership = {group_id: this.props.group.id, user_id: this.props.userId};
        this.props.createGroupsUser(membership).then(res => console.log(res));
      }
    } else {
      this.props.router.push('/register');
    }
  }

  getDaysTilHuddle(day){
    const dayInMs = 1000*60*60*24;
    return Math.ceil((new Date(day).getTime() - new Date().getTime())/(dayInMs));
  }

  renderHuddles(){
    const huddles = this.props.huddles;
    const huddlesContainers = huddles.map((huddle, idx) => (
      <div key={idx} className="group-huddle-container">
        <h2 className="huddle-title">{huddle.title}</h2>
        <div className="group-huddle-detail-container">
          <div className="group-huddle-detail-left">
            <h3 className="huddle-location">{huddle.location}</h3>
            <h3 className="huddle-description">{huddle.description}</h3>
          </div>
          <div className="group-huddle-detail-right">
            <h3 className="huddle-date">{huddle.day}</h3>
            <h3 className="huddle-time">{huddle.time}</h3>
            <h3 className="huddle-time">{`${this.getDaysTilHuddle(huddle.date)} days left`}</h3>
            <Link to={`huddles/${huddle.id}`}>RSVP</Link>
          </div>
        </div>
      </div>
    ));
    return huddlesContainers;
  }

  render(){
    const numHuddles = this.props.huddles ? this.props.huddles.length : "";
    const numMembers = this.props.group.members ? this.props.group.members.length : "";
    const organizerImage = this.props.group.moderator ? this.props.group.moderator.image : "";
    const organizerName = this.props.group.moderator ? this.props.group.moderator.name : "";
    return(
      <div>
        <div className="group-header">
          <div className="group-header-name-container">
            <h1 className="group-header-name">{this.props.group.name}</h1>
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
              <button className="group-header-join-btn" onClick={this.joinGroupToggle}>{this.props.isMember ? "Already" : "Join Us"}</button>
            </ul>
          </nav>
        </div>

        <div className="group-information-container">
          <div className="group-info">
            <div className="image">Group logo</div>
            <h3 className="location">Location</h3>
            <p className="num-huddles">Members: {numMembers}</p>
            <p className="num-members">Upcoming Huddles: {numHuddles}</p>
            <h3 className="organizer">Organizer:</h3>
            <div className="organizer-container">
              <img src={organizerImage}/>
              <h4>{organizerName}</h4>
            </div>

          </div>

          <div className="group-description-container">
            <h4 className="description">{this.props.group.description}</h4>

            <ul className="huddles-nav">
              <li onClick={this.toggleNav}
                className={this.state.active_li === "Upcoming" ? "active" : "disabled"}>
                Upcoming
              </li>
              <li onClick={this.toggleNav}
                className={this.state.active_li === "Past" ? "active" : "disabled"}>
                Past
              </li>
            </ul>

            {this.renderHuddles()}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Group));
