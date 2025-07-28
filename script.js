    function stopMusic() {
    const music = document.getElementById('bg-music');
    if (music) {
      music.pause();
      music.currentTime = 0;
    }
  }
    // Content for each tab
    const contentMap = {
      about: `
  <div class="left-column">
    <img src="img/about_me.jpg" alt="Profile Image">
    <p><strong>ui</strong> also known as Nikolaj</p>
    <p><strong>hobbies:</strong><br>reading VN, making and listening to music, programming, roaming around</p>
  </div>
  <div class="middle-column">
    <h2>feeling.limited</h2>
    <p>My name is Nikolaj, online I go by the alias of "ui". I've been in the Hypixel (duels) community since around 2019 and have achieved multiple leaderboard positions. On the other hand, since summer 2024, I've been captivated by visual novels. Not only by their writing and imagery, but also by their technical aspects. As such, I've been making tools for niche VNs and am now working on my first translation project.</p>
    <p><strong>Current Projects:</strong><br>Translating <a href="https://vndb.org/v18986">いくものへの子守唄</a><br>RE'ing random VNs <br>Writing my Matura paper</p>
    <p><strong>Friends and me</p>
    <a href="https://feeling.limited/" target="_blank"><img src="img/button.gif"></a>
  </div>
<div class="right-column" style="display: flex; flex-direction: column; gap: 8px; align-items: center; justify-content: center;">
  <a href="https://oguser.com/hayami" target="_blank" style="display: flex; align-items: center; gap: 6px; text-decoration: none; color: white;">
    <span>OGUsers</span>
    <img src="https://s3-eu-west-1.amazonaws.com/tpd/logos/65d72864bad5da55dd7ad69c/0x0.png" alt="OGUsers" style="width: 32px;">
  </a>
  <a href="https://discord.gg/dXmEMAGKEd" target="_blank" style="display: flex; align-items: center; gap: 6px; text-decoration: none; color: white;">
    <span>Discord</span>
    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/discord-white-icon.png" alt="Discord" style="width: 32px;">
  </a>
  <a href="https://steamcommunity.com/id/nik6laj/" target="_blank" style="display: flex; align-items: center; gap: 6px; text-decoration: none; color: white;">
    <span>Steam ⠀</span>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/640px-Steam_icon_logo.svg.png" alt="Steam" style="width: 32px;">
  </a>
  <a href="https://open.spotify.com/intl-de/artist/4KlIw0lFNEwn3I1tvdFd1T" target="_blank" style="display: flex; align-items: center; gap: 6px; text-decoration: none; color: white;">
    <span>Spotify</span>
    <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_White.png" alt="Spotify" style="width: 32px;">
  </a>
  <a href="https://github.com/iheq" target="_blank" style="display: flex; align-items: center; gap: 6px; text-decoration: none; color: white;">
    <span>GitHub⠀</span>
    <img src="https://icones.pro/wp-content/uploads/2021/06/icone-github-grise.png" alt="GitHub" style="width: 32px;">
  </a>
</div>

`,

      vn: `
        <div class="left-column">
          <img src="img/iku_big.jpg" alt="VN Logo">
          <p><strong>Current Project:</strong> <br>いくものへの子守唄 <br>Iku Mono e no Komoriuta</p>
          <p><strong>Status:</strong><br>Work in Progress</p>
        </div>
        <div class="middle-column">
          <h2>Visual Novel Translation</h2>
          <p>Shortly after finishing the anime adaptation of H2O, I found out that the original work is a visual novel. After downloading the VN I spent my summer holiday '24 reading it, and after completion, I rated it a solid 10. Following this event, I discovered the world of visual novel translations, using tools and expertize to create new visual novel translations. After making a tool from scratch I decided to start my own first full-scale VN translation, which I am currently working on.</p>
          <h3>Synapse</h3><p>A small island in the South Sea a few hours away from Honshu by boat on a good weather. Population has deteriorated greatly in recent years, so the last school on the island is about to be closed. Main character returns to this dying island to fulfill his promise given to the loved one...</p>
        </div>
        <div class="right-column">
          <img src="https://t.vndb.org/sf/18/205018.jpg" alt="VN Screenshot" style="object-fit: ;">
          <img src="https://t.vndb.org/sf/27/205027.jpg" alt="VN UI" style="object-fit: ;">
        </div>
      `,
      manga: `
        <div class="left-column">
          <img src="https://static.myfigurecollection.net/upload/items/1/1451029-b97c1.jpg" alt="Manga Cover">
          <p><strong>Current Project:</strong> H2O -Footprints in the Sand-</p>
          <p><strong>Status:</strong><br>Completed</p>
        </div>
        <div class="middle-column">
          <h2>Manga Translations</h2>
          <p>At the time when I discovered H2O, there wasn't a full English translation available. So I've made it my mission to translate the manga, so that everyone can enjoy the beauty of H2O. After finishing that translation I've started working on another project, which was shut down by a DMCA request. So for now I'll be doing VN translations.</p>
          <h3>Synapse</h3><p>Takuma Hirose is a young, male high school student, who is blind for unknown reasons. After his mother died an unexpected death, it left a deep emotional scar on him, which caused him to become very lonely and reserved. Due to this, Takuma and his father move from the city out into a rural area and Takuma is enrolled into a new high school. At his new school, he meets several new girls, three of whom he gets to know the most out of anyone else. They are, the firm and obstinate Hayami Kohinata, the kind and obliging Hinata Kagura, and the cheerful and mysterious Otoha. As Takuma interacts with these girls, his medical condition gradually begins to heal.</p>
          <p>Read H2O on Mangadex: <br> <a href="https://mangadex.org/title/1ef7e6e3-cf07-4862-abad-b9960c30807e/h-o-footprints-in-the-sand">Click here</a></p>
        </div>
        <div class="right-column">
          <img src="img/08.jpg" alt="Panel sample">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqzlCb1a2YMGhxuffZt5-3n6g-4FKqx0fgkg&s" alt="Typesetting preview">
        </div>
      `,
      myself: `
        <div class="left-column">
          <img src="https://upload.wikimedia.org/wikipedia/en/9/93/Myself_%3B_Yourself_limited_edition_game_cover.jpg" alt="Myself; Yourself Cover">
          <p><strong>Discovered on</strong> 21/10/2024</p>
          <p><strong>Medium</strong> DVD (Final Episode)</p>
        </div>
        <div class="middle-column">
          <h2>Myself; Yourself music video</h2>
          <iframe width="640" height="360" src="https://short.icu/RlVqIYmhl" frameborder="0" scrolling="0" allowfullscreen></iframe>
          <button onclick="stopMusic()" style="position: absolute; bottom: 20px; right: 20px; z-index: 999; background: #333; color: white; border: none; padding: 8px 12px; font-family: 'MS Gothic', sans-serif; cursor: pointer;">
          Stop Music</button>
          <p>oh lord dont strike me with a lawsuit</p>
        </div>
        
      `
    };

    // switch tab functinoality
    function switchTab(type) {
      const windowContent = document.getElementById('window-content');
      windowContent.classList.remove('fade');
      void windowContent.offsetWidth; // trigger reflow
      windowContent.classList.add('fade');

      document.getElementById('title-label').textContent =
        type === 'about' ? "\\ about_me.hxp" :
        type === 'vn' ? '\\ vn_translation.dat' :
        type === 'manga' ? '\\ manga_translation.psd':
        type === 'myself' ? '\\ myself_yourself_amv.mp4' : '';

      windowContent.innerHTML = contentMap[type];

      // Update active class on taskbar buttons
      document.querySelectorAll('.taskbar-button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === type);
      });
    }

    //  about tab
    switchTab('about');

    // taskbar button clicks
    document.querySelectorAll('.taskbar-button').forEach(btn => {
      btn.addEventListener('click', () => {
        switchTab(btn.dataset.tab);
      });
    });

    // Dragging
    const dragWindow = document.getElementById("draggable-window");
    const dragHandle = document.getElementById("drag-handle");
    let offsetX = 0, offsetY = 0, isDown = false;

    dragHandle.addEventListener("mousedown", e => {
      isDown = true;
      offsetX = e.clientX - dragWindow.offsetLeft;
      offsetY = e.clientY - dragWindow.offsetTop;
    });

    document.addEventListener("mouseup", () => {
      isDown = false;
    });

    document.addEventListener("mousemove", e => {
      if (!isDown) return;
      dragWindow.style.left = `${e.clientX - offsetX}px`;
      dragWindow.style.top = `${e.clientY - offsetY}px`;
    });

    // music autoplay
    document.getElementById('intro-overlay').addEventListener('click', () => {
    const overlay = document.getElementById('intro-overlay');
    overlay.style.opacity = '0';
    setTimeout(() => overlay.style.display = 'none', 800);

    const music = document.getElementById('bg-music');
    music.volume = 0.4;
    music.play().catch(err => {
    console.error("Autoplay failed:", err);
  });
});