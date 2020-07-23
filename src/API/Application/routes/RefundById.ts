import { Double } from "typeorm";

interface RefundsById {
    RefundId: number,
    EventType: number,
    Amount: number | Double,
    PaymentMethodId: string, 

  }
  
  export default RefundsById;