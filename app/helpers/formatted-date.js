import Ember from 'ember';

import { formatDate } from '../utils/date-helpers';

export default Ember.HTMLBars.makeBoundHelper(function(input) {
  return formatDate(input[0], input[1]);
});
