import "./TagButtonStyle.css"
export default function TagButton({title,children, titlebtn}) {
  return (
      <button className="tagButton">
        {title}
        {children}
        {titlebtn}

        </button>
  
  )
}

