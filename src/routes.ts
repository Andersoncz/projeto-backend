
import {FastifyInstance, FastifyPluginOptions,FastifyRequest, FastifyReply} from "fastify"
import { CreateCustumerController } from "./controllers/CreateCustomerController";


export async function routes(fastify:  FastifyInstance, options:FastifyPluginOptions){
    fastify.get("/teste", async(request:FastifyRequest,reply:FastifyReply)=>{
        return {ok: true}

    })
   
fastify.post("/customer", async (request: FastifyRequest, reply: FastifyReply) =>{
    return new CreateCustumerController().handle(request, reply)


})
}