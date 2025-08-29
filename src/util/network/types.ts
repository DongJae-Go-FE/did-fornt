export type PageProps<Params = unknown, SearchParams = unknown> = {
  params: Promise<Params>;
  searchParams: Promise<SearchParams>;
};

export type CommonResponse<T = unknown> = {
  timestamp: string;
  success: boolean;
  msg: string;
  code: number;
  error: unknown;
  data: T;
};

export type WithDataFieldResponse<T> = {
  datafield: { name: string; type: string }[];
  rows: T[];
};

export type REQ_001 = {};

export type RES_001 = WithDataFieldResponse<{}>;
