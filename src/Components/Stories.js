
import { useGloabalContext } from '../Context'

const Stories = () => {

  const { hits, isLoading, removePost} = useGloabalContext()


  if (isLoading) {
    return (
      <>
        <div className='loder_center'>
          <div className='loader'></div>
        </div>
        <h4 className='circle_loder'>Loading....</h4>
      </>
    )
  }

  return (
    <>
      {
        hits.map((curElem, ind) => {
          const { title, url, author, objectID, num_comments } = curElem;
          return (
            <div className='col-lg-8 col-md-8 col-12' key={ind}>
              <div className='card p-3 mb-5 card_tech'>
                <h4>{title}</h4>
                <p>By:- <span className='pr-2'><b>{author.toUpperCase()}</b></span>  |  <span className='pl-2'>{num_comments}</span> Comments.</p>
                <div className='row justify-content-between px-3'>
                  <a href={url} target={'blank'} className="float-left"><b>Read More..</b></a>
                  <a href="#"onClick={() => removePost(objectID)} className='nav-link py-0 float-right remove_btn'><b>Remove</b></a>
                </div>
              </div>
            </div>
          )
        })
      }
    </>
  )
}

export default Stories