//-------------------------------------
//
//             BACKEND(?)
//
//-------------------------------------

async function get(collection = "youtube", filterTag = "", filterTitle = "") {
  let result;

  await fetch(`db/${collection}.json`)
  .then(raw => raw.json())
  .then(res => {

    console.log(res);

    if (filterTag) {
      res = res.filter(vid => vid.tags.includes(filterTag))
    }

    if (filterTitle) {
      res = res.filter(vid => vid.title.toLowerCase().includes(filterTitle.toLowerCase()))
    }

    result = res;
  });

  return result;
}
