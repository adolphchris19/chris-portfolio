// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Chris Adolphus',
  templates: {
    Portfolio: '/portfolio/:title',
    About: '/about'
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Portfolio',
        path: 'content/works/*.md'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'About',
        path: 'content/about/*.md'
      }
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`
      }
    },
    {
      use: 'gridsome-plugin-netlify-cms-paths',
      options: {
        contentTypes: ['Portfolio'],
        coverField: 'cover_image'
      }
    },
    {
      use: 'gridsome-plugin-netlify-cms-paths',
      options: {
        contentTypes: ['About'],
        coverField: 'profile_image'
      }
    }
  ],
  transformers: {
    remark: {}
  }
};
