import { Template } from 'meteor/templating';
 
import './body.html';
 
Template.body.helpers({
  tasks: [
    { text: 'Meetup Events' },
    { text: 'List of Attendees' },
    { text: 'Attendees Background' },
  ],
});