// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/roshdotink/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/roshdotink/blog/";
          },
        },{id: "nav-cinema",
          title: "cinema",
          description: "films i&#39;ve watched and want to watch",
          section: "Navigation",
          handler: () => {
            window.location.href = "/roshdotink/cinema/";
          },
        },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "books that have stayed with me",
          section: "Navigation",
          handler: () => {
            window.location.href = "/roshdotink/bookshelf/";
          },
        },{id: "nav-links",
          title: "links",
          description: "things worth sharing",
          section: "Navigation",
          handler: () => {
            window.location.href = "/roshdotink/links/";
          },
        },{id: "post-hello-world",
        
          title: "hello, world",
        
        description: "a first post about nothing in particular",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/roshdotink/blog/2026/hello-world/";
          
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/roshdotink/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%61%73%68%79%61%70%72%6F%73%68%69%74%61@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/roshita-kashyap", "_blank");
        },
      },{
        id: 'social-letterboxd_id',
        title: 'Letterboxd_id',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
        id: 'social-goodreads',
        title: 'Goodreads',
        section: 'Socials',
        handler: () => {
          window.open("https://www.goodreads.com", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
