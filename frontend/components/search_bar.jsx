import React from 'react';
import { connect } from 'react-redux';
import { getGroups } from '../actions/groups_actions';
import { arrayOfGroups, arrayOfFilteredHuddles } from '../reducers/selectors';
import { getHuddles } from '../actions/huddles_actions';
import GroupItem from './groups/group_item';
import HuddleItem from './huddles/huddle_item';

const mapStateToProps = state => ({
  groups: arrayOfGroups(state),
  huddles: arrayOfFilteredHuddles(state)
});

const mapDispatchToProps = dispatch => ({
  getGroups: (filter) => dispatch(getGroups(filter)),
  getHuddles: (filter) => dispatch(getHuddles(filter))
});

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      toggle: "groups"
    };
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(e) {
    this.setState({name: e.target.value});
    if(this.state.toggle === "groups"){
      this.props.getGroups(e.target.value);
    } else {
      this.props.getHuddles(e.target.value);
    }
  }

  renderGroups(){
    if(this.props.groups){
      return(
        this.props.groups.map((group, idx) => <GroupItem key={idx} group={group}/>)
      );
    }
  }

  renderHuddles(){
    if(this.props.huddles){
      return(
        this.props.huddles.map((huddle, idx) => <HuddleItem key={idx} huddle={huddle}/>)
      );
    }
  }

  renderGroupOrHuddleDashboard(){
    if(this.state.toggle === "groups"){
      return(
        <div className="dashboard-groups-container">
          {this.renderGroups()}
        </div>
      )
    } else {
      return (
        <div className="dashboard-huddles-container">
          {this.renderHuddles()}
        </div>
      )
    }
  }

  render(){
    return(
      <div>
        <div className="search">
          <div className="left">
            <input className="search-bar" type="text" placeholder="Huddle or Group Name" value={this.state.name} onChange={this.updateSearch} />
            <i className="fa fa-search fa-lg"></i>
          </div>
          <div className="right">
            <button className={this.state.toggle === "groups" ? "on" : ""} onClick={()=> this.setState({toggle: "groups"})}>Group</button>
            <button className={this.state.toggle === "huddles" ? "on" : ""} onClick={()=> this.setState({toggle: "huddles"})}>Huddles</button>
          </div>
        </div>
        {this.renderGroupOrHuddleDashboard()}
      </div>
    );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
