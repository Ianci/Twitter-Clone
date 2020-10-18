import React from 'react';
import { Timeline } from 'react-twitter-widgets'

const TweetWidget = () => {
    return ( 
            <Timeline
              dataSource={{ sourceType: "profile", screenName: "mariiagreco" }}
              options={{ theme: "dark", width: "300", height: "600", margin: "10px" }}
            />
          );
     
    }
 
export default TweetWidget;