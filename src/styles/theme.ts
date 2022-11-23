const colorsTheme = {
  primary_1: "#DCEAFF",
  primary_2: "#B6CFFF",
  primary_3: "#95B6FF",
  primary_4: "#8CAEFF",
  primary_5: "#4E7CFF",
  primary_6_main: "#2559F6",
  primary_7: "#1141D2",
  primary_8: "#022DB7",
  primary_9: "#041885",
  primary_10: "#000052",
  gray_1: "#F8F8F8",
  gray_2: "#F3F4F5",
  gray_3: "#EAEBED",
  gray_4: "#DCDEE0",
  gray_5: "#CBCED0",
  gray_6: "#93999F",
  gray_7: "#777F88",
  gray_8: "#5E656E",
  gray_9: "#464C53",
  gray_10: "#2E3338",
  gray_11: "#16191D",
  gray_12: "#0B0D0F",
  black: "#000000",
  white: "#FFFFFF",
  danger_1: "#FFF7F7",
  danger_2: "#FFD0D7",
  danger_3: "#FF9DA4",
  danger_4: "#FF6168",
  danger_5_main: "#F2434A",
  danger_6: "#D63037",
  warning_1: "#FEF5DB",
  warning_2: "#FEECB8",
  warning_3: "#FDD970",
  warning_4: "#FCC629",
  warning_5_main: "#FBBC05",
  warning_6: "#E0A500",
  success_1: "#E7FBEF",
  success_2: "#BBF4D2",
  success_3: "#84E3AA",
  success_4: "#00CC52",
  success_5_main: "#00AA44",
  success_6: "#008F33",
  info_1: "#E3F0FC",
  info_2: "#C6E0F8",
  info_3: "#8EC1F1",
  info_4: "#55A2EA",
  info_5_main: "#3993E7",
  info_6: "#1B7FDC",
  none: "transparent",
};

type HeadingTypoType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "h7"
  | "h8"
  | "h9"
  | "h10"
  | "h11";
type HeadingMediumTypoType =
  | "hm1"
  | "hm2"
  | "hm3"
  | "hm4"
  | "hm5"
  | "hm6"
  | "hm7"
  | "hm8"
  | "hm9"
  | "hm10"
  | "hm11";
type BodyTypoType =
  | "b1"
  | "b2"
  | "b3"
  | "b4"
  | "b5"
  | "b6"
  | "b7"
  | "b8"
  | "b9";
type ButtonTypoType = "btn1" | "btn2" | "btn3" | "btn4" | "btn5" | "btn6";
type InputTypoType = "input1" | "input2" | "input3";
type LabelTypoType = "label1" | "label2" | "label3";

export type TypoType =
  | HeadingTypoType
  | HeadingMediumTypoType
  | BodyTypoType
  | ButtonTypoType
  | InputTypoType
  | LabelTypoType;

