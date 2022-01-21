// var storedUser = localStorage.getItem("aeUser")

// const INITIAL_STATE = {
//   username: storedUser  ? JSON.parse(storedUser)["emailAddress"]: "",
//   password: "",
//   loggedIn: storedUser  ? true : false,
//   uid: storedUser ? JSON.parse(storedUser)["applicationUserId"] : -1,
// };

const INITIAL_STATE = {
  username: "",
  password: "",
  loggedIn: false,
  uid: -1,
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TRY_LOGIN":
      return {
        ...state,
        username: action.payload["username"],
        password: action.payload["password"],
      };

    case "SUCCESSFUL_LOGIN":
      localStorage.setItem("aeUser", JSON.stringify(action.payload))
      return {
        ...state,
        loggedIn: true,
        uid: action.payload["applicationUserId"],
        username: action.payload["emailAddress"] 
      };

    case "FAILED_LOGIN":
      return { ...state, password: "", loggedIn: false };

    case "LOG_OUT":
      localStorage.removeItem("aeUser");
      return {
        username: "",
        password: "",
        loggedIn: false,
        uid: -1,
      }

    default:
      return state;
  }
};

export default loginReducer;