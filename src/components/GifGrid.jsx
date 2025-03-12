import { useFetchGifts } from '../hooks/useFetchGifts';
import { GifItem } from './GifItem';


// eslint-disable-next-line react/prop-types
export const GifGrid = ({ category, onDeleteCategory }) => {
  const { images, isLoading, deleteImages } = useFetchGifts(category);

  return (
    <>
      <div key={category}>
        <h2 className='title-categories'>
          {category}

          <span id='space-button'>

            <button
              id={category}
              type="button"
              onClick={onDeleteCategory}
            >
            </button>

          </span>

        </h2>

        {
          isLoading && <h2> Cargando ... </h2>
        }

        <div className='card-grid'>
          {
            images.map(({ id, title, url }) => (
              <GifItem
                key={id}
                id={id}
                title={title}
                url={url}
                onDeleteImages={deleteImages}

              >
              </GifItem>
            ))
          }
        </div>
      </div>
    </>
  )
}
