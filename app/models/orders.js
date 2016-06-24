'use strict';

var Types = require('joi');

module.exports = function (server) {
    const 
        harvesterPlugin = server.plugins['hapi-harvester'],
        schema = {
            type: 'orders',
            attributes: {
                total: Types.number().forbidden(),
                created_on: Types.date().forbidden(),
                update_on: Types.date().forbidden(),
                status: Types.valid(['new', 'processed', 'delivered', 'invoiced']).forbidden(),
                items: Types.array().items(Types.object({
                    product_id: Types.string().guid().required(),
                    quantity: Types.number().integer().min(1).required(),
                    price: Types.number().forbidden()    
                })).required().min(1)
            }
        }

    harvesterPlugin.routes.all(schema).forEach(function (route) {
        server.route(route)
    })
}
