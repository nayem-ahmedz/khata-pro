import { Link } from "react-router";

export default function NoPage(){
    return(
        <section>
            <h1>404 - Page Not Found</h1>
            <Link to='/'>Back Home</Link>
        </section>
    );
}