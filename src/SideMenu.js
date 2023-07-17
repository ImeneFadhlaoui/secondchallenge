import TagButton from "./TagButton"
export default  function SideMenu() {
  return (
    <div style={{ margin: "25px", border: "solid #1d9bf0 5px"}}>
      <TagButton title= "Programming" >
        <img style={{width:"270px"}} src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60" alt="prog" />
      </TagButton>
      <TagButton title="Data Science" >
        <div>
          <img style={{width:"280px"}} src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGV2ZWxvcGVyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="img"/>
        </div>
         </TagButton>
      <TagButton title="Technology" >
        <img style={{width:"250px"}} src="https://images.unsplash.com/photo-1455165814004-1126a7199f9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60" alt="tech" />
      </TagButton>
      <TagButton title="Self Improvement" >
        <img style={{width: "180px"}} src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VsZiUyMGltcHJvdm1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60" alt="self" />
        </TagButton>      
    
    
    </div>
  )
}

