import PeoplePage from "@containers/PeoplePage";
import HomePage from "@containers/HomePage";

import { useRoutes } from "react-router";

function PP() {
    let element = useRoutes([
        {
            path: '/',
            element: <HomePage/>
        },
        {
            path: '/people',
            element: <PeoplePage/>
        }
    ]);
}
export default PP;