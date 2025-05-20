/* eslint-disable no-unused-vars */
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Dialog,
  DialogBody,
  DialogHeader,
  IconButton,
  Input,
  Typography,
} from "@material-tailwind/react";
import Cookies from "js-cookie";
import { useSnackbar } from "notistack";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import authenticationAPI from "../../api/authenticationApi";
import { KEY } from "../../constants";
import { setLoginState } from "../../store/slices/loginStateSlice";

LoginDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

function LoginDialog({ isOpen, onClose }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const [isSubmit, setIsSubmit] = React.useState(false);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    const request = {
      username: data.username,
      password: data.password,
    };
    setIsSubmit(true);
    try {
      const res = await authenticationAPI.login(request);
      enqueueSnackbar("Đăng nhập thành công!", {
        variant: "success",
        autoHideDuration: 3000,
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
      setIsSubmit(false);
      onClose();
      dispatch(setLoginState(true));
      Cookies.set(KEY.ACCESS_TOKEN, res.data.accessToken, {
        secure: true,
        sameSite: "strict",
      });
      Cookies.set(KEY.REFRESH_TOKEN, res.data.refreshToken, {
        secure: true,
        sameSite: "strict",
      });
      setActive(false);
    } catch (error) {
      onClose();
      enqueueSnackbar("Tên đăng nhập hoặc mật khẩu không đúng!", {
        variant: "error",
        autoHideDuration: 3000,
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
      enqueueSnackbar("Vui lòng thử lại!", {
        variant: "warning",
        autoHideDuration: 3000,
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
      setIsSubmit(false);
    }
  };

  return (
    <Dialog
      handler={onClose}
      dismiss={{ outsidePress: false }}
      open={isOpen}
      size="xs"
      className="md:p-6 p-4 rounded-3xl"
    >
      <DialogHeader className="relative m-0 block">
        <h2 className="md:text-3xl text-2xl text-black capitalize">
          Đăng nhập
        </h2>
        <IconButton
          size="sm"
          variant="text"
          className="!absolute right-3.5 top-3.5"
          onClick={() => {
            onClose();
          }}
          disabled={isSubmit}
        >
          <XMarkIcon className="h-4 w-4 stroke-2" />
        </IconButton>
      </DialogHeader>
      <DialogBody className="py-0">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-2">
              <span className="text-base text-black font-medium">
                Tên người dùng
              </span>
              <Input
                type="text"
                size="lg"
                {...register("username", {
                  required: "Vui lòng nhập tên đăng nhập",
                })}
                error={!!errors.username}
                className="!border-2 !border-black bg-white text-gray-900 ring-4 ring-transparent"
                labelProps={{
                  className: "hidden",
                }}
              />
              {errors.username && (
                <Typography color="red" className="text-xs mt-1 italic">
                  {errors.username.message}
                </Typography>
              )}
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="text-base text-black font-medium">Mật khẩu</span>
              <div className="relative flex">
                <Input
                  labelProps={{
                    className: "hidden",
                  }}
                  type={showPassword ? "text" : "password"}
                  size="lg"
                  {...register("password", {
                    required: "Vui lòng nhập mật khẩu",
                  })}
                  error={!!errors.password}
                  className="!border-2 !border-black bg-white text-gray-900 ring-4 ring-transparent"
                />
                <IconButton
                  variant="text"
                  color="blue-gray"
                  size="sm"
                  onClick={toggleShowPassword}
                  className="!absolute right-2 top-[6px] rounded"
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  )}
                </IconButton>
              </div>
              {errors.username && (
                <Typography color="red" className="text-xs mt-1 italic">
                  {errors.username.message}
                </Typography>
              )}
            </div>
            <div className="flex items-center justify-between h-16">
              <Button
                className={`rounded-full normal-case xl:text-lg sm:text-xs text-[10px] px-3 py-1 max-w-80 xl:w-64 lg:w-48 md:w-48 sm:w-32 transition-all duration-300 ${
                  active
                    ? "bg-transparent text-yellow border-2 border-yellow"
                    : "bg-yellow text-black"
                }`}
                onMouseEnter={() => setActive(true)}
                onMouseLeave={() => setActive(false)}
                onMouseDown={() => setActive(true)}
                onMouseUp={() => setActive(false)}
                onBlur={() => setActive(false)}
                onClick={() => {
                  setActive(true);
                }}
                loading={isSubmit}
                type="submit"
              >
                {active ? "Giá trị cốt lõi" : "Đăng Nhập"}
              </Button>
              <Button
                className="bg-gray-400 rounded-full normal-case xl:text-lg sm:text-xs text-[10px] px-3 py-1 text-black"
                disabled={isSubmit}
              >
                Quên mật khẩu
              </Button>
            </div>
          </div>
        </form>
      </DialogBody>
    </Dialog>
  );
}

export default LoginDialog;
