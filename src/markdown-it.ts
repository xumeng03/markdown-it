console.log("Markdown It");

class Preset {
    breaks: boolean = false
    cssPrefix: string = "it-"
    highlight: Function | null = null
}

class Component {
    core: object = {}
    block: object = {}
    inline: object = {}
}

export class MarkdownIt {
    presets: Preset = new Preset()
    components: Component = new Component()

    parse() {

    }

    render() {

    }
}
