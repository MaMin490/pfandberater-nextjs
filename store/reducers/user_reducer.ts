interface ActionType {
  type: string;
}

export default function userReducer(state = {}, action: ActionType): Record<string, unknown> {
  switch (action.type) {
    default:
      return state;
  }
}
