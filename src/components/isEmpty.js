export default function (unknown) {
  let whiteList = [false, 0];
  let is = false;
  if (unknown) {
    is = typeof unknown == 'object' ? +unknown : true;
  } else {
    is = whiteList.indexOf(unknown) > -1 ? true : false;
  }
  return !is;
}
