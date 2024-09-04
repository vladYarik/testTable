export interface IUser{
    id:number
    firstName:string
    lastName:string
    phone:string
    birthDate:string
}
export interface IGetUsersRes{
  
        users:IUser[]
        limit:number
        skip:number
        total:number
    
}
export interface IGetUsersReq{
    limit:number
    skip:number
}