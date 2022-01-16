//-------------------------------------
//
//             BACKEND(?)
//
//-------------------------------------

async function get(collection = "youtube", filterTag = "", filterTitle = "") {
  let result;

  await fetch(`${collection}.json`)
  .then(raw => raw.json)
  .then(res => {

    if (filterTag) {
      res = res.map(vid => vid.tags.includes(filterTag))
    }

    if (filterTitle) {
      res = res.map(vid => vid.title.toLowerCase().includes(filterTitle.toLowerCase()))
    }

    result = res;
  });

  return result;
}
