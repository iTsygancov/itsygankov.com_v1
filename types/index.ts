export type IFrontMatter = {
    category: string,
    date: string,
    description: string,
    section: string,
    title: string,
}

export type IPost = {
  content: string,
  data: IFrontMatter,
  filePath: string
}
