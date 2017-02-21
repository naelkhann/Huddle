import React from 'react';
import { connect } from 'react-redux';
import { getGroup } from '../../actions/groups_actions';


const mapStateToProps = (state, ownProps) => ({
  group: state.group
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getGroup: (group) => dispatch(getGroup(group))
});

class Group extends React.Component {

  componentDidMount(){
    this.props.getGroup(this.props.params.groupId);
  }

  render(){
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
              <a className="group-header-join-btn" href="#">Join us!</a>
            </ul>
          </nav>
        </div>

        <div className="group-information-container">
          <div className="group-info">
            <div className="image">Group logo</div>
          </div>

          <div className="group-description-container">
            <h4 className="description">{this.props.group.description}</h4>

            <ul className="huddles-nav">
              <li className="active">Upcoming</li>
              <li>Past</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Group);
