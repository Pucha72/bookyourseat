export interface IEmployee
{
    id?:number
    associateNumber:string 
    name:string
    role:string
}


export class Employee
{ 
    constructor(
        employee:IEmployee
    )
    {

    }
}

