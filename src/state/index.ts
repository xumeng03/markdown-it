import {Token} from "../token";
import {MarkdownIt} from "../markdown-it";

export class State {
    str: string = ''
    tokens: Token[] = []
    inlineMode: boolean = false
    md: MarkdownIt | null = null
}
