import React from 'react';
import { connect } from 'react-redux';
import { arrayOfGroupMembers } from '../../reducers/selectors';
import { getGroup } from '../../actions/groups_actions';
import { Link, withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  return {
    group: state.group,
    members: arrayOfGroupMembers(state)
  }
}

class GroupMembers extends React.Component {
  constructor(props){
    super(props);
  }

  renderMember(members){
    let memberCards = members.map((member) => (
      <div key={member.id} className="group-member-item">
        <img src={member.image} />
        <h2>{member.name}</h2>
      </div>
    ))
    return memberCards;
  }
  render(){
    const allMembers = this.props.members ? this.props.members : [];
    return (
      <div className="group-members-container">
        <h2 className="group-members-title">Members</h2>
        {this.renderMember(allMembers)}
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  null
)(GroupMembers);
