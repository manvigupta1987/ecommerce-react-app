import React, {Profiler} from 'react' 
import Directory from '../../components/directory/director.component'
// import './homepage.styles.scss'
import {HomePageContaniner} from './homepage.styles'

const HomePage = (props) => {
  return(
    <HomePageContaniner>
      <Profiler id="directory-profiler" onRender={(id, phase, actualDuration) => 
        console.log({ id, phase, actualDuration})}>
        <Directory />
      </Profiler>
    </HomePageContaniner>
  );
}

export default HomePage;