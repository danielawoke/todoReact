import '../styling/task.css'
import trash from "../assets/images/trash.png"
import {Image, StyleSheet} from 'react-native';
import trashStyle from '../styling/trash.css'

const styles = StyleSheet.create({
  trashStyle: {
    width: 40,
    height: 40,
    flexDirection:'row', 
    display: 'inline-block',
    margin:'10px',
    filter: 'grayscale(100%)'
  }
});

export default function Task({taskName, checkTask, delTask, ID, check}) {
  // checks if the task has been checked or not. 
  // If its 0 it has not been checked, otherwise it has been checked
  if(check==0){
    return (
      <div>
          <div id="task">
              {/* Check box the user can click on to mark the task a complete. Calls the checkTask function once clicked on */}
              <div id="check" onClick={() => {checkTask(ID)}}>-</div>
              {/* displays the task name. Used an input rather than a div to have infinite horizontal scroll */}
              <input id="name" value={taskName} />
              {/* aligns the trash image to be an inline block by wrapping it in seperate div*/}
              <div style={{display:'inline-block',width:50,height:50, position:'relative', top:"20px"}}>
                {/* trash image rendered with react's Image component, taking style from previously specified styleSheet object, 
                    and deleting the given task when by calling the onClick function. source taken from local file imported
                    from assets*/}
                <Image onClick={() => {delTask(ID)}} style={styles.trashStyle} source={trash}/>
              </div>

          </div>
      </div>
    );
  }else{
    // case where the task has been checked. Logic is repeated from before, but alternative element IDs are used for styling changes, and
    // the checkTask function is removed as the object has already been checked off.
    return (
      <div>
          <div id="task">
              <div id="checkFinsished">-</div>
              <input id="nameFinished" value={taskName} />
              <div style={{display:'inline-block',width:50,height:50, position:'relative', top:"20px"}}>
                <Image onClick={() => {delTask(ID)}} style={styles.trashStyle} source={trash}/>
              </div>
          </div>
      </div>
    );
  }
  
}



