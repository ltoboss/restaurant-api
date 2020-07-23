const ER_DUP_ENTRY = 1062;
const ER_NO_REFERENCED_ROW_2 = 1452;

import DuplicatedEntryException from '../Application/Exceptions/DuplicatedEntryException';
import Responses from '../Common/Responses';

export default async function errorHandler(err, req, res, next) {
  let error = err;
  if (err) {
    return await Responses(err, res);
  } else {
    return next();
  }


}
