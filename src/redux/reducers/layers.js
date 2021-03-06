import {
  ADD_LAYER,
  UPDATE_LAYER,
  DELETE_LAYER,
  SELECT_LAYER,
  MOVE_LAYER,
  TOGGLE_LAYER_VISIBILITY,
} from "redux/actionTypes";

const initialState = {
  selected: "",
  names: [],
  layers: {},
  lastIdx: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_LAYER: {
      let { name, tileSize } = action.payload;

      // If name is not provided, add a default one
      if (!name || name === "") {
        name = `Layer ${state.lastIdx + 1}`;
      }

      return {
        ...state,
        names: [...state.names, name],
        layers: {
          ...state.layers,
          [name]: {
            id: state.lastIdx,
            tileSize: tileSize,
            visible: true,
          },
        },
        selected: name,
        lastIdx: state.lastIdx + 1,
      };
    }

    case UPDATE_LAYER: {
      let { name, tileSize } = action.payload;

      if (!name || name === "" || !state.names.includes(name)) {
        return state;
      }

      const oldLayer = state.layers[name];

      return {
        ...state,
        layers: {
          ...state.layers,
          [name]: {
            id: oldLayer.id,
            tileSize: tileSize || oldLayer.tileSize,
            visible: oldLayer.visible,
          },
        },
      };
    }

    case DELETE_LAYER: {
      const { name } = action.payload;
      const { [name]: value, ...newLayers } = state.layers;
      const newIds = state.names.filter((id) => id !== name);

      let newSelected = state.selected;

      // If the selected layer is the layer we are deleting and
      // it is not the last layer, select a new index.
      if (newSelected === name && newIds.length > 0) {
        const idx = Math.max(state.names.indexOf(name) - 1, 0);
        newSelected = newIds[idx];
      } else if (newIds.length === 0) {
        newSelected = "";
      }

      return {
        ...state,
        names: newIds,
        layers: newLayers,
        selected: newSelected,
      };
    }

    case SELECT_LAYER: {
      const { name } = action.payload;
      return {
        ...state,
        selected: name,
      };
    }

    case MOVE_LAYER: {
      const { name, to } = action.payload;
      const from = state.names.indexOf(name);
      const reorderedNames = state.names;

      // If the layer exists
      if (from !== -1) {
        reorderedNames.splice(from, 1);
        reorderedNames.splice(to, 0, name);
      }

      return {
        ...state,
        names: reorderedNames,
      };
    }

    case TOGGLE_LAYER_VISIBILITY: {
      const { name } = action.payload;
      return {
        ...state,
        layers: {
          ...state.layers,
          [name]: {
            ...state.layers[name],
            visible: !state.layers[name].visible,
          },
        },
      };
    }

    default:
      return state;
  }
}
