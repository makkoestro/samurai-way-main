import React from "react";
import {StoreType} from "./redux/store";
// type childrenType = {
//     children:any
// }
const StoreContext = React.createContext({} as StoreType)
export default StoreContext