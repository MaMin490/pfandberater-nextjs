interface ActionType {
  type:string
}

export default function(state = {}, action:ActionType): Record<string, unknown> {
  switch (action.type) {
    default:
      return state;
  }
}
