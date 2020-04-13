export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e94a24135e46e019fcaa04e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-2hwwpk4u',
                  apiId: '299701df-1061-45da-8fda-91818183f4bd'
                },
                {
                  buildHookId: '5e94a24162f8b901d71c75d6',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-io43bro8',
                  apiId: '893d7da0-8e22-42c0-aa00-17abe8d80038'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ddavies-cervello/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-io43bro8.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
