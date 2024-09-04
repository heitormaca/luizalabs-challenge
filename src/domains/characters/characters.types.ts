export interface DataWrapper<T> {
  code?: number
  status?: string
  copyright?: string
  attributionText?: string
  attributionHTML?: string
  data?: DataContainer<T>
  etag?: string
}

export interface DataContainer<T> {
  offset?: number
  limit?: number
  total?: number
  count?: number
  results?: T[]
}

export interface Character {
  id?: number
  name?: string
  description?: string
  modified?: string
  resourceURI?: string
  urls?: Url[]
  thumbnail?: Image
  comics?: List<ComicSummary>
  stories?: List<StorySummary>
  events?: List<EventSummary>
  series?: List<SeriesSummary>
}

export interface Comic {
  id?: number
  digitalId?: number
  title?: string
  issueNumber?: number
  variantDescription?: string
  description?: string
  modified?: string
  isbn?: string
  upc?: string
  diamondCode?: string
  ean?: string
  issn?: string
  format?: string
  pageCount?: number
  textObjects?: TextObject[]
  resourceURI?: string
  urls?: Url[]
  series?: SeriesSummary
  variants?: ComicSummary[]
  collections?: ComicSummary[]
  collectedIssues?: ComicSummary[]
  dates?: ComicDate[]
  prices?: ComicPrice[]
  thumbnail?: Image
  images?: Image[]
  creators?: List<CreatorSummary>
  characters?: List<CharacterSummary>
  stories?: List<StorySummary>
  events?: List<EventSummary>
}

interface Url {
  type?: string
  url?: string
}

interface Image {
  path?: string
  extension?: string
}

interface TextObject {
  type?: string
  language?: string
  text?: string
}

interface ComicDate {
  type?: string
  date?: string
}

interface ComicPrice {
  type?: string
  price?: number
}

interface List<T> {
  available?: number
  returned?: number
  collectionURI?: string
  items?: T[]
}

interface Summary {
  resourceURI?: string
  name?: string
}

type ComicSummary = Summary
type StorySummary = Summary & { type?: string }
type EventSummary = Summary
type SeriesSummary = Summary
type CreatorSummary = Summary & { role?: string }
type CharacterSummary = Summary & { role?: string }

export interface CharacterParameters {
  characterId: number
}

export interface CharacterComicsParameters {
  characterId: number
  format?:
    | 'comic'
    | 'magazine'
    | 'trade paperback'
    | 'hardcover'
    | 'digest'
    | 'graphic novel'
    | 'digital comic'
    | 'infinite comic'
  formatType?: 'comic' | 'collection'
  noVariants?: boolean
  dateDescriptor?: 'lastWeek' | 'thisWeek' | 'nextWeek' | 'thisMonth'
  dateRange?: string
  title?: string
  titleStartsWith?: string
  startYear?: number
  issueNumber?: number
  diamondCode?: string
  digitalId?: number
  upc?: string
  isbn?: string
  ean?: string
  issn?: string
  hasDigitalIssue?: boolean
  modifiedSince?: string
  creators?: number
  series?: number
  events?: number
  stories?: number
  sharedAppearances?: number
  collaborators?: number
  orderBy?:
    | 'focDate'
    | 'onsaleDate'
    | 'title'
    | 'issueNumber'
    | 'modified'
    | '-focDate'
    | '-onsaleDate'
    | '-title'
    | '-issueNumber'
    | '-modified'
  limit?: number
  offset?: number
}

export interface CharactersParameters {
  name?: string
  nameStartsWith?: string
  modifiedSince?: string
  comics?: number
  series?: number
  events?: number
  stories?: number
  orderBy?: 'name' | 'modified' | '-name' | '-modified'
  limit?: number
  offset?: number
}
