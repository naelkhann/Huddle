import React from 'react';
import { connect } from 'react-redux';
import SearchBar from '../search_bar';
import { arrayOfGroups } from '../../reducers/selectors';
import { getGroups } from '../../actions/groups_actions';
import { getHuddles } from '../../actions/huddles_actions';
import GroupItem from '../groups/group_item';


const mapDispatchToProps = (dispatch, ownProps) => ({
  getGroups: (filter) => dispatch(getGroups(filter)),
  getHuddles: (filter) => dispatch(getHuddles(filter))
});

class UserDashboard extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getGroups();
    this.props.getHuddles();
  }

  renderGroups(){
    if(this.props.groups){
      return(
        this.props.groups.map((group, idx) => <GroupItem key={idx} group={group}/>)
      );
    }
  }

  render(){
    return(
      <div>
        <div className="dashboard-cover">
          <h3 className="dashboard-cover-title">Find a Group or Huddle!</h3>
        </div>
        <SearchBar />
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(UserDashboard);
