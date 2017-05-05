/**
 * User.js
 *
 * @author: Cristian Quintero <cristianqr22@gmail.com>
 * @description :: This model represent the Client
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    currency: {
      type: 'string'
    },
    recharge_value: {
      type: 'integer'
    },
    client: {
      model: 'client'
    }
  }
};

