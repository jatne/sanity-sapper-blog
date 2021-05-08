export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '609663804cc3e7201e5fad78',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-okdme4qu',
                  apiId: '308a08af-46f4-46cf-bf1c-1c4812d31a78'
                },
                {
                  buildHookId: '6096637f53ac8f2e89b607ec',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-9n6ux8sb',
                  apiId: '1a01a2e3-f1eb-408b-8bee-6187604bacd0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jatne/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-9n6ux8sb.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
