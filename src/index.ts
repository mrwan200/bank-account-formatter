/**
 * Bank account address formatter
 * @author M-307
 *
 * Resources:
 * - Me [Kbank, KTB, MyMo]
 * - https://th.wikipedia.org/wiki/รายชื่อธนาคารในประเทศไทย
 * - https://www.truemoney.com/startsaving/
 * - https://www.tiscosec.com/th/ats.html
 * - https://www.uob.co.th/web-resources/pdf/personal/deposits/user-manual-one-account-uob-mighty-aug21.pdf
 * - https://www.koratcoop.com/web2020/content.php?arcid=32
 * - https://www.facebook.com/islamiccenterthailand/photos/a.1803643483229859/2951021118492084/?type=3
 * - http://datacenter.poems.in.th/investmentunit/announcement/PST_BankAccount_01-Aug-13.pdf
 *
 * Missing:
 * - TCD [THCETHB1]
 * - ICBCT [ICBKTHBK]
 * - SME [-]
 * - EXIM [EXTHTHBK]
 */

import { TBank } from "./interface/bank.interface";
import { DEFAULT_FORMAT, format } from "./utils/format-pattern";

function _parse(account_id: string, format: number[]) {
  const acc: string[] = [];
  let offset = 0;
  for (const [idx, num] of format.entries()) {
    acc.push(account_id.substring(offset, offset + num));
    offset += num;
  }

  return acc.join("-");
}

export function parse(account_id: string, bank: TBank | null, strict = false) {
  // Check strict first
  if (strict) {
    // Check if bank not exist return null it
    if (!bank || !format[bank]) return null;
    // Check input is not number
    if(!Number(account_id)) return null;
    // Check length not same
    const len = format[bank].reduce((partialSum, a) => partialSum + a, 0);
    if (len !== account_id.length) return null;
  }
  if (!bank) return _parse(account_id, DEFAULT_FORMAT);
  return _parse(account_id, format[bank]);
}
