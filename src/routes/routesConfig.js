import PeoplePage from "@containers/PeoplePage";
import HomePage from "@containers/HomePage";
import NotFoundPage from "@containers/NotFoundPage";
import PersonPage from "@containers/PersonPage";

import { useRoutes } from "react-router";


function PP() {
    let element = useRoutes([
        {
            path: '/',
            exact: true,
            element: <HomePage/>
        },
        {
            path: '/people',
            exact: true,
            element: <PeoplePage/>
        },
        {
            path: '/people/:id',
            exact: true,
            element: <PersonPage/>
        },
        {
            path: '*',
            exact: false,
            element: <NotFoundPage/>
        }
    ]);
}
export default PP;