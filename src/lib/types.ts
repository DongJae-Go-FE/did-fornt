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

export type REQ_V4_DASH_BOARD_DB01_001 = {
  jk_code: string;
  period: string;
  gubun: string;
  include_00: string;
};

export type RES_V4_DASH_BOARD_DB01_001 = WithDataFieldResponse<{
  JK_CODE: string;
  JK_NM: string;
  TD: string;
  DISP_TD: string;
  MW: string;
  MM_JISU: number;
  MM_CHG: number;
  AVG_MM_JISU: number;
  AVG_MM_CHG: number;
  BF_WOW_MM_JISU?: number;
  BF_MOM_MM_JISU?: number;
  BF_YY_MM_JISU?: number;
  WOW_MMACHG: number;
  MOMMMACHG: number;
  YOYMM_ACHG: number;
}>;

export type REQ_V4_DASH_BOARD_DB02_001 = {
  gubun: string;
};

export type RES_V4_DASH_BOARD_DB02_001 = WithDataFieldResponse<{
  JK_CODE: string;
  JK_NM: string;
  TD: string;
  MM_JISU: number;
  MM_CHG: number;
  AVG_MM_JISU: number;
  AVG_MM_CHG: number;
}>;

export type REQ_V4_DASH_BOARD_DB01_002 = {
  jk_gb: string;
  jk_code: string;
  period: string;
};

export type RES_V4_DASH_BOARD_DB01_002 = WithDataFieldResponse<{
  ACC_BF_MM_BUN_QTY?: number;
  ACC_BF_MM_PS_QTY?: number;
  ACC_BF_YYYY_BUN_QTY?: number;
  ACC_BF_YYYY_PS_QTY?: number;
  ACC_BUN_QTY: number;
  ACC_PS_QTY: number;
  AVG_TOT_BUN_QTY: number;
  BF_MM_BUN_QTY: number;
  BF_MM_PS_QTY?: number;
  BF_YYYY_BUN_QTY: number;
  BF_YYYY_PS_QTY?: number;
  BUN_DT: string;
  BUN_QTY: number;
  JK_CODE: string;
  JK_GB: string;
  JK_NM: string;
  MOM: number;
  PS_QTY: number;
  YOY: number;
}>;

export type REQ_V4_DASH_BOARD_DB01_003 = {
  jk_gb: string;
  jk_code: string;
  period: string;
};

export type RES_V4_DASH_BOARD_DB01_003 = WithDataFieldResponse<{
  AVG_VAL: number;
  BF_MM_TOT: number;
  BF_YYYY_TOT: number;
  CALC_TD: string;
  JK_CODE: string;
  JK_NM: string;
  MOM: number;
  TD: string;
  VAL: number;
  YOY: number;
}>;

export type REQ_V4_DASH_BOARD_DB01_004 = {
  jk_gb: string;
  jk_code: string;
  uh: string;
  period: string;
};

export type RES_V4_DASH_BOARD_DB01_004 = WithDataFieldResponse<{
  AVG_QTY: number;
  JK_NM: string;
  MOM: number;
  QTY: number;
  TD: string;
  YOY: number;
}>;

export type REQ_V4_DASH_BOARD_DB01_005 = {
  jk_gb: string;
  jk_code: string;
  period: string;
};

export type RES_V4_DASH_BOARD_DB01_005 = WithDataFieldResponse<{
  JK_CODE: string;
  JK_NM: string;
  IBJU_QTY: number;
  IBJU_PLAN_QTY: number;
  TOT_QTY: number;
  AVG_TOT_QTY: number;
  BF_MM_QTY?: number;
  BF_YYYY_QTY?: number;
  MOM?: number;
  YOY?: number;
}>;

export type REQ_V4_DASH_BOARD_DB01_006 = {
  jk_code: string;
  fr_td: string;
  to_td: string;
};

export type RES_V4_DASH_BOARD_DB01_006 = WithDataFieldResponse<{
  BALANCE_INTEREST_RATE: number;
  JK_CODE: string;
  JK_NM: string;
  NEW_INTEREST_RATE: number;
  TD: string;
}>;

export type REQ_V4_DASH_BOARD_DB01_007 = {
  period: string;
};

export type RES_V4_DASH_BOARD_DB01_007 = WithDataFieldResponse<{
  도시: string;
  구시군?: string;
  변동률: number;
}>;
