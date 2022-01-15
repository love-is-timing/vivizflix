customElements.define("video-list", class extends HTMLDivElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // INIT
    this.classList.add("video-list-wrapper");
    this.update();
  }

  filterByTag(tag) {
    this.setAttribute("filter-tag", tag);
    this.update();
  }

  filterByTitle(e, input) {
    if (e.key === "Enter") {
      this.setAttribute("filter-title", input);
      this.update();
    }
  }

  update() {
    let props = this.attributes;

    // TITLE
    let html = `
      <h2 class="video-list-title">${props.title?.value ?? "Title"}</h2>
      <span style="margin-right: 2vh">Search:</span>
      <input
        type="text"
        name="title"
        onkeyup="this.parentElement.filterByTitle(event, this.value)"
        value="${props["filter-title"]?.value || ""}"/>
      <button onclick="this.parentElement.filterByTitle({key:'Enter'},'')">Clear search</button>
      <br/><br/>
    `;

    // TAGS
    html += `<span style="margin-right: 2vh">Filter:</span>`;

    for (let tag of db.tags) {
      html += `
        <a ${props["filter-tag"]?.value == tag? 'class = "selected-tag"': 'class="tag-name"'}
        onclick="this.parentElement.filterByTag('${tag}')">
          ${tag}
        </a>
      `;
    }

    // ACTUAL LIST
    html += `<ul class="video-list">`;

    for (let vid of db.videos) {

      // FILTER TAG
      if (props["filter-tag"]?.value) {
        if (!vid.tags.includes(props["filter-tag"].value)) {
          continue;
        }
      }

      // FILTER TITLE
      if (props["filter-title"]?.value) {
        console.log(props["filter-title"].value);
        console.log(vid.title);
        if (!vid.title.toLowerCase().includes(props["filter-title"].value.toLowerCase())) {
          continue;
        }
      }

      html += `
        <li class="video-list-item">
          <img class="icon" src="
          ${vid.tags.includes("youtube")? 'res/youtube.png':''}
          ${vid.tags.includes("vlive")? 'res/vlive.png':''}
          "/>
          <a href="${vid.link}" target="_blank"><h4>${vid.title}</h4></a>
          <div style="display: flex; flex-direction: row; flex-wrap: wrap; flex-grow: 0">
      `;

      for (let tag of vid.tags) {
        if (tag == "all") {continue}

        html += `<span class="tag-name">${tag}</span>`;
      }

      html += `</div></li>`;
    }

    html += "</ul>";

    this.innerHTML = html;
  }
}, {extends: "div"});
