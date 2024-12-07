import '../Topic1.css';

function Topic1(){
  return (
    <div className ="App">
      <Job salary={10000} position="Senior SDE" company="Google"/>
      <Job salary={20000} position="Junior SDE" company="Amazon"/>
      <Job salary={30000} position="Project Head" company="Rupay"/>
    </div>
  );
}

const Job = (props) =>{
  return(
    <div>
      <h1>{props.salary}</h1>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1>
    </div>
  );
}

export default Topic1;
