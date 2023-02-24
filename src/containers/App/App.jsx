import routesConfig from '@routes/routesConfig';
import PeoplePage from "@containers/PeoplePage";
import HomePage from "@containers/HomePage";
import Header from "@components/Header";
import NotFoundPage from "@containers/NotFoundPage";
import PersonPage from "@containers/PersonPage";
import FavoritesPage from "@containers/FavoritesPage";
import SearchPage from "@containers/SearchPage";


import cn from 'classnames';
import styles from './App.module.css';
import {useRoutes} from "react-router";


const App = () => {

    let element = useRoutes([
        {
            path: '/',
            element: <HomePage/>
        },
        {
            path: '/people',
            element: <PeoplePage/>
        },
        {
            path: '/people/:id',
            exact: true,
            element: <PersonPage/>
        },
        {
            path: '/favorites',
            exact: true,
            element: <FavoritesPage/>
        },
        {
            path: '/search',
            exact: true,
            element: <SearchPage/>
        },
        {
            path: '/not-found',
            exact: true,
            element: <NotFoundPage/>
        },
        {
            path: '*',
            exact: false,
            element: <NotFoundPage/>
        },

    ]);

    return (
      <div className={styles.wrapper}>
          <Header />
          {element}



        {/*  <NavLink  to="/" >Home</NavLink>*/}
        {/*  <NavLink  to="/people" >People</NavLink>*/}

        {/*  <Routes>*/}
        {/*    <Route path ='/' exact element ={<HomePage />} />*/}
        {/*      <Route path ='/people' exact element ={<PeoplePage  />} />*/}
        {/*  </Routes>*/}



        {/*<h1 className={cn(styles.header, styles.text)}>Hello</h1>*/}

      </div>
  )
}

export default App;
