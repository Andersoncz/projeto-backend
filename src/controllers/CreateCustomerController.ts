import { FastifyRequest, FastifyReply } from "fastify";
import{ CreateCustomerServices} from "../services/CreateCustomerServices"

class CreateCustomerController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const CustomerServices = new CreateCustomerServices()

        const customer = await CustomerServices.execute();

        reply.send(customer)

    }
}
export {CreateCustomerController};