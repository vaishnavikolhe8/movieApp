import './Page.css'
export const Page = ({pagination, setPagination}) => {
    let arrPage = [1,2,3,4,5];

  return (
    <div className='pagination'>
    {

        arrPage.map((curEle)=>{
            return <button 
            key={curEle} 
            className={pagination === curEle ? "activePage" : ""}
            onClick={()=>setPagination(Number(curEle))} 
            >{curEle}
         </button>
        })
        
    }
    </div>
  )
}

