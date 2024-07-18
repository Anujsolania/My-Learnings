import { atomFamily } from "recoil";
import { TODOS } from "./todos";

export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: id => {
    let foundtodo = null
    for (let i = 0; i < TODOS.length; i++) {
        if (TODOS[i].id == id) {
            foundtodo = TODOS[i]
        }
    }
    return foundtodo
    // return TODOS.find(x => x.id === id)
  },
});