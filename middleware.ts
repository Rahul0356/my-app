import withAuth from "next-auth/middleware";
import { NextResponse } from "next/server";



export default withAuth(
    function middleware(){
        return NextResponse.next()
    },
    {
        callbacks:{
            authorized:({token,req})=>{
                const {pathname} =req.nextUrl;

                // Allow the request if the user is authenticated
                if(
                pathname.startsWith("/api/auth") ||
                pathname === "/login" ||
                pathname === "/register"
                ) {
            return true

                }
                //public
                if(pathname === "/"  || pathname.startsWith("/api/video")){
                    return true;
                }

                return !!token
        }
    }
}

)
export const config = {
    matcher: ["/((?!_next/static|_next/image|facicon.ico|public/).*)"],
    };