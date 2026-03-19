import {CompactTable} from  '@table-library/react-table-library/compact';

export function Records(){
  const items = JSON.parse(localStorage.getItem("1") || "")
  

  return (
    // <CompactTable data={items}/>
    items.map((item: any) => <li key={item.id}>{item.data}</li>)
  )
}