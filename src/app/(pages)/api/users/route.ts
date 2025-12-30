import { NextResponse } from "next/server"
// prisma ==> database client import
export async function GET() {
const users ={
    message: "Users retrieved successfully",
 users:[
        
    {id: 111, name: 'John Doe'},
    {id: 121, email: 'LbO7o@example.com'},
    {id: 131, password: 'password123'},
    {id: '69345a5891d1a7c95fd94905'}
]}
return NextResponse.json(users)
    
}