import { request, gql } from 'graphql-request'
async function getUserOrders(id) {
    const MASTER_URL = 'https://api-ap-south-1.hygraph.com/v2/clsj4vqoa000008l18w0o8mis/master';
    const query = gql`
    query getuserOrders {
        orders(where: {customerId: "`+id+`"}, orderBy: date_DESC) {
          date
          orderItems {
            product {
              images {
                url
              }
              price
              id
              name
            }
            total
          }
          total
          id
          address
          delivered
        }
      }
      
    `
    const res = await request(MASTER_URL,query)
    return res
}

export default { getUserOrders }