import HttpRequest from "./HttpRequest";

import { REQ_001, RES_001 } from "./types";

export enum QueryKey {}

export enum MutationKey {}

// export async function GET_V4_DASH_BOARD_DB01_001(
//   params: REQ_V4_DASH_BOARD_DB01_001
// ) {
//   return await HttpRequest.get<RES_V4_DASH_BOARD_DB01_001>(
//     "/v1/commoncontrol/getGridData/V4_DASH_BOARD_DB01_001",
//     {
//       params: [params.jk_code, params.period, params.gubun, params.include_00],
//       ptypes: "",
//     }
//   );
// }
