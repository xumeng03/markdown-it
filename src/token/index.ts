type tokenType = 'paragraph_open' | 'paragraph_close' | 'hr' | '';
type tokenTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | '';

export class Token {
    // token 的类型，比如 paragraph_open 、paragraph_close、hr
    type: tokenType = ''
    // 标签名称，比如 p、strong、''
    tag: tokenTag = 'span'
    // HTML 标签元素的属性
    attrs: string[] = []
    // token 的位置信息，数组只有两个元素，前者是起始行、后者是结束行
    map: [number, number] = [-1, -1]
    // 标签的类型，1 是开标签，0 是自闭合标签，-1 是关标签
    nesting: number = 0
    // 标签缩进
    level: number = 0
    // 子token
    children: Token[] = []
    // 标签中的内容
    content: string = ''
    // 特定语法的标记。比如 "```" 表明是一个 code block。"**" 是强调的语法。"-" 或者 "+" 是一个列表
    markup: string = ''
    // type 为 代码块 的 token 会有 info 属性
    info: string = ''
    // 插件用来放任意数据的
    meta: object = {}
    // ParserCore 生成的 token 的 block 为 true，ParserInline 生成的 token 的 block 为 true
    block: boolean = false
    // 如果为 true，该 token 不会被 render
    hidden: boolean = false
}
