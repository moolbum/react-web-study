export const FROM_PC_TO_TABLET = "pc";
export const FROM_TABLET_TO_PHONE = "tablet";
export const FROM_PHONE_TO_SMALL_PHONE = "phone";

export const breakpoints = {
  all: 9999,
  pc: 1279,
  tablet: 767,
  phone: 375,
};

/**
 미디어쿼리 사용방법 -> customStyled component 내에서 호출
 ex)

 ${mediaQueries(BREAKPOINT_TABLET)} {
   ...
  }
 */
export const mediaQueries = (key: keyof typeof breakpoints) => {
  return () => {
    if (key === FROM_PC_TO_TABLET) {
      return `@media (max-width: ${breakpoints.all}px)`;
    }
    return `@media (max-width: ${breakpoints[key]}px)`;
  };
};
