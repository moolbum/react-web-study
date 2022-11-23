import Error from "../components/pages/Error";
import Login from "../components/pages/Login";
import Main from "../components/pages/Main";
import MyPage from "../components/pages/MyPage";
import { MAIN_PATH, LOGIN_PATH, ERROR_PATH, MYPAGE_PATH } from "./constants";

export const PUBLIC_PATH = [
  {
    path: MAIN_PATH,
    element: <Main />,
  },
  {
    path: LOGIN_PATH,
    element: <Login />,
  },

  {
    path: ERROR_PATH,
    element: <Error />,
  },
];

export const PRIVATE_ROUTES = [
  {
    path: MYPAGE_PATH,
    element: <MyPage />,
  },
];
