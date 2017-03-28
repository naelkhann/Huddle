import React from 'react';
import { connect } from 'react-redux';
import { getGroup } from '../../actions/groups_actions';
import { createGroupsUser, deleteGroupsUser } from '../../actions/groups_users_actions';
import { arrayOfHuddles, arrayOfUpcomingHuddles, arrayOfPastHuddles, arrayOfGroupMembers } from '../../reducers/selectors';
import { Link, withRouter } from 'react-router';
import GroupMembers from './group_members';
import LoadingIcon from '../loading_icon';

const mapStateToProps = (state, ownProps) => {
  let isMember;
  let userId;
  let isModerator;
  const group = state.group;
  const huddles = arrayOfHuddles(state);
  const upcoming = arrayOfUpcomingHuddles(state);
  const past = arrayOfPastHuddles(state);
  const groupMembers = arrayOfGroupMembers(state);
  const loading = state.loading.loading;
  if(state.session.currentUser){
    userId = state.session.currentUser.id;
    isMember = group.is_user_a_member;
    isModerator = group.is_user_a_moderator;
  } else {
    userId = null;
    isMember = null;
    isModerator = null;
  }
  return {
    group,
    groupMembers,
    huddles,
    upcoming,
    past,
    userId,
    isMember,
    isModerator,
    loading
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getGroup: (group) => dispatch(getGroup(group)),
  createGroupsUser: (groupsUser) => dispatch(createGroupsUser(groupsUser)),
  deleteGroupsUser: (id) => dispatch(deleteGroupsUser(id))
});

class Group extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      active_li: "Upcoming",
      active_notifications: false,
      notifications: []
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
      if(this.props.isModerator) {
        this.setState({active_notifications: true, notifications: ["You are the moderator, you cannot leave the group. Delete group via settings."]});
        setTimeout(() => {
          this.setState({active_notifications: false, notifications: []})
        }, 3000)
      }
      else if(this.props.isMember){
        this.props.deleteGroupsUser(this.props.group.id).then(
          () => this.props.getGroup(this.props.params.groupId));
      }
      else {
        const membership = {group_id: this.props.group.id, user_id: this.props.userId};
        this.props.createGroupsUser(membership).then(() => this.props.getGroup(this.props.params.groupId));
      }
    } else {
      this.props.router.push('/login');
    }
  }

  getDaysTilHuddle(day){
    const dayInMs = 1000*60*60*24;
    return Math.ceil((new Date(day).getTime() - new Date().getTime())/(dayInMs));
  }

  renderNotification(){
    if (this.state.notifications.length){
      return (
        <div className={this.state.active_notifications ? "notification-area-active" : "notification-area"}>
          <h3>{this.state.notifications}</h3>
        </div>
      )
    } else {
      return undefined
    }
  }

  renderCreatHuddleBtn(){
    if(this.props.isModerator){
      return (
        <Link to={`groups/${this.props.group.id}/huddles/new`}
          className="create-huddle-btn">Create A Huddle</Link>
      );
    }
  }

  renderGroupDescription(){
    if(!this.props.children) {
      return (
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
      );
    } else {
      return this.props.children;
    }
  }

  renderHuddles(){
    const activeLi = this.state.active_li;
    const huddles = this.props.huddles;
    const upcomingHuddles = this.props.upcoming;
    const pastHuddles = this.props.past;
    let huddlesContainers;
    if (activeLi === "Upcoming") {
      huddlesContainers = upcomingHuddles.map((huddle, idx) => (
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
              <Link to={`/groups/${this.props.group.id}/huddles/${huddle.id}`}>RSVP</Link>
            </div>
          </div>
        </div>
      ));

    } else if(activeLi === "Past") {
      huddlesContainers = pastHuddles.map((huddle, idx) => (
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
              <h3 className="huddle-time">{`${Math.abs(this.getDaysTilHuddle(huddle.date))} days past`}</h3>
              <Link to={`/groups/${this.props.group.id}/huddles/${huddle.id}`}>See Who Went</Link>
            </div>
          </div>
        </div>
      ));
    }

    if(huddlesContainers.length < 1) {
      return (
        <div className="group-huddle-none-container">
          <i className="fa fa-frown-o fa-3x"></i>
          <h3>There are no planned Huddles at the moment.</h3>
          <h3>Ask your organizer to make one!</h3>
        </div>
      );
    } else {
      return huddlesContainers;
    }
  }

  render(){
    const numHuddles = this.props.huddles ? this.props.huddles.length : "";
    const location = this.props.group.location ? this.props.group.location : "";
    const foundedOn = this.props.group.founded_on ? this.props.group.founded_on : "";
    const numMembers = this.props.groupMembers ? this.props.groupMembers.length : "";
    const organizerImage = this.props.group.moderator ? this.props.group.moderator.image : "";
    const organizerName = this.props.group.moderator ? this.props.group.moderator.name : "";

    return this.props.loading ? <LoadingIcon /> :
      (
      <div>
        {this.renderNotification()}
        <div className="group-header">
          <div className="group-header-name-container">
            <h1 className="group-header-name">{this.props.group.name}</h1>
          </div>
          <nav className="group-header-nav">
            <ul>
              <li className="active"><Link to={`/groups/${this.props.group.id}`}>Home</Link></li>
              <li><Link to={`/groups/${this.props.group.id}`}>Huddles</Link></li>
              <li><Link to ={`/groups/${this.props.group.id}/members`}>Members</Link></li>
              <li><a href="#">Photos</a></li>
              <li><a href="#">More</a></li>
            </ul>
            <ul>
              <button className="group-header-join-btn"
                onClick={this.joinGroupToggle}>{this.props.isMember ? "Leave Group" : "Join Us!"}</button>
            </ul>
          </nav>
        </div>

        <div className="group-information-container">
          <div className="group-info">
            <img className="image" src={this.props.group.image} />
            <h3 className="location">{location}</h3>
            <h3 className="founded_on">Founded On: {foundedOn}</h3>
            <p className="num-huddles">Members: {numMembers}</p>
            <p className="num-members">Upcoming Huddles: {numHuddles}</p>
            <h3 className="organizer">Organizer:</h3>
            <div className="organizer-container">
              <img src={organizerImage}/>
              <h4>{organizerName}</h4>
            </div>
            {this.renderCreatHuddleBtn()}
          </div>

          {this.renderGroupDescription()}
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Group));
