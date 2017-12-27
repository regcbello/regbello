import Ember from 'ember'

export function to_mmddyyyy(params) {
  return moment(params[0]).format('MM/DD/YYYY');
}

export default Ember.Helper.helper(to_mmddyyyy)
