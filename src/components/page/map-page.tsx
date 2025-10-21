import { useState, useCallback } from "react";

import Map from "../map";

export default function MapPage() {
  const [mapValue, setMapValue] = useState("서울대교구");

  // const renderTable = () => {
  //   switch (mapValue) {
  //     case "서울대교구":
  //       return (
  //         <table className="description-table">
  //           <tbody>
  //             <tr>
  //               <th colSpan={2}>교구명</th>
  //               <td colSpan={4}>서울대교구</td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>전화번호</th>
  //               <td colSpan={4}>02-727-2114</td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>주소</th>
  //               <td colSpan={4}>서울특별시 중구 명동길 74</td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>홈페이지</th>
  //               <td colSpan={4}>
  //                 <a href="https://aos.catholic.or.kr/index" target="_blank">
  //                   https://aos.catholic.or.kr/index
  //                 </a>
  //               </td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>접수 홈페이지</th>
  //               <td colSpan={4}></td>
  //             </tr>
  //           </tbody>
  //         </table>
  //       );
  //     case "인천교구":
  //       return (
  //         <table className="description-table">
  //           <tbody>
  //             <tr>
  //               <th colSpan={2}>교구명</th>
  //               <td colSpan={4}>인천교구</td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>전화번호</th>
  //               <td colSpan={4}>032-765-6960</td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>주소</th>
  //               <td colSpan={4}>인천광역시 동구 박문로 1</td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>홈페이지</th>
  //               <td colSpan={4}>
  //                 <a href="http://www.caincheon.or.kr/" target="_blank">
  //                   http://www.caincheon.or.kr/
  //                 </a>
  //               </td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>접수 홈페이지</th>
  //               <td colSpan={4}></td>
  //             </tr>
  //           </tbody>
  //         </table>
  //       );
  //     case "수원교구":
  //       return (
  //         <table className="description-table">
  //           <tbody>
  //             <tr>
  //               <th colSpan={2}>교구명</th>
  //               <td colSpan={4}>수원교구</td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>전화번호</th>
  //               <td colSpan={4}>031-244-5001</td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>주소</th>
  //               <td colSpan={4}>경기도 수원시 장안구 이목로 39</td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>홈페이지</th>
  //               <td colSpan={4}>
  //                 <a href="https://www.casuwon.or.kr/" target="_blank">
  //                   https://www.casuwon.or.kr/
  //                 </a>
  //               </td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>접수 홈페이지</th>
  //               <td colSpan={4}></td>
  //             </tr>
  //           </tbody>
  //         </table>
  //       );
  //     case "대전교구":
  //       return (
  //         <table className="description-table">
  //           <tbody>
  //             <tr>
  //               <th colSpan={2}>교구명</th>
  //               <td colSpan={4}>대전교구</td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>전화번호</th>
  //               <td colSpan={4}>044-270-3000</td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>주소</th>
  //               <td colSpan={4}>세종특별자치시 국책연구원5로 12</td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>홈페이지</th>
  //               <td colSpan={4}>
  //                 <a href="https://www.djcatholic.or.kr/home/" target="_blank">
  //                   https://www.djcatholic.or.kr/home/
  //                 </a>
  //               </td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>접수 홈페이지</th>
  //               <td colSpan={4}></td>
  //             </tr>
  //           </tbody>
  //         </table>
  //       );
  //     case "대구대교구":
  //       return (
  //         <table className="description-table">
  //           <tbody>
  //             <tr>
  //               <th colSpan={2}>교구명</th>
  //               <td colSpan={4}>대구대교구</td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>전화번호</th>
  //               <td colSpan={4}>053-250-3000</td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>주소</th>
  //               <td colSpan={4}>대구광역시 중구 남산로4길 112</td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>홈페이지</th>
  //               <td colSpan={4}>
  //                 <a
  //                   href="https://www.daegu-archdiocese.or.kr/"
  //                   target="_blank"
  //                 >
  //                   https://www.daegu-archdiocese.or.kr/
  //                 </a>
  //               </td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>접수 홈페이지</th>
  //               <td colSpan={4}></td>
  //             </tr>
  //           </tbody>
  //         </table>
  //       );
  //     case "광주대교구":
  //       return (
  //         <table className="description-table">
  //           <tbody>
  //             <tr>
  //               <th colSpan={2}>교구명</th>
  //               <td colSpan={4}>광주대교구</td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>전화번호</th>
  //               <td colSpan={4}>062-380-2801</td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>주소</th>
  //               <td colSpan={4}>광주광역시 서구 상무대로 980</td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>홈페이지</th>
  //               <td colSpan={4}>
  //                 <a href="https://www.gjcatholic.or.kr/" target="_blank">
  //                   https://www.gjcatholic.or.kr/
  //                 </a>
  //               </td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>접수 홈페이지</th>
  //               <td colSpan={4}></td>
  //             </tr>
  //           </tbody>
  //         </table>
  //       );
  //     case "부산교구":
  //       return (
  //         <table className="description-table">
  //           <tbody>
  //             <tr>
  //               <th colSpan={2}>교구명</th>
  //               <td colSpan={4}>부산교구</td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>전화번호</th>
  //               <td colSpan={4}>051-629-8700</td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>주소</th>
  //               <td colSpan={4}>부산광역시 수영구 수영로 427번길 39</td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>홈페이지</th>
  //               <td colSpan={4}>
  //                 <a href="http://www.catholicbusan.or.kr/" target="_blank">
  //                   http://www.catholicbusan.or.kr/
  //                 </a>
  //               </td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>접수 홈페이지</th>
  //               <td colSpan={4}></td>
  //             </tr>
  //           </tbody>
  //         </table>
  //       );
  //     case "안동교구":
  //       return (
  //         <table className="description-table">
  //           <tbody>
  //             <tr>
  //               <th colSpan={2}>교구명</th>
  //               <td colSpan={4}>안동교구</td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>전화번호</th>
  //               <td colSpan={4}>054-858-3111</td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>주소</th>
  //               <td colSpan={4}>경상북도 안동시 마지락길 77</td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>홈페이지</th>
  //               <td colSpan={4}>
  //                 <a href="https://www.acatholic.or.kr/" target="_blank">
  //                   https://www.acatholic.or.kr/
  //                 </a>
  //               </td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>접수 홈페이지</th>
  //               <td colSpan={4}></td>
  //             </tr>
  //           </tbody>
  //         </table>
  //       );
  //     case "청주교구":
  //       return (
  //         <table className="description-table">
  //           <tbody>
  //             <tr>
  //               <th colSpan={2}>교구명</th>
  //               <td colSpan={4}>청주교구</td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>전화번호</th>
  //               <td colSpan={4}>043-210-1700</td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>주소</th>
  //               <td colSpan={4}>충북 청주시 청원구 주성로 135-35</td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>홈페이지</th>
  //               <td colSpan={4}>
  //                 <a href="https://www.cdcj.or.kr/" target="_blank">
  //                   https://www.cdcj.or.kr/
  //                 </a>
  //               </td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>접수 홈페이지</th>
  //               <td colSpan={4}></td>
  //             </tr>
  //           </tbody>
  //         </table>
  //       );
  //     case "전주교구":
  //       return (
  //         <table className="description-table">
  //           <tbody>
  //             <tr>
  //               <th colSpan={2}>교구명</th>
  //               <td colSpan={4}>전주교구</td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>전화번호</th>
  //               <td colSpan={4}>063-230-1004</td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>주소</th>
  //               <td colSpan={4}>전북특별자치도 전주시 완산구 기린대로 100</td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>홈페이지</th>
  //               <td colSpan={4}>
  //                 <a
  //                   href="https://www.jcatholic.or.kr/index.php"
  //                   target="_blank"
  //                 >
  //                   https://www.jcatholic.or.kr/index.php
  //                 </a>
  //               </td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>접수 홈페이지</th>
  //               <td colSpan={4}></td>
  //             </tr>
  //           </tbody>
  //         </table>
  //       );
  //     case "제주교구":
  //       return (
  //         <table className="description-table">
  //           <tbody>
  //             <tr>
  //               <th colSpan={2}>교구명</th>
  //               <td colSpan={4}>제주교구</td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>전화번호</th>
  //               <td colSpan={4}>064-729-9500</td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>주소</th>
  //               <td colSpan={4}>제주특별자치도 제주시 관덕로8길 14</td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>홈페이지</th>
  //               <td colSpan={4}>
  //                 <a href="https://www.diocesejeju.or.kr/" target="_blank">
  //                   https://www.diocesejeju.or.kr/
  //                 </a>
  //               </td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>접수 홈페이지</th>
  //               <td colSpan={4}></td>
  //             </tr>
  //           </tbody>
  //         </table>
  //       );
  //     case "춘천교구":
  //       return (
  //         <table className="description-table">
  //           <tbody>
  //             <tr>
  //               <th colSpan={2}>교구명</th>
  //               <td colSpan={4}>춘천교구</td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>전화번호</th>
  //               <td colSpan={4}>033-240-6014</td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>주소</th>
  //               <td colSpan={4}>강원특별자치도 춘천시 공지로 300</td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>홈페이지</th>
  //               <td colSpan={4}>
  //                 <a href="https://www.cccatholic.or.kr/" target="_blank">
  //                   https://www.cccatholic.or.kr/
  //                 </a>
  //               </td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>접수 홈페이지</th>
  //               <td colSpan={4}></td>
  //             </tr>
  //           </tbody>
  //         </table>
  //       );
  //     case "의정부교구":
  //       return (
  //         <table className="description-table">
  //           <tbody>
  //             <tr>
  //               <th colSpan={2}>교구명</th>
  //               <td colSpan={4}>의정부교구</td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>전화번호</th>
  //               <td colSpan={4}>031-850-1400</td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>주소</th>
  //               <td colSpan={4}>경기도 의정부시 신흥로 261</td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>홈페이지</th>
  //               <td colSpan={4}>
  //                 <a href="http://ucatholic.or.kr/" target="_blank">
  //                   http://ucatholic.or.kr/
  //                 </a>
  //               </td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>접수 홈페이지</th>
  //               <td colSpan={4}></td>
  //             </tr>
  //           </tbody>
  //         </table>
  //       );
  //     case "원주교구":
  //       return (
  //         <table className="description-table">
  //           <tbody>
  //             <tr>
  //               <th colSpan={2}>교구명</th>
  //               <td colSpan={4}>원주교구</td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>전화번호</th>
  //               <td colSpan={4}>033-765-4221</td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>주소</th>
  //               <td colSpan={4}>강원특별자치도 원주시 원일로 28</td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>홈페이지</th>
  //               <td colSpan={4}>
  //                 <a href="http://www.wjcatholic.or.kr/" target="_blank">
  //                   http://www.wjcatholic.or.kr/
  //                 </a>
  //               </td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>접수 홈페이지</th>
  //               <td colSpan={4}></td>
  //             </tr>
  //           </tbody>
  //         </table>
  //       );
  //     case "마산교구":
  //       return (
  //         <table className="description-table">
  //           <tbody>
  //             <tr>
  //               <th colSpan={2}>교구명</th>
  //               <td colSpan={4}>마산교구</td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>전화번호</th>
  //               <td colSpan={4}>055-249-7000</td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>주소</th>
  //               <td colSpan={4}>경상남도 창원시 마산합포구 진전면 죽헌로 72</td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>홈페이지</th>
  //               <td colSpan={4}>
  //                 <a href="https://cathms.kr/" target="_blank">
  //                   https://cathms.kr/
  //                 </a>
  //               </td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>접수 홈페이지</th>
  //               <td colSpan={4}></td>
  //             </tr>
  //           </tbody>
  //         </table>
  //       );
  //     case "군종교구":
  //       return (
  //         <table className="description-table">
  //           <tbody>
  //             <tr>
  //               <th colSpan={2}>교구명</th>
  //               <td colSpan={4}>군종교구</td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>전화번호</th>
  //               <td colSpan={4}>02-749-1921</td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>주소</th>
  //               <td colSpan={4}>서울특별시 용산구 한강대로40길 46</td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>홈페이지</th>
  //               <td colSpan={4}>
  //                 <a href="https://www.gunjong.or.kr/" target="_blank">
  //                   https://www.gunjong.or.kr/
  //                 </a>
  //               </td>
  //             </tr>
  //             <tr>
  //               <th colSpan={2}>접수 홈페이지</th>
  //               <td colSpan={4}></td>
  //             </tr>
  //           </tbody>
  //         </table>
  //       );
  //   }
  // };

  const handleChangeValue = useCallback((value: string) => {
    setMapValue(value);
  }, []);

  return (
    <div className="w-full h-full">
      <h2 className="heading02b mb-8">
        교구 소개 <span className="body02m">(마커를 클릭해주세요)</span>
      </h2>
      <div className="flex h-[calc(100%-64px)] max-[767px]:h-full gap-x-4 max-[767px]:flex-col max-[767px]:gap-y-4">
        <Map onChangeValue={handleChangeValue} />
        {/* <div className="flex-1">{renderTable()}</div> */}
      </div>
    </div>
  );
}
