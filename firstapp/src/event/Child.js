
function Child(props){
    let childData="This data is from child"
    return(
        <div>
            <h2>Child</h2>
            <h3>Data received from parent is <span class="text-primary">{props.parentData}</span></h3>
            <button className="btn btn-info" onClick={()=>props.getDataFromChild(childData)}>send data to parent</button>
        </div>
    )
}
export default Child;