const getTypo = (typo: TypoType) => {
  let fontWeight = "400";
  let fontSize = "16px";
  let lineHeight = "24px";

  switch (typo) {
    case "h1":
      fontWeight = "700";
      fontSize = "28px";
      lineHeight = "40px";
      break;
    case "h2":
      fontWeight = "700";
      fontSize = "24px";
      lineHeight = "34px";
      break;
    case "h3":
      fontWeight = "700";
      fontSize = "22px";
      lineHeight = "30px";
      break;
    case "h4":
      fontWeight = "700";
      fontSize = "20px";
      lineHeight = "28px";
      break;
    case "h5":
      fontWeight = "700";
      fontSize = "18px";
      lineHeight = "26px";
      break;
    case "h6":
      fontWeight = "700";
      fontSize = "17px";
      lineHeight = "24px";
      break;
    case "h7":
      fontWeight = "700";
      fontSize = "16px";
      lineHeight = "22px";
      break;
    case "h8":
      fontWeight = "700";
      fontSize = "15px";
      lineHeight = "20px";
      break;
    case "h9":
      fontWeight = "700";
      fontSize = "14px";
      lineHeight = "20px";
      break;
    case "h10":
      fontWeight = "700";
      fontSize = "13px";
      lineHeight = "18px";
      break;
    case "h11":
      fontWeight = "700";
      fontSize = "12px";
      lineHeight = "16px";
      break;
    case "hm1":
      fontWeight = "500";
      fontSize = "28px";
      lineHeight = "40px";
      break;
    case "hm2":
      fontWeight = "500";
      fontSize = "24px";
      lineHeight = "34px";
      break;
    case "hm3":
      fontWeight = "500";
      fontSize = "22px";
      lineHeight = "30px";
      break;
    case "hm4":
      fontWeight = "500";
      fontSize = "20px";
      lineHeight = "28px";
      break;
    case "hm5":
      fontWeight = "500";
      fontSize = "18px";
      lineHeight = "26px";
      break;
    case "hm6":
      fontWeight = "500";
      fontSize = "17px";
      lineHeight = "24px";
      break;
    case "hm7":
      fontWeight = "500";
      fontSize = "16px";
      lineHeight = "22px";
      break;
    case "hm8":
      fontWeight = "500";
      fontSize = "15px";
      lineHeight = "20px";
      break;
    case "hm9":
      fontWeight = "500";
      fontSize = "14px";
      lineHeight = "20px";
      break;
    case "hm10":
      fontWeight = "500";
      fontSize = "13px";
      lineHeight = "18px";
      break;
    case "hm11":
      fontWeight = "500";
      fontSize = "12px";
      lineHeight = "16px";
      break;
    case "b1":
      fontWeight = "400";
      fontSize = "24px";
      lineHeight = "36px";
      break;
    case "b2":
      fontWeight = "400";
      fontSize = "22px";
      lineHeight = "34px";
      break;
    case "b3":
      fontWeight = "400";
      fontSize = "20px";
      lineHeight = "30px";
      break;
    case "b4":
      fontWeight = "400";
      fontSize = "18px";
      lineHeight = "28px";
      break;
    case "b5":
      fontWeight = "400";
      fontSize = "16px";
      lineHeight = "24px";
      break;
    case "b6":
      fontWeight = "400";
      fontSize = "15px";
      lineHeight = "20px";
      break;
    case "b7":
      fontWeight = "400";
      fontSize = "14px";
      lineHeight = "20px";
      break;
    case "b8":
      fontWeight = "400";
      fontSize = "13px";
      lineHeight = "18px";
      break;
    case "b9":
      fontWeight = "400";
      fontSize = "12px";
      lineHeight = "16px";
      break;
    case "btn1":
      fontWeight = "500";
      fontSize = "18px";
      lineHeight = "26px";
      break;
    case "btn2":
      fontWeight = "500";
      fontSize = "16px";
      lineHeight = "24px";
      break;
    case "btn3":
      fontWeight = "500";
      fontSize = "15px";
      lineHeight = "22px";
      break;
    case "btn4":
      fontWeight = "500";
      fontSize = "14px";
      lineHeight = "20px";
      break;
    case "btn5":
      fontWeight = "500";
      fontSize = "12px";
      lineHeight = "18px";
      break;
    case "btn6":
      fontWeight = "500";
      fontSize = "10px";
      lineHeight = "14px";
      break;
    case "input1":
      fontWeight = "400";
      fontSize = "18px";
      lineHeight = "26px";
      break;
    case "input2":
      fontWeight = "400";
      fontSize = "16px";
      lineHeight = "22px";
      break;
    case "input3":
      fontWeight = "400";
      fontSize = "14px";
      lineHeight = "20px";
      break;
    case "label1":
      fontWeight = "400";
      fontSize = "16px";
      lineHeight = "16px";
      break;
    case "label2":
      fontWeight = "400";
      fontSize = "14px";
      lineHeight = "14px";
      break;
    case "label3":
      fontWeight = "400";
      fontSize = "12px";
      lineHeight = "12px";
      break;
    default:
      break;
  }

  return `font-weight : ${fontWeight}; font-size : ${fontSize}; line-height: ${lineHeight};`;
};

