type Metadata = {
    createdAt: string
}

type TextScribble = {
    type: "text",

    //  Content is a Markdown block
    content: string
}

type Scribble = TextScribble

type Post = {
    metadata: Metadata
    content: Scribble
}
