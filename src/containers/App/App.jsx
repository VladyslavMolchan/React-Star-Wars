import cn from 'classnames';
import styles from './App.module.css';
import PeoplePage from "../PeoplePage";
const App = () => {
  return (
      <div>
        <h1 className={cn(styles.header, styles.text)}>Hello</h1>
        <PeoplePage/>
      </div>
  )
}

export default App;
