const themes = require('prism-react-renderer').themes;
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Component Playground',
  tagline: 'by Brett Baker',
  
 

  // Set the production url of your site here
  url: 'https://Mybabb.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Climate-Control/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MyBaBB', // Usually your GitHub org/user name.
  projectName: 'Climate-Control', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            // editUrl:
            //   "https://www.climatetechhandbook.com/admin/#/edit/",
            routeBasePath: "/",
            showLastUpdateAuthor: false,
            showLastUpdateTime: true,
            admonitions: {
              keywords: ['note', 'tip', 'warning', 'important', 'info', 'caution', 'danger', 'question', 'podcast', 'newsletter', 'company', 'contribute', 'book', 'expert'],
            }
          },
          blog: {
            showReadingTime: true,
            // Please change this to your repo.
          },
          theme: {
            customCss: [
              require.resolve("./static/custom.css"),
              // require.resolve("./src/css/tailwind.css"),
            ],
          },
        }),
      ],
    ],

    customFields: {
      statement:
        "Find a career you love",
    },

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        docs: {
          sidebar: {
            hideable: true,
            autoCollapseCategories: true,
          },
        },
        // zoom: {
        //   selector: '.markdown :not(em) > img',
        //   background: {
        //     light: 'rgb(255, 255, 255)',
        //     dark: 'rgb(50, 50, 50)'
        //     },
        // },
        navbar: {
          // title: "Climate Tech Handbook",
          logo: {
            alt: "CTH Earth Logo",
            src: "img/main/cth-earth-logo.png",
          },
          items: [
            {
              type: "doc",
              docId: "intro",
              position: "right",
              label: "Start Learning",
            },
            {
              type: "doc",
              docId: "solutions",
              position: "right",
              label: "Climate Solutions",
            },
            {
              type: "doc",
              docId: "resources",
              position: "right",
              label: "Resources",
            },
            // {
            //   type: "doc",
            //   docId: "about",
            //   position: "right",
            //   label: "About Us",
            // },
            {
              to: "/contribute",
              className: "contribute-button",
              position: "right",
              // target: "_blank",
              label: "Contribute"
            },
          ],
          hideOnScroll: true,
        },
        footer: {
          style: "dark",
          links: [
            {
              items: [
                {
                  html: `
                  <div class="footer-logo-social-links">
                    <img src="/img/main/cth-earth-logo.png" alt="CTH Earth Logo">
                    <div class="social-links">
                      <a href="https://chat.climatetechhandbook.com" target="_blank" rel="noreferrer noopener" aria-label="Slack">
                        <img src="img/slack_icon.png" alt="Slack Icon" style="margin-right: 15px; width: 40px;"/>
                      </a>
                      <a href="https://www.linkedin.com/company/climate-tech-handbook/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">
                        <img src="img/design/icons/linkedin_icon.svg" alt="LinkedIn Icon" style="margin-right: 15px;"/>
                      </a>
                      <a href="https://github.com/climate-tech-handbook" target="_blank" rel="noreferrer noopener" aria-label="Github">
                        <img src="img/design/icons/github-mark-black.svg" alt="Github Icon" style="width: 40px;" />
                      </a>
                    </div>
                  </div>


                  `,
                },
              ],
            },
            {
              title: "Start Learning",
              items: [
                {
                  label: "Mini Course",
                  to: "/level-1",
                },
                {
                  label: "Resource Library",
                  to: "/resources",
                },
                {
                  label: "Glossary",
                  to: "/glossary",
                },
                {
                  label: "Technologies",
                  to: "/technologies"
                },
              ],
            },
            {
              title: "Solutions",
              items: [
                {
                  label: "All Climate Solutions",
                  to: "/solutions",
                },
              ],
            },
            {
              title: "About Us",
              items: [
                {
                  label: "About The Handbook",
                  to: "/about",
                },
                {
                  label: "Contribute",
                  to: "/contribute",
                },
              ],
            },
            {
              title: "News",
              items: [
                {
                  label: "Blog",
                  to: "/blog",
                  position: "right",
                },
              ],
            },
          ],
          // copyright: `Copyright © ${new Date().getFullYear()} Differential Design, LLC`,
        },

        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },

        colorMode: {
          defaultMode: "light",
          disableSwitch: true,
          respectPrefersColorScheme: false,
        },

        tableOfContents: {
          minHeadingLevel: 2,
          maxHeadingLevel: 2,
        },
      }),
  };
