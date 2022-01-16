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

  async update() {
    let props = this.attributes;
    let platform = props.collection?.value || "youtube";

    let videos = await get(
      platform || "",
      props["filter-tag"]?.value || "",
      props["filter-title"]?.value || "",
      props.short ?? false
    );

    let tags = await get(
      `${platform}-tags`
    );

    // SEARCH
    let html = `
      <span style="margin-right: 2vh">Search:</span>
      <input
        type="text"
        name="title"
        onkeyup="this.parentElement.filterByTitle(event, this.value)"
        value="${props["filter-title"]?.value || ""}"/>
      <button
        style="margin-left:2vh;"
        onclick="this.parentElement.filterByTitle({key:'Enter'},'')">
        Clear search
      </button>
    `;

    // TAGS
    if (!props["hide-tags"] ?? false) {
      html += `<br/><br/><span style="margin-right: 2vh">Filter:</span>`;

      for (let tag of tags) {
        html += `
          <a ${props["filter-tag"]?.value == tag? 'class = "selected-tag"': 'class="tag-name"'}
          onclick="this.parentElement.filterByTag('${tag}')">
            ${tag}
          </a>
        `;
      }
    }

    // ACTUAL LIST
    html += `<br/><br/><div class="video-list">`;

    for (let vid of videos) {

      // THUMBNAIL
      let thumb = "";

      if (platform == "youtube") {
        thumb = `https://i3.ytimg.com/vi/${vid.link.split(/watch\?v=/, 2)[1]}/hqdefault.jpg`;
      } else if (platform == "vlive") {
        thumb = `res/vlive-thumb.jpg`;
      }

      html += `
        <div class="video-list-item"
        style="
          background-image:
            linear-gradient(to right, black 60%, transparent),
            url('${thumb}');
        ">

          <img class="icon" src="
          ${platform == "youtube"? 'res/youtube.png':''}
          ${platform == "vlive"? 'res/vlive.png':''}
          "/>
          <a href="${vid.link}" target="_blank"><h4>${vid.title}</h4></a>
          <div style="display: flex; flex-direction: row; flex-wrap: wrap; flex-grow: 0">
      `;

      for (let tag of vid.tags) {
        if (tag == "all") {continue}

        html += `<span class="tag-name" style="cursor:default">${tag}</span>`;
      }

      html += `</div></div>`;
    }

    html += "</div>";

    this.innerHTML = html;
  }
}, {extends: "div"});
