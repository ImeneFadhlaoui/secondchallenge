import TagButton from "./TagButton"
export default function Post({postName = "no Title", postBody="no body"}) {
  return (
    <div style={{padding: "10px", border: "solid #1d9bf0 5px", margin: "25px" }}>
      <h2>{postName}</h2>
      <hr />
      <p>{postBody}</p>
      <TagButton titlebtn="click here" />
    </div>
  )
}

