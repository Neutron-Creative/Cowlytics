"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
const fastify_1 = __importDefault(require("fastify"));
dotenv.config();
let port = process.env.PORT || 8080;
const server = fastify_1.default({});
const opts = {
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
server.get("/ping", opts, (_request, reply) => {
    console.log(reply.raw);
    reply.code(200).send({ pong: "it worked!" });
});
server.listen(port, (err, address) => {
    if (err)
        console.log(err);
    if (address)
        console.log(address);
    console.log('Moo!');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBSUEsK0NBQWlDO0FBQ2pDLHNEQUEwRTtBQVMxRSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFaEIsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDO0FBU3BDLE1BQU0sTUFBTSxHQUlSLGlCQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7QUFFaEIsTUFBTSxJQUFJLEdBQTBCO0lBQ2xDLE1BQU0sRUFBRTtRQUNOLFFBQVEsRUFBRTtZQUNSLEdBQUcsRUFBRTtnQkFDSCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxVQUFVLEVBQUU7b0JBQ1YsSUFBSSxFQUFFO3dCQUNKLElBQUksRUFBRSxRQUFRO3FCQUNmO2lCQUNGO2FBQ0Y7U0FDRjtLQUNGO0NBQ0YsQ0FBQztBQUVGLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsRUFBRTtJQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2QixLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0FBQy9DLENBQUMsQ0FBQyxDQUFDO0FBS0gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFRLEVBQUUsT0FBWSxFQUFFLEVBQUU7SUFDM0MsSUFBRyxHQUFHO1FBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QixJQUFHLE9BQU87UUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDeEIsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogUmVxdWlyZWQgRXh0ZXJuYWwgTW9kdWxlc1xyXG4gKi9cclxuXHJcbmltcG9ydCAqIGFzIGRvdGVudiBmcm9tIFwiZG90ZW52XCI7XHJcbmltcG9ydCBmYXN0aWZ5LCB7IEZhc3RpZnlJbnN0YW5jZSwgUm91dGVTaG9ydGhhbmRPcHRpb25zIH0gZnJvbSBcImZhc3RpZnlcIjtcclxuaW1wb3J0IHsgU2VydmVyLCBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcclxuXHJcblxyXG4vKipcclxuICogQXBwIFZhcmlhYmxlc1xyXG4gKi9cclxuXHJcbi8vIEltb3J0IGVudiB2YXJpYWJsZXMgZnJvbSBsb2NhbCBjb25maWcgaWYgcHJlc2VudFxyXG5kb3RlbnYuY29uZmlnKCk7XHJcblxyXG5sZXQgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgODA4MDtcclxuXHJcbi8qKlxyXG4gKiAgQXBwIENvbmZpZ3VyYXRpb25cclxuICovXHJcblxyXG4vLyBDcmVhdGUgYSBodHRwIHNlcnZlci4gV2UgcGFzcyB0aGUgcmVsZXZhbnQgdHlwaW5ncyBmb3Igb3VyIGh0dHAgdmVyc2lvbiB1c2VkLlxyXG4vLyBCeSBwYXNzaW5nIHR5cGVzIHdlIGdldCBjb3JyZWN0bHkgdHlwZWQgYWNjZXNzIHRvIHRoZSB1bmRlcmx5aW5nIGh0dHAgb2JqZWN0cyBpbiByb3V0ZXMuXHJcbi8vIElmIHVzaW5nIGh0dHAyIHdlJ2QgcGFzcyA8aHR0cDIuSHR0cDJTZXJ2ZXIsIGh0dHAyLkh0dHAyU2VydmVyUmVxdWVzdCwgaHR0cDIuSHR0cDJTZXJ2ZXJSZXNwb25zZT5cclxuY29uc3Qgc2VydmVyOiBGYXN0aWZ5SW5zdGFuY2U8XHJcbiAgU2VydmVyLFxyXG4gIEluY29taW5nTWVzc2FnZSxcclxuICBTZXJ2ZXJSZXNwb25zZVxyXG4+ID0gZmFzdGlmeSh7fSk7XHJcblxyXG5jb25zdCBvcHRzOiBSb3V0ZVNob3J0aGFuZE9wdGlvbnMgPSB7XHJcbiAgc2NoZW1hOiB7XHJcbiAgICByZXNwb25zZToge1xyXG4gICAgICAyMDA6IHtcclxuICAgICAgICB0eXBlOiBcIm9iamVjdFwiLFxyXG4gICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgIHBvbmc6IHtcclxuICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbnNlcnZlci5nZXQoXCIvcGluZ1wiLCBvcHRzLCAoX3JlcXVlc3QsIHJlcGx5KSA9PiB7XHJcbiAgY29uc29sZS5sb2cocmVwbHkucmF3KTsgLy8gdGhpcyBpcyB0aGUgaHR0cC5TZXJ2ZXJSZXNwb25zZSB3aXRoIGNvcnJlY3QgdHlwaW5ncyFcclxuICByZXBseS5jb2RlKDIwMCkuc2VuZCh7IHBvbmc6IFwiaXQgd29ya2VkIVwiIH0pO1xyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBTZXJ2ZXIgQWN0aXZhdGlvblxyXG4gKi9cclxuc2VydmVyLmxpc3Rlbihwb3J0LCAoZXJyOiBhbnksIGFkZHJlc3M6IGFueSkgPT4ge1xyXG4gICAgaWYoZXJyKSBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgaWYoYWRkcmVzcykgY29uc29sZS5sb2coYWRkcmVzcyk7XHJcbiAgICBjb25zb2xlLmxvZygnTW9vIScpO1xyXG59KTsiXX0=