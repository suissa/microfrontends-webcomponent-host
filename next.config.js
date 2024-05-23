module.exports = {
  async rewrites() {
    return [
      {
        source: '/course-list.js',
        destination: 'http://localhost:4001/course-list.js'
      },
      {
        source: '/course-search.js',
        destination: 'http://localhost:4002/course-search.js'
      }
    ];
  }
};
