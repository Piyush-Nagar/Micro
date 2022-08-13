import { DECREASE, INCREASE, RESET } from "./constants";

const counterReducer = (state = 0, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREASE:
      console.log("Testing")
      return state + 1;
    case DECREASE:
      return state - 1;
    case RESET:
      return 0;
    default:
      return state;
  }
};

export default counterReducer;