'use strict';

class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  async mostPopular() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 25,
      },
    });
    return response.data.items;
  }

  async search(query) {
    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        q: query,
      },
    });
    return response.data.items.map(item => ({ ...item, id: item.id.videoId }));
  }

  async comments(comId) {
    const response = await this.youtube.get('commentThreads', {
      params: {
        part: 'snippet',
        videoId: comId,
      },
    });
    return response.data.items.map(item => ({ ...item, id: item.snippet.videoId }));
  }
}

export default Youtube;
