import prismaClient from "../prisma";

class CreateCustomerServices{
    async execute(){
        console.log('rotafoi')

        return { ok: true}
    }
}
export{ CreateCustomerServices};