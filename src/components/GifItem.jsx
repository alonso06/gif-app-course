// eslint-disable-next-line react/prop-types
export const GifItem = ({id, title, url, onDeleteImages}) => {
    return (
    <div className="card">
        
        <button
          id={id}
          type="button"
          onClick = { onDeleteImages }
          >Eliminar
          
        </button>
        
        <div>
          <img src={url} alt={title} />
          <p>{title}</p>
        </div>
    </div>
  )
}
