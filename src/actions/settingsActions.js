import {
  DISABLE_BALANCE_ON_ADD,
  DISABLE_BALANCE_ON_EDIT,
  ALLOW_REGISTRATION
} from "../actions/types";

export const setDisableBalanceOnAdd = () => {
  const settings = JSON.parse(localStorage.getItem("settings"));

  //   Toggle the settings
  settings.disableBalanceOnAdd = !settings.disableBalanceOnAdd;

  //   Set in local storage
  localStorage.setItem("settings", JSON.stringify(settings));
  return {
    type: DISABLE_BALANCE_ON_ADD,
    payload: settings.disableBalanceOnAdd
  };
};

export const setDisableBalanceOnEdit = () => {
  const settings = JSON.parse(localStorage.getItem("settings"));

  //   Toggle the settings
  settings.disableBalanceOnEdit = !settings.disableBalanceOnEdit;

  //   Set in local storage
  localStorage.setItem("settings", JSON.stringify(settings));
  return {
    type: DISABLE_BALANCE_ON_EDIT,
    payload: settings.disableBalanceOnEdit
  };
};
export const setAllowRegistration = () => {
  const settings = JSON.parse(localStorage.getItem("settings"));

  //   Toggle the settings
  settings.allowRegistration = !settings.allowRegistration;

  //   Set in local storage
  localStorage.setItem("settings", JSON.stringify(settings));
  return {
    type: ALLOW_REGISTRATION,
    payload: settings.allowRegistration
  };
};
