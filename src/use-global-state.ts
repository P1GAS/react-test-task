import type { State } from "models";

import { createGlobalState } from "react-hooks-global-state";

const initialState: State = { posts: [], user: {} };
const { useGlobalState } = createGlobalState(initialState);

export default useGlobalState;
