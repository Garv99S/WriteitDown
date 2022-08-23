import react,{useState} from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Listcomp = (props) => {
const [line,setline] = useState(false);

const Cutit = () => {
    setline(true);
}

    return  (
    <div className="todo_style">
    <span onClick={Cutit}><DeleteForeverIcon className='deleteit'/> </span>
    <li style={{textDecoration: line ? 'line-through' : "none"} } className=" hey">{props.text}</li>
    <br />
    </div>
    )
} 

export default Listcomp;