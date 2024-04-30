import { Appbar } from "../Components/Appbar";
import { Balance } from "../Components/Balance";
import { Users } from "../Components/User";

export function Dashboard() {
    return (
        <div className="bg-white flex flex-col justify-center">
           <Appbar/>
           <Balance/>
           <Users/>
        </div>

    );
}
