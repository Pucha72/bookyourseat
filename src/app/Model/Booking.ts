
export interface IBooking
{
       id :number,
       employeeId :number,
       associatenumber :string,
       dateOfVisit  :Date,
       seatId  :number,
       seatpath  :string,
       locationId?:number,
       location :string,
       city :string,
       eligibleForModification?:boolean,
       status?:boolean
}


export class Booking
{ 
    constructor(
        booking:IBooking
    )
    {

    }
}

 