import { createStore } from "redux";

const initVMBox = {
  boxes: [
    {
      id: 1,
      title: "Box #1"
    },
    {
      id: 2,
      title: "Box #2"
    },
    {
      id: 3,
      title: "Box #3"
    }
  ],
  voicemails: [
    {
      id: 4,
      vmboxId: 1,
      status: "New",
      from: "1234567890",
      to: "00012340000",
      duration: "1:30"
    },
    {
      id: 5,
      vmboxId: 1,
      status: "Saved",
      from: "1234567890",
      to: "00012340000",
      duration: "0:25"
    },
    {
      id: 6,
      vmboxId: 1,
      status: "Deleted",
      from: "1234567890",
      to: "00012340000",
      duration: "0:45"
    }
  ]
}

const reducerVMBox = (state = initVMBox, action) => {
  return state
}

export default createStore(reducerVMBox)