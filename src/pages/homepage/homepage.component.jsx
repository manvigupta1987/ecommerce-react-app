import React from 'react' 
import Directory from '../../components/directory/director.component'
// import './homepage.styles.scss'
import {HomePageContaniner} from './homepage.styles'

const HomePage = (props) => {
  return(
    <HomePageContaniner>
      <Directory />
    </HomePageContaniner>
  );
}

export default HomePage;