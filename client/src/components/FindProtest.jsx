import React from 'react';
import Protest from './Protest.jsx';
import _ from 'lodash';
import { HomeIcon } from './StyledComponents.jsx';


class FindProtest extends React.Component {
  render() {
    console.log("FIND PROTEST THIS.PROPS", this.props)
    
    const events = this.props.events.allEvents;
    const attending = this.props.user.events_attending;
    const organizing = this.props.user.events_organizing;
    const notParticipating = _.reject(upcomingEvents, event => {
      return _.includes(attending, parseInt(event)) || _.includes(organizing, parseInt(event));
    });
   
    let upcomingEvents = [];
    for (var event in events) {
      if (events[event].status === 'upcoming' || events[event].status === 'ongoing') {
        upcomingEvents.push(event);
      }
    }

    if (notParticipating.length === 0) {
      return (
        <div>
          <HomeIcon
          className="fa fa-home fa-lg"
          onClick={() => this.props.changeView("DASHBOARD")}
          />
          No upcoming protest, 
          why don't you lead one?
        </div>
      );
    }

    return (
      <div>
        <HomeIcon 
          className="fa fa-home"
          onClick={() => this.props.changeView('DASHBOARD')}
          >
        </HomeIcon>
        <h3>Find a Protest</h3>
        {
          notParticipating.map(protestId => <Protest
            {...this.props}
            key={protestId}
            protestId={protestId}
            protest={events[protestId]}
            role='none'
          />)
        }
      </div>
    );
  }
}

export default FindProtest;
