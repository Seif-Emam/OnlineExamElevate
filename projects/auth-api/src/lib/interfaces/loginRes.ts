export interface LoginRes{
 message:string,
 token:string,
 userEmail:string






}


export interface LoginAPIRes{

    message:string,
    token:string,
    user:{
        _id:string,
        username:string,
        firstname:string,
        lastname:string,
        email:string,
        phone:string,
        role:string,
        isVerified:boolean,
        createdAt:string


    }

}