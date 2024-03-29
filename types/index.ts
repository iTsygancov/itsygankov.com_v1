export type IFrontMatter = {
  category: string;
  date: string;
  description: string;
  id: string;
  keywords: string[];
  section: string;
  title: string;
};

export type IPost = {
  content: string;
  data: IFrontMatter;
  filePath: string;
};
