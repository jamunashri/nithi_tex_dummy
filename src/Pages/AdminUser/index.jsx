import "./index.scss"
import { Sidebar, Navbar, Datatable } from '../../Admin/index'

const AdminUser = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default AdminUser