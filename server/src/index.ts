/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import fastify, { FastifyInstance, RouteShorthandOptions } from "fastify";
import { Server, IncomingMessage, ServerResponse } from 'http'


/**
 * App Variables
 */

// Imort env variables from local config if present
dotenv.config();

let port = process.env.PORT || 8080;

/**
 *  App Configuration
 */

// Create a http server. We pass the relevant typings for our http version used.
// By passing types we get correctly typed access to the underlying http objects in routes.
// If using http2 we'd pass <http2.Http2Server, http2.Http2ServerRequest, http2.Http2ServerResponse>
const server: FastifyInstance<
  Server,
  IncomingMessage,
  ServerResponse
> = fastify({});

const opts: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          pong: {
            type: "string",
          },
        },
      },
    },
  },
};

server.get('/', opts, (_request, reply) => {
  reply.code(200).send('Howdy partner!')
});

server.get("/ping", opts, (_request, reply) => {
  //console.log(reply.raw); // this is the http.ServerResponse with correct typings!
  reply.code(200).send({ pong: "it worked!" });
});

/**
 * Server Activation
 */
server.listen(port, (err: any, address: any) => {
    if(err) console.log(err);
    if(address) console.log(address);
    console.log('Moo!');
});