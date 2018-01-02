export default function exampleReducer(state = {}, action) {

  switch (action.type) {
    case 'EXAMPLE_ACTION':
      return 1;

    default:
      return state;
  }
}