export type ButtonSizeType = "large" | "default" | "small" | "x-small";

const getButtonSizeStyle = (type: ButtonSizeType) => {
  let typoType: TypoType = "btn2";
  let padding = "12px 16px";
  let borderRadius = "10px";

  switch (type) {
    case "large":
      typoType = "btn2";
      padding = "16px 18px";
      borderRadius = "12px";
      break;
    case "default":
      typoType = "btn2";
      padding = "12px 16px";
      borderRadius = "10px";
      break;
    case "small":
      typoType = "btn5";
      padding = "7px 12px";
      borderRadius = "8px";
      break;
    case "x-small":
      typoType = "btn6";
      padding = "6px 10px";
      borderRadius = "7px";
      break;
    default:
      break;
  }

  return `${getTypo(
    typoType
  )} padding: ${padding}; border-radius: ${borderRadius};`;
};

export enum ButtonTypeType {
  PRIMARY = "primary",
  PRIMARY_LIGHT = "primary-light",
  BLACK = "black",
  GRAY = "gray",
  GREEN = "green",
  OPAQUE = "opaque",
  GHOST = "ghost",
  GHOST_BLACK = "ghost-black",
  GHOST_DANGER = "ghost-danger",
  UNDER_LINE = "under-line",
  NO_LINE = "no-line",
}

