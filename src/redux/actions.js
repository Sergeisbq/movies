export const DETAIL = 'DETAIL';

export const showDetails = (item, item2) => {
  return {
    type: DETAIL,
    payload: item
  }
}