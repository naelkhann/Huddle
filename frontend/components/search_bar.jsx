import React from 'react';
import { connect } from 'react-redux';
import { getGroups } from '../actions/groups_actions';

const mapDispatchToProps = dispatch => ({
  getGroups: (filter) => dispatch(getGroups(filter))
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
    }
  }

  render(){
    return(
      <div className="search">
        <div className="left">
          <input className="search-bar" type="text" placeholder="Huddle or Group Name" value={this.state.name} onChange={this.updateSearch} />
          <i className="fa fa-search fa-lg"></i>
        </div>
        <div className="right">
          <button>Group</button>
          <button>Huddle</button>
        </div>
      </div>
    );
  }
}


export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