const getButtonTypeStyle = (type: ButtonTypeType) => {
  const defaultStateStyle = {
    color: colorsTheme.white,
    backgroundColor: colorsTheme.primary_6_main,
    borderColor: colorsTheme.none,
  };
  const hoverStateStyle = {
    color: colorsTheme.white,
    backgroundColor: colorsTheme.primary_5,
    borderColor: colorsTheme.none,
  };
  const pressedStateStyle = {
    color: colorsTheme.white,
    backgroundColor: colorsTheme.primary_7,
    borderColor: colorsTheme.none,
  };
  const disabledStateStyle = {
    color: colorsTheme.white,
    backgroundColor: colorsTheme.gray_4,
    borderColor: colorsTheme.none,
  };

  let underLine = false;

  switch (type) {
    case "primary":
      break;
    case "primary-light":
      defaultStateStyle.color = colorsTheme.primary_6_main;
      defaultStateStyle.backgroundColor = colorsTheme.primary_1;
      hoverStateStyle.color = colorsTheme.primary_4;
      hoverStateStyle.backgroundColor = colorsTheme.primary_1;
      pressedStateStyle.color = colorsTheme.primary_4;
      pressedStateStyle.backgroundColor = colorsTheme.primary_2;
      disabledStateStyle.color = colorsTheme.gray_4;
      disabledStateStyle.backgroundColor = colorsTheme.gray_2;
      break;
    case "black":
      defaultStateStyle.color = colorsTheme.white;
      defaultStateStyle.backgroundColor = colorsTheme.gray_11;
      hoverStateStyle.color = colorsTheme.white;
      hoverStateStyle.backgroundColor = colorsTheme.gray_7;
      pressedStateStyle.color = colorsTheme.white;
      pressedStateStyle.backgroundColor = colorsTheme.gray_12;
      disabledStateStyle.color = colorsTheme.white;
      disabledStateStyle.backgroundColor = colorsTheme.gray_4;
      break;
    case "gray":
      defaultStateStyle.color = colorsTheme.gray_8;
      defaultStateStyle.backgroundColor = colorsTheme.gray_2;
      hoverStateStyle.color = colorsTheme.gray_6;
      hoverStateStyle.backgroundColor = colorsTheme.gray_2;
      pressedStateStyle.color = colorsTheme.gray_6;
      pressedStateStyle.backgroundColor = colorsTheme.gray_3;
      disabledStateStyle.color = colorsTheme.gray_4;
      disabledStateStyle.backgroundColor = colorsTheme.gray_2;
      break;
    case "green":
      defaultStateStyle.color = colorsTheme.success_5_main;
      defaultStateStyle.backgroundColor = colorsTheme.success_1;
      hoverStateStyle.color = colorsTheme.success_5_main;
      hoverStateStyle.backgroundColor = colorsTheme.success_3;
      pressedStateStyle.color = colorsTheme.success_5_main;
      pressedStateStyle.backgroundColor = colorsTheme.success_2;
      disabledStateStyle.color = colorsTheme.gray_4;
      disabledStateStyle.backgroundColor = colorsTheme.gray_2;
      break;
    case "opaque":
      defaultStateStyle.color = colorsTheme.gray_8;
      defaultStateStyle.backgroundColor = colorsTheme.none;
      hoverStateStyle.color = colorsTheme.gray_6;
      hoverStateStyle.backgroundColor = colorsTheme.gray_2;
      pressedStateStyle.color = colorsTheme.gray_6;
      pressedStateStyle.backgroundColor = colorsTheme.gray_3;
      disabledStateStyle.color = colorsTheme.gray_4;
      disabledStateStyle.backgroundColor = colorsTheme.gray_2;
      break;
    case "ghost":
      defaultStateStyle.color = colorsTheme.primary_6_main;
      defaultStateStyle.borderColor = colorsTheme.primary_6_main;
      defaultStateStyle.backgroundColor = colorsTheme.none;
      hoverStateStyle.color = colorsTheme.primary_5;
      hoverStateStyle.borderColor = colorsTheme.primary_5;
      hoverStateStyle.backgroundColor = colorsTheme.none;
      pressedStateStyle.color = colorsTheme.primary_7;
      pressedStateStyle.borderColor = colorsTheme.primary_7;
      pressedStateStyle.backgroundColor = colorsTheme.none;
      disabledStateStyle.color = colorsTheme.gray_4;
      disabledStateStyle.borderColor = colorsTheme.gray_4;
      disabledStateStyle.backgroundColor = colorsTheme.none;
      break;
    case "ghost-black":
      defaultStateStyle.color = colorsTheme.gray_8;
      defaultStateStyle.borderColor = colorsTheme.gray_4;
      defaultStateStyle.backgroundColor = colorsTheme.none;
      hoverStateStyle.color = colorsTheme.gray_6;
      hoverStateStyle.borderColor = colorsTheme.gray_3;
      hoverStateStyle.backgroundColor = colorsTheme.none;
      pressedStateStyle.color = colorsTheme.gray_8;
      pressedStateStyle.borderColor = colorsTheme.gray_11;
      pressedStateStyle.backgroundColor = colorsTheme.none;
      disabledStateStyle.color = colorsTheme.gray_4;
      disabledStateStyle.borderColor = colorsTheme.gray_4;
      disabledStateStyle.backgroundColor = colorsTheme.none;
      break;
    case "ghost-danger":
      defaultStateStyle.color = colorsTheme.danger_5_main;
      defaultStateStyle.borderColor = colorsTheme.danger_5_main;
      defaultStateStyle.backgroundColor = colorsTheme.none;
      hoverStateStyle.color = colorsTheme.danger_4;
      hoverStateStyle.borderColor = colorsTheme.danger_4;
      hoverStateStyle.backgroundColor = colorsTheme.none;
      pressedStateStyle.color = colorsTheme.danger_6;
      pressedStateStyle.borderColor = colorsTheme.danger_6;
      pressedStateStyle.backgroundColor = colorsTheme.none;
      disabledStateStyle.color = colorsTheme.gray_4;
      disabledStateStyle.borderColor = colorsTheme.gray_4;
      disabledStateStyle.backgroundColor = colorsTheme.none;
      break;
    case "under-line":
      defaultStateStyle.color = colorsTheme.gray_11;
      defaultStateStyle.backgroundColor = colorsTheme.none;
      hoverStateStyle.color = colorsTheme.gray_8;
      hoverStateStyle.backgroundColor = colorsTheme.none;
      pressedStateStyle.color = colorsTheme.gray_12;
      pressedStateStyle.backgroundColor = colorsTheme.none;
      disabledStateStyle.color = colorsTheme.gray_4;
      disabledStateStyle.backgroundColor = colorsTheme.none;
      underLine = true;
      break;
    case "no-line":
      defaultStateStyle.color = colorsTheme.gray_11;
      defaultStateStyle.backgroundColor = colorsTheme.none;
      hoverStateStyle.color = colorsTheme.gray_8;
      hoverStateStyle.backgroundColor = colorsTheme.none;
      pressedStateStyle.color = colorsTheme.gray_12;
      pressedStateStyle.backgroundColor = colorsTheme.none;
      disabledStateStyle.color = colorsTheme.gray_4;
      disabledStateStyle.backgroundColor = colorsTheme.none;
      break;
    default:
      break;
  }

  return {
    defaultStateStyle,
    hoverStateStyle,
    pressedStateStyle,
    disabledStateStyle,
    underLine,
  };
};

