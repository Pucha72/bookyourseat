
export interface IBooking
{
       id :number,
       employeeId :number,
       associatenumber :string,
       dateOfVisit  :Date,
       seatId  :string,
       seatpath  :string,
       location :string,
       city :string
}


export class Booking
{ 
    constructor(
        booking:IBooking
    )
    {

    }
}

 