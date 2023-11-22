import { useNavigate } from "react-router-dom"

const Protected = ({children}) => {
     const navigate = useNavigate()
     const result = localStorage.getItem("accessToken")
     return <>
          {result?children:("/")}
     </>
}
export default Protected

