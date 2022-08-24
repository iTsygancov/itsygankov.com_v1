export type IFrontMatter = {
    description: string,
    title: string,
}

export type IPost = {
  content: string,
  data: IFrontMatter,
  filePath: string
}
