// ** React Imports
import { Outlet } from "react-router-dom"

// ** Core Layout Import
// !Do not remove the Layout import
// import Layout from "@layouts/HorizontalLayout"

// ** Menu Items Array
import navigation from "@src/navigation/horizontal"

const HorizontalLayout = (props) => {
  // const [menuData, setMenuData] = useState([])

  // ** For ServerSide navigation
  // useEffect(() => {
  //   axios.get(URL).then(response => setMenuData(response.data))
  // }, [])

  return (
    <div >
    <Layout menuData={navigation} {...props}  >
      <Outlet />
    </Layout>
    </div>
  )
}

export default HorizontalLayout
