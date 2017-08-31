import {obj2query} from '../utils/tool';
export function fetchList({path, queryObj, succ = (()=>{}), fail = (()=>{}), ...rest}) {
  const beginType = `${path}_GET_BEGIN`;
  const succType = `${path}_GET_SUCC`;
  const failType = `${path}_GET_FAIL`;
  const query = obj2query(queryObj);
  path = `${path}${query ? '?' : ''}${query}`;
  return sendReq(path, 'get', null, rest, succ, fail, beginType, succType, failType);
}
export function edit({
  method = 'put', path, id, body, succ = (()=>{}), fail = (()=>{}), ...rest
}) {
  const beginType = `${path}_PUT_BEGIN`;
  const succType = `${path}_PUT_SUCC`;
  const failType = `${path}_PUT_FAIL`;
  path = path.replace(':id', id);
  return sendReq(path, method, body, rest, succ, fail, beginType, succType, failType);
}

export function get({path, succ = (()=>{}), fail = (()=>{}), ...rest}) {
  const beginType = `${path}_GET_BEGIN`;
  const succType = `${path}_GET_SUCC`;
  const failType = `${path}_GET_FAIL`;
  return sendReq(path, 'get', null, rest, succ, fail, beginType, succType, failType);
}
export function getById({path, id, succ = (()=>{}), fail = (()=>{}), ...rest}) {
  const beginType = `${path}_GET_BEGIN`;
  const succType = `${path}_GET_SUCC`;
  const failType = `${path}_GET_FAIL`;
  path = path.replace(':id', id);
  return sendReq(path, 'get', null, rest, succ, fail, beginType, succType, failType);
}

export function post({
  path, body, succ = (()=>{}), fail = (()=>{}), ...rest
}) {
  const beginType = `${path}_POST_BEGIN`;
  const succType = `${path}_POST_SUCC`;
  const failType = `${path}_POST_FAIL`;
  return sendReq(path, 'post', body, rest, succ, fail, beginType, succType, failType);
}
export function postById({
  path, id, body, succ = (()=>{}), fail = (()=>{}), ...rest
}) {
  const beginType = `${path}_POST_BEGIN`;
  const succType = `${path}_POST_SUCC`;
  const failType = `${path}_POST_FAIL`;
  path = path.replace(':id', id);
  return sendReq(path, 'post', body, rest, succ, fail, beginType, succType, failType);
}
export function put({
  path, body, succ = (()=>{}), fail = (()=>{}), ...rest
}) {
  const beginType = `${path}_PUT_BEGIN`;
  const succType = `${path}_PUT_SUCC`;
  const failType = `${path}_PUT_FAIL`;
  return sendReq(path, 'put', body, rest, succ, fail, beginType, succType, failType);
}
export function putById({
  path, id, body, succ = (()=>{}), fail = (()=>{}), ...rest
}) {
  const beginType = `${path}_PUT_BEGIN`;
  const succType = `${path}_PUT_SUCC`;
  const failType = `${path}_PUT_FAIL`;
  path = path.replace(':id', id);
  return sendReq(path, 'put', body, rest, succ, fail, beginType, succType, failType);
}

export function del({
  path, id, body, succ = (()=>{}), fail = (()=>{}), ...rest
}) {
  const beginType = `${path}_DELETE_BEGIN`;
  const succType = `${path}_DELETE_SUCC`;
  const failType = `${path}_DELETE_FAIL`;
  return sendReq(path, 'delete', body, rest, succ, fail, beginType, succType, failType);
}
export function delById({
  path, id, body, succ = (()=>{}), fail = (()=>{}), ...rest
}) {
  const beginType = `${path}_DELETE_BEGIN`;
  const succType = `${path}_DELETE_SUCC`;
  const failType = `${path}_DELETE_FAIL`;
  path = path.replace(':id', id);
  return sendReq(path, 'delete', body, rest, succ, fail, beginType, succType, failType);
}

function sendReq(path, method, body, rest, succ, fail, beginType, succType, failType) {
  if (rest && rest.typeEnd) {
    beginType = `${beginType}_${rest.typeEnd}`;
    succType = `${succType}_${rest.typeEnd}`;
    failType = `${failType}_${rest.typeEnd}`;
  }
  if (rest && rest.clear) {
    let {clear: {data: defaultData = []} = {} } = rest;
    succ(defaultData);
    return {
      type: succType,
      data: defaultData,
    };
  }
  return (dispatch, req) => {
    dispatch({
      type: beginType,
      ...rest,
    });
    const reqParams = {
      url: path,
      method: method,
      body,
    };
    if (method === 'get') {
      delete reqParams.body;
    }
    return req.request(reqParams).then(data=>{
      dispatch({
        type: succType,
        data: data,
        ...rest
      });
      succ(data);
    }).catch(err=>{
      console.error(err);
      dispatch({
        type: failType,
        err,
        ...rest,
      });
      fail(err);
    });
  };
}
