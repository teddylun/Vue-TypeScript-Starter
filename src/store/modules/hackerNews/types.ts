export interface HackerNewsState {
  news: Array<News>
}

export interface News {
  id: number,
  by: string,
  descendants: number,
  kids: Array<number>,
  score: number,
  time: number,
  title: string,
  type: string,
  url: string
}

export interface SetHackerNewsPayload {
  [id: string]: HackerNewsState
}