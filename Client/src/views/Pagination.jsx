
import PropTypes  from 'prop-types';


const Pagination = ({pageNumber, setPageNumber, totalItem, parPage, showItem}) => {
  let totalPage = Math.ceil(totalItem / parPage)
  let startPage = pageNumber

  let dif = totalPage-pageNumber
  if(dif < showItem){
    startPage = totalPage - showItem
  }
  let endPage = startPage < 0 ? showItem : showItem + startPage

  if(startPage <= 0){
    startPage = 1
  }

  const createButton =() => {
    const btn = []
    for(let i = startPage; i <= endPage; i++){
      btn.push(
        <li key={i} onClick={() => setPageNumber(i)}  className={`cursor-pointer w-[33px] h-[33px] flex justify-center items-center rounded-full ${pageNumber === i ? "bg-purple-500 hover:bg-purple-600 text-[#ffffff]" : "bg-[#ffffff] shadow-md"}`}>
          {i}
        </li>
      )
    }
    return btn

  }

  return (
    <ul className="flex gap-3 justify-end py-2">
      {
        pageNumber > 1 && <li onClick={() => setPageNumber(pageNumber-1)} className="cursor-pointer w-[33px] h-[33px] flex justify-center items-center pl-2  text-white hover:bg-purple-700 rounded-full bg-purple-900 shadow-md">
          <span className="material-symbols-rounded">arrow_back_ios</span>
          </li>
      }{
        createButton()
      }
    </ul>
  )
}

Pagination.PropTypes = {
  pageNumber: PropTypes.number.isRequired,
  setPageNumber: PropTypes.func.isRequired,
  totalItem: PropTypes.number.isRequired,
  parPage: PropTypes.number.isRequired,
  showItem: PropTypes.number.isRequired
}

export default Pagination