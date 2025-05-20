/* eslint-disable no-unused-vars */
import {
  Avatar,
  Badge,
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import Cookies from "js-cookie";
import PropTypes from "prop-types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import ava from "../../assets/ava_place.png";
import logo from "../../assets/logo_vang.png";
import { KEY, ROUTE_PAGE } from "../../constants";
import { setLoginState } from "../../store/slices/loginStateSlice";
import { coursesRoute, informationRoute } from "../../utils/routes";
import LoginDialog from "./LoginDialog";

Header.propTypes = {
  onOpen: PropTypes.func.isRequired,
};

function Header({ onOpen }) {
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-12">
      <Menu allowHover>
        <MenuHandler>
          <p className="p-1 capitalize text-white xl:text-lg lg:text-base font-semibold cursor-pointer">
            Giới thiệu
          </p>
        </MenuHandler>
        <MenuList className="p-0 bg-custom-green border-0 rounded-none">
          {informationRoute.map((val, index) => {
            const className = `py-4 px-5 rounded-none text-white ${
              index === 1 ? "" : "border-b border-white"
            }`;
            return (
              <MenuItem key={index} className={className}>
                <a
                  className="xl:text-base lg:text-sm font-semibold"
                  href={val.path}
                >
                  {val.name}
                </a>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
      <Menu allowHover>
        <MenuHandler>
          <p className="p-1 capitalize text-white xl:text-lg lg:text-base font-semibold cursor-pointer">
            Sản phẩm
          </p>
        </MenuHandler>
        <MenuList className="p-0 bg-custom-green border-0 rounded-none">
          {coursesRoute.map((val, index) => {
            const className = `py-4 px-5 rounded-none text-white ${
              index === 2 ? "" : "border-b border-white"
            }`;
            return (
              <MenuItem key={index} className={className}>
                <a
                  href={val.path}
                  className="capitalize xl:text-base lg:text-sm font-semibold"
                >
                  {val.name}
                </a>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
      <p className="p-1 capitalize text-white xl:text-lg lg:text-base font-semibold">
        <NavLink to={ROUTE_PAGE.ARTICLE_PAGE} className="flex items-center">
          Bài viết
        </NavLink>
      </p>
      <p className="p-1 capitalize text-white xl:text-lg lg:text-base font-semibold">
        <NavLink href="#" className="flex items-center">
          Liên hệ
        </NavLink>
      </p>
    </ul>
  );

  const [isAuthenticated, setIsAuthenticated] = React.useState(null);
  const [active, setActive] = React.useState(false);
  const [openLogin, setOpenLogin] = React.useState(false);
  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);
  const loginStatus = useSelector((state) => state.loginState.value);
  const dispatch = useDispatch();

  React.useEffect(() => {
    setIsAuthenticated(loginStatus);
  }, [loginStatus]);

  const logout = () => {
    Cookies.remove(KEY.ACCESS_TOKEN);
    Cookies.remove(KEY.REFRESH_TOKEN);
    dispatch(setLoginState(false));
  };

  return (
    <div className="sticky top-0 z-10 h-max max-w-full rounded-none lg:px-16 md:px-8 px-4 py-6 bg-custom-green">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link>
          <img
            className="sm:w-32 w-24 h-auto object-cover object-center"
            src={logo}
            alt="nature image"
          />
        </Link>
        <div className="flex items-center gap-6">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="flex items-center gap-x-4">
            <Badge content="1" className="bg-yellow text-black font-bold">
              <IconButton variant="text" className="rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                  fill="#e8eaed"
                  className="h-6 w-6"
                >
                  <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
                </svg>
              </IconButton>
            </Badge>
            {isAuthenticated ? (
              <Button
                className="rounded-full px-4 py-1 bg-yellow"
                onClick={() => {
                  logout();
                }}
              >
                <Avatar src={ava} size="sm" />
              </Button>
            ) : (
              <Button
                className={`rounded-full normal-case xl:text-lg sm:text-base text-sm px-3 py-1 max-w-40 w-40 transition-all duration-300 ${
                  active
                    ? "bg-transparent text-yellow border-2 border-yellow"
                    : "bg-yellow text-black border-2 border-yellow"
                }`}
                onMouseEnter={() => setActive(true)}
                onMouseLeave={() => setActive(false)}
                onMouseDown={() => setActive(true)}
                onMouseUp={() => setActive(false)}
                onBlur={() => setActive(false)}
                onClick={() => {
                  setActive(true);
                  handleOpenLogin();
                }}
              >
                {active ? "Giá trị cốt lõi" : "Đăng Nhập"}
              </Button>
            )}
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={onOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </IconButton>
        </div>
      </div>

      <LoginDialog isOpen={openLogin} onClose={handleCloseLogin} />
    </div>
  );
}

export default Header;
