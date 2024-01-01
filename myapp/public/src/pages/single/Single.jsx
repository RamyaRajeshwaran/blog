import Singlepost from "../../components/singlePost/Singlepost";
import Sidebar from "../../sidebar/Sidebar";
import "./single.css"

export default function Single() {
  return (
    <div className="single">
       <Singlepost />
      <Sidebar />
     
    </div>
  )
}
