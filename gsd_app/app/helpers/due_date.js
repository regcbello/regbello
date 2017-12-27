import Ember from 'ember'

export function dueDate(params) {
    return moment(new Date()).to(params[0])
}

export default Ember.Helper.helper(dueDate)