const theme = {
  common: {
    colors: colorsTheme,
  },
  typo: {
    h1: getTypo("h1"),
    h2: getTypo("h2"),
    h3: getTypo("h3"),
    h4: getTypo("h4"),
    h5: getTypo("h5"),
    h6: getTypo("h6"),
    h7: getTypo("h7"),
    h8: getTypo("h8"),
    h9: getTypo("h9"),
    h10: getTypo("h10"),
    h11: getTypo("h11"),
    hm1: getTypo("hm1"),
    hm2: getTypo("hm2"),
    hm3: getTypo("hm3"),
    hm4: getTypo("hm4"),
    hm5: getTypo("hm5"),
    hm6: getTypo("hm6"),
    hm7: getTypo("hm7"),
    hm8: getTypo("hm8"),
    hm9: getTypo("hm9"),
    hm10: getTypo("hm10"),
    hm11: getTypo("hm11"),
    b1: getTypo("b1"),
    b2: getTypo("b2"),
    b3: getTypo("b3"),
    b4: getTypo("b4"),
    b5: getTypo("b5"),
    b6: getTypo("b6"),
    b7: getTypo("b7"),
    b8: getTypo("b8"),
    b9: getTypo("b9"),
    btn1: getTypo("btn1"),
    btn2: getTypo("btn2"),
    btn3: getTypo("btn3"),
    btn4: getTypo("btn4"),
    btn5: getTypo("btn5"),
    btn6: getTypo("btn6"),
    input1: getTypo("input1"),
    input2: getTypo("input2"),
    input3: getTypo("input3"),
    label1: getTypo("label1"),
    label2: getTypo("label2"),
    label3: getTypo("label3"),
  },
  button: {
    size: {
      large: getButtonSizeStyle("large"),
      default: getButtonSizeStyle("default"),
      small: getButtonSizeStyle("small"),
      "x-small": getButtonSizeStyle("x-small"),
    },
    buttonType: {
      primary: getButtonTypeStyle(ButtonTypeType.PRIMARY),
      "primary-light": getButtonTypeStyle(ButtonTypeType.PRIMARY_LIGHT),
      black: getButtonTypeStyle(ButtonTypeType.BLACK),
      gray: getButtonTypeStyle(ButtonTypeType.GRAY),
      opaque: getButtonTypeStyle(ButtonTypeType.OPAQUE),
      ghost: getButtonTypeStyle(ButtonTypeType.GHOST),
      "ghost-black": getButtonTypeStyle(ButtonTypeType.GHOST_BLACK),
      "ghost-danger": getButtonTypeStyle(ButtonTypeType.GHOST_DANGER),
      "under-line": getButtonTypeStyle(ButtonTypeType.UNDER_LINE),
      "no-line": getButtonTypeStyle(ButtonTypeType.NO_LINE),
      green: getButtonTypeStyle(ButtonTypeType.GREEN),
    },
  },
};

export type ThemeType = typeof theme;
export default theme;
