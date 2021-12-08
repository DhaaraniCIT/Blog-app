import '../App.css';
import Header from './header';

function First() {
  return (
    <div>
        <Header></Header>
        <div className=" container-fluid first">
            <div className="content">
                <h1>You have thought<br/> Add your thoughts here</h1>
                <a href="#posts"><button type="button" className="btn btn-light"><b>Add thoughts</b></button></a>
            </div>
        </div>
    </div>
  );
}

export default First;