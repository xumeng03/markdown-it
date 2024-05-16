import {State} from "../state";

const NEWLINES_RE = /\r\n?|\n/g
const NULL_RE = /\0/g
const REPLACE_CHARACTER = '\uFFFD'

export function normalize(state: State) {
    state.str = state.str.replace(NEWLINES_RE, '\n').replace(NULL_RE, REPLACE_CHARACTER)
}
