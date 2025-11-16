import { Outlet } from "react-router";

export default function AuthLayout(){
    return(
        <section>
            <h1>Auth Layout</h1>
            <Outlet />
        </section>
    );
}