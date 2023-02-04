import routesConfig from '@routes/routesConfig';
import PeoplePage from "@containers/PeoplePage";
import HomePage from "@containers/HomePage";
import Header from "@components/Header";

import { Routes } from "react-router";
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
            element: <PeoplePage/>
        }
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
