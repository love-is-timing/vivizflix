//-------------------------------------
//
//             BACKEND(?)
//
//-------------------------------------

async function get(collection = "youtube", filterTag = "", filterTitle = "", short = false) {
  let result;

  await fetch(`db/${collection}.json`)
  .then(raw => raw.json())
  .then(res => {

    if (filterTag) {
      res = res.filter(vid => vid.tags.includes(filterTag))
    }

    if (filterTitle) {
      res = res.filter(vid => vid.title.toLowerCase().includes(filterTitle.toLowerCase()))
    }

    if (short) {
      res = res.slice(0, 12);
    }

    result = res;
  });

  return result;
}
