import react, {useState} from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import './index.css'
import Listcomp from "./Listcomp";

const Todolist = () => {

const [item,setitem] = useState("");
const [newitem,setnewitem] = useState([]);

const itemevent = (event) => {
    setitem(event.target.value);
}

const sub = () => {
    setnewitem((olditems) => {
        return [...olditems,item];
    })
    setitem("");
}

    return (
        <>
            <div className="maindiv">
                <div className="center_div">
                    <br />
                    <h1>Todo List</h1> 
                    <br />
                    <input type="text" value={item} placeholder={"Enter an Item..."} onChange={itemevent} />
                    <Button onClick={sub} className="newbtn"><AddIcon  /></Button>
                    <br /><br />
                    <ol>
                        {newitem.map((val,index) => {
                            return <Listcomp key={index} text={val}/>;
                        })}
                    </ol>
                    <br />
                </div>
            </div>
        </>
    );
}

export default Todolist;