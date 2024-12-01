import { Close, Failed, Fire, Success, Warning } from "./toast-icons";

export const toast_type = {
  success: <Success />,
  streak: <Fire />,
  failed: <Failed />,
  warning: <Warning />,
  close: <Close />,
};

export enum ToastEnum {
  SUCCESS = "SUCCESS",
  STREAK = "STREAK",
  FAILED = "FAILED",
  WARNING = "WARNING",
  CLOSE = "CLOSE",
}